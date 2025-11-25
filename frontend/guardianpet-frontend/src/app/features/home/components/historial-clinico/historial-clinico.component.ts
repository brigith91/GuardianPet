import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, forkJoin, of } from 'rxjs';

import { Mascota } from '../../../../core/api/pet.service';
import {
  RecordService,
  RecordItem,
  CrearRecordDto,
} from '../../../../core/api/record.service';
import {
  DetEnfermedadService,
  CrearDetEnfermedadDto,
} from '../../../../core/api/det-enfermedad.service';
import {
  DetVacunaService,
  CrearDetVacunaDto,
} from '../../../../core/api/det-vacuna.service';
import {
  DetOperacionService,
  CrearDetOperacionDto,
} from '../../../../core/api/det-operacion.service';
import {
  TratamientoService,
  CrearTratamientoDto,
} from '../../../../core/api/tratamiento.service';

@Component({
  selector: 'app-historial-clinico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.scss'],
})
export class HistorialClinicoComponent implements OnChanges {
  private recordSvc = inject(RecordService);
  private detEnfSvc = inject(DetEnfermedadService);
  private detVacSvc = inject(DetVacunaService);
  private detOpSvc = inject(DetOperacionService);
  private tratSvc = inject(TratamientoService);

  @Input() pet?: Mascota | null;

  @ViewChild('toggleModalHistorial')
  toggleModalHistorial?: ElementRef<HTMLInputElement>;

  historial: RecordItem[] = [];
  cargando = false;
  error: string | null = null;
  noResultsMsg: string | null = null;

  // modo del formulario: crear / editar
  formMode: 'create' | 'edit' = 'create';
  editingId: number | null = null;

  // --------- FORMULARIO HISTORIAL ----------
  formModel = {
    fecha: '',
    descripcion: '',
    tipo: '',
    url_archivos: '',
    veterinario_id_fk: null as number | null,
    cita_id_fk: null as number | null,
  };

  // --------- DETALLES OPCIONALES ----------
  // Enfermedad
  detalleEnfermedad = {
    enfermedad_id_fk: null as number | null,
    fecha_inicio: '',
    fecha_fin: '',
    descripcion: '',
  };
  tieneEnfermedad = false;

  // Tratamiento (ligado a enfermedad: usa enfermedad_id_fk)
  detalleTratamiento = {
    tipo: 1,
    fecha: '',
    fecha_fin: 7, // días
    descripcion: '',
  };
  tieneTratamiento = false;

  // Vacuna
  detalleVacuna = {
    vacuna_id_fk: null as number | null,
    fecha: '',
    observaciones: '',
  };
  tieneVacuna = false;

  // Operación
  detalleOperacion = {
    operacion_id_fk: null as number | null,
    fecha: '',
    observaciones: '',
  };
  tieneOperacion = false;

