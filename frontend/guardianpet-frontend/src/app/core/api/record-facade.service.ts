// src/app/core/api/record-facade.service.ts
import { Injectable, inject } from '@angular/core';
import { forkJoin, of, switchMap, map, Observable } from 'rxjs';
import {
  RecordService,
  CrearRecordDto,
  RecordItem,
} from './record.service';
import {
  DetEnfermedadService,
  CrearDetEnfermedadDto,
} from './det-enfermedad.service';
import {
  DetVacunaService,
  CrearDetVacunaDto,
} from './det-vacuna.service';
import {
  DetOperacionService,
  CrearDetOperacionDto,
} from './det-operacion.service';
import {
  TratamientoService,
  CrearTratamientoDto,
} from './tratamiento.service';

export interface EnfermedadConTratamientos {
  detalle: Omit<CrearDetEnfermedadDto, 'historial_clinico_id_fk'>;
  tratamientos?: CrearTratamientoDto[];
}

export interface NuevaHistoriaClinicaConDetalles {
  record: CrearRecordDto;
  enfermedades?: EnfermedadConTratamientos[];
  vacunas?: Omit<CrearDetVacunaDto, 'historial_clinico_id_fk'>[];
  operaciones?: Omit<CrearDetOperacionDto, 'historial_clinico_id_fk'>[];
}

@Injectable({ providedIn: 'root' })
export class RecordFacadeService {
  private recordSvc = inject(RecordService);
  private detEnfSvc = inject(DetEnfermedadService);
  private detVacSvc = inject(DetVacunaService);
  private detOpSvc = inject(DetOperacionService);
  private tratSvc = inject(TratamientoService);

  /**
   * Crea un historial clínico y, opcionalmente,
   * sus detalles de enfermedad->tratamientos, vacunas y operaciones.
   */
  createWithDetails(dto: NuevaHistoriaClinicaConDetalles): Observable<RecordItem> {
    return this.recordSvc.create(dto.record).pipe(
      switchMap((record) => {
        const recordId = record.id;
        const ops: Observable<any>[] = [];

        // ENFERMEDADES + TRATAMIENTOS
        dto.enfermedades?.forEach((e) => {
          const detPayload: CrearDetEnfermedadDto = {
            ...e.detalle,
            historial_clinico_id_fk: recordId,
          };

          const det$ = this.detEnfSvc.create(detPayload).pipe(
            switchMap(() => {
              if (!e.tratamientos || e.tratamientos.length === 0) {
                return of(null);
              }
              const tratCalls = e.tratamientos.map((t) =>
                this.tratSvc.create({
                  ...t,
                  det_enfermedad_id_fk: e.detalle.enfermedad_id_fk,
                })
              );
              return forkJoin(tratCalls);
            })
          );

          ops.push(det$);
        });

        // VACUNAS
        dto.vacunas?.forEach((v) => {
          const payload: CrearDetVacunaDto = {
            ...v,
            historial_clinico_id_fk: recordId,
          };
          ops.push(this.detVacSvc.create(payload));
        });

        // OPERACIONES
        dto.operaciones?.forEach((o) => {
          const payload: CrearDetOperacionDto = {
            ...o,
            historial_clinico_id_fk: recordId,
          };
          ops.push(this.detOpSvc.create(payload));
        });

        if (ops.length === 0) {
          return of(record);
        }
        return forkJoin(ops).pipe(map(() => record));
      })
    );
  }
}