  // --------- CICLO DE VIDA ----------
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pet'] && this.pet?.id) {
      this.cargarHistorial();
    }
  }

  // --------- UTILIDADES FECHAS ----------
  private toInputDateTime(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso);
    const pad = (n: number) => (n < 10 ? '0' + n : '' + n);
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  private fromInputDateTime(value: string): string {
    if (!value) return new Date().toISOString();
    const d = new Date(value);
    return d.toISOString();
  }

  // --------- LISTAR ----------
  cargarHistorial() {
    if (!this.pet?.id) {
      this.historial = [];
      this.noResultsMsg = null;
      return;
    }

    this.cargando = true;
    this.error = null;
    this.noResultsMsg = null;

    this.recordSvc.listByPet(this.pet.id).subscribe({
      next: (lista) => {
        this.historial = lista || [];
        this.cargando = false;
        if (!this.historial.length) {
          this.noResultsMsg = 'Esta mascota no tiene historial clínico.';
        }
      },
      error: (err: HttpErrorResponse) => {
        this.cargando = false;

        if (err.status === 404) {
          // backend responde 404 cuando no hay registros
          this.historial = [];
          this.error = null;
          this.noResultsMsg = 'No se encontraron resultados.';
          return;
        }

        console.error(err);
        this.error = 'No se pudo cargar el historial clínico.';
      },
    });
  }

  get tieneHistorial(): boolean {
    return !!this.historial && this.historial.length > 0;
  }

  // --------- MODAL: ABRIR / CERRAR ----------
  private abrirModal() {
    if (this.toggleModalHistorial?.nativeElement) {
      this.toggleModalHistorial.nativeElement.checked = true;
    }
  }

  private cerrarModal() {
    if (this.toggleModalHistorial?.nativeElement) {
      this.toggleModalHistorial.nativeElement.checked = false;
    }
  }

  // --------- FORMULARIO: CREAR / EDITAR ----------
  openCreate() {
    this.formMode = 'create';
    this.editingId = null;

    this.formModel = {
      fecha: this.toInputDateTime(new Date().toISOString()),
      descripcion: '',
      tipo: '',
      url_archivos: '',
      veterinario_id_fk: null,
      cita_id_fk: null,
    };

    this.resetDetalles();
    this.error = null;
    this.abrirModal();
  }

  openEdit(record: RecordItem) {
    this.formMode = 'edit';
    this.editingId = record.id;

    this.formModel = {
      fecha: this.toInputDateTime(record.fecha),
      descripcion: record.descripcion || '',
      tipo: record.tipo || '',
      url_archivos: record.url_archivos || '',
      veterinario_id_fk: record.veterinario_id_fk ?? null,
      cita_id_fk: record.cita_id_fk ?? null,
    };

    // al editar no precargamos detalles existentes; si añade, se crean nuevos
    this.resetDetalles();
    this.error = null;
    this.abrirModal();
  }

  guardar(form: NgForm) {
    if (!this.pet?.id) {
      this.error = 'Debes seleccionar una mascota primero.';
      return;
    }
    if (form.invalid) {
      this.error = 'Completa los campos obligatorios.';
      return;
    }

    const payload: CrearRecordDto = {
      fecha: this.fromInputDateTime(this.formModel.fecha),
      descripcion: this.formModel.descripcion,
      tipo: this.formModel.tipo || 'Registro',
      url_archivos: this.formModel.url_archivos || null,
      veterinario_id_fk: this.formModel.veterinario_id_fk,
      mascota_id_fk: this.pet.id,
      cita_id_fk: this.formModel.cita_id_fk,
    };

    this.error = null;

    const obs$ =
      this.formMode === 'create'
        ? this.recordSvc.create(payload)
        : this.recordSvc.update(this.editingId!, payload);

    // 1) crear / actualizar historial
    obs$.subscribe({
      next: (record: any) => {
        // 2) guardar detalles (enfermedad, tratamiento, vacuna, operación)
        this.guardarDetalles(record.id).subscribe({
          next: () => {
            // éxito total: historial + detalles
            this.cargarHistorial();
            form.resetForm();
            this.resetDetalles();
            this.cerrarModal();
          },
          error: (e: any) => {
            console.error(e);
            this.error =
              'El historial se creó/actualizó, pero falló el guardado de detalles.';
          },
        });
      },
      error: (e: any) => {
        console.error(e);
        this.error =
          this.formMode === 'create'
            ? 'No se pudo crear el historial clínico.'
            : 'No se pudo actualizar el historial clínico.';
      },
    });
  }

  eliminar(record: RecordItem) {
    if (!confirm('¿Eliminar este historial clínico?')) return;

    this.recordSvc.delete(record.id).subscribe({
      next: () => this.cargarHistorial(),
      error: (e: any) => {
        console.error(e);
        alert('No se pudo eliminar el historial.');
      },
    });
  }

  // --------- DETALLES: FLAGS Y HELPERS ----------
  confirmarEnfermedad() {
    if (!this.detalleEnfermedad.enfermedad_id_fk) return;
    this.tieneEnfermedad = true;
    alert('Enfermedad asociada al historial.');
  }

  confirmarTratamiento() {
    this.tieneTratamiento = true;
    alert('Tratamiento asociado a la enfermedad.');
  }

  confirmarVacuna() {
    if (!this.detalleVacuna.vacuna_id_fk) return;
    this.tieneVacuna = true;
    alert('Vacuna asociada al historial.');
  }

  confirmarOperacion() {
    if (!this.detalleOperacion.operacion_id_fk) return;
    this.tieneOperacion = true;
    alert('Operación asociada al historial.');
  }

  private resetDetalles() {
    this.detalleEnfermedad = {
      enfermedad_id_fk: null,
      fecha_inicio: '',
      fecha_fin: '',
      descripcion: '',
    };
    this.detalleTratamiento = {
      tipo: 1,
      fecha: '',
      fecha_fin: 7,
      descripcion: '',
    };
    this.detalleVacuna = {
      vacuna_id_fk: null,
      fecha: '',
      observaciones: '',
    };
    this.detalleOperacion = {
      operacion_id_fk: null,
      fecha: '',
      observaciones: '',
    };

    this.tieneEnfermedad = false;
    this.tieneTratamiento = false;
    this.tieneVacuna = false;
    this.tieneOperacion = false;
  }

  // --------- GUARDA DETALLES EN PARALELO ----------
  private guardarDetalles(historialId: number): Observable<unknown> {
    const ops: Observable<unknown>[] = [];

    // ENFERMEDAD
    if (this.tieneEnfermedad && this.detalleEnfermedad.enfermedad_id_fk) {
      const detEnf: CrearDetEnfermedadDto = {
        historial_clinico_id_fk: historialId,
        enfermedad_id_fk: this.detalleEnfermedad.enfermedad_id_fk,
        fecha_inicio: this.fromInputDateTime(
          this.detalleEnfermedad.fecha_inicio
        ),
        fecha_fin: this.fromInputDateTime(this.detalleEnfermedad.fecha_fin),
        descripcion: this.detalleEnfermedad.descripcion,
      };

      const detEnf$ = this.detEnfSvc.create(detEnf);
      ops.push(detEnf$);

      if (this.tieneTratamiento) {
        const trat: CrearTratamientoDto = {
          tipo: this.detalleTratamiento.tipo,
          fecha: this.fromInputDateTime(this.detalleTratamiento.fecha),
          fecha_fin: this.detalleTratamiento.fecha_fin,
          descripcion: this.detalleTratamiento.descripcion,
          enfermedad_id_fk: this.detalleEnfermedad.enfermedad_id_fk!,
        };
        const trat$ = this.tratSvc.create(trat);
        ops.push(trat$);
      }
    }

    // VACUNA
    if (this.tieneVacuna && this.detalleVacuna.vacuna_id_fk) {
      const detV: CrearDetVacunaDto = {
        historial_clinico_id_fk: historialId,
        vacuna_id_fk: this.detalleVacuna.vacuna_id_fk,
        fecha: this.fromInputDateTime(this.detalleVacuna.fecha),
        observaciones: this.detalleVacuna.observaciones,
      };
      const detV$ = this.detVacSvc.create(detV);
      ops.push(detV$);
    }

    // OPERACIÓN
    if (this.tieneOperacion && this.detalleOperacion.operacion_id_fk) {
      const detO: CrearDetOperacionDto = {
        historial_clinico_id_fk: historialId,
        operacion_id_fk: this.detalleOperacion.operacion_id_fk,
        fecha: this.fromInputDateTime(this.detalleOperacion.fecha),
        observaciones: this.detalleOperacion.observaciones,
      };
      const detO$ = this.detOpSvc.create(detO);
      ops.push(detO$);
    }

    if (!ops.length) {
      // no hay detalles que guardar
      return of(null);
    }

    // Ejecuta todas las llamadas en paralelo
    return forkJoin(ops);
  }
}
