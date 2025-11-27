import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
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

import {
  EnfermedadService,
  EnfermedadCatalog,
} from '../../../../core/api/enfermedad.service';

import {
  VacunaService,
  VacunaCatalog,
} from '../../../../core/api/vacuna.service';

import {
  OperacionService,
  OperacionCatalog,
} from '../../../../core/api/operacion.service';

import { AppointmentService } from '../../../../core/api/appointment.service';
import { VeterinarioService, Veterinario } from '../../../../core/api/veterinario.service';
import { switchMap, map } from 'rxjs/operators';



@Component({
  selector: 'app-historial-clinico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.scss'],
})
export class HistorialClinicoComponent implements OnChanges, OnInit {
  // Servicios
  private recordSvc = inject(RecordService);
  private detEnfSvc = inject(DetEnfermedadService);
  private detVacSvc = inject(DetVacunaService);
  private detOpSvc = inject(DetOperacionService);
  private tratSvc = inject(TratamientoService);
  private enfermedadSvc = inject(EnfermedadService);
  private vacunaSvc = inject(VacunaService);
  private operacionSvc = inject(OperacionService);
  private appointmentSvc = inject(AppointmentService);
  private veterinarioSvc = inject(VeterinarioService);



  @Input() pet?: Mascota | null;

  // toggles de modales
  modalHistorialAbierto = false;

  @ViewChild('toggleEnfermedadInput')
  toggleEnfermedadInput?: ElementRef<HTMLInputElement>;


  @ViewChild('toggleTratamientoInput')
  toggleTratamientoInput?: ElementRef<HTMLInputElement>;

  @ViewChild('toggleVacunaInput')
  toggleVacunaInput?: ElementRef<HTMLInputElement>;

  @ViewChild('toggleOperacionInput')
  toggleOperacionInput?: ElementRef<HTMLInputElement>;

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

  // ===== DETALLES OPCIONALES =====

  // ENFERMEDAD
  detalleEnfermedad = {
    id: null as number | null,
    enfermedad_id_fk: null as number | null,
    fecha_inicio: '',
    fecha_fin: '',
    descripcion: '',
  };
  tieneEnfermedad = false;

  // TRATAMIENTO (DEPENDE DE det_enfermedad)
  detalleTratamiento = {
    id: null as number | null,
    det_enfermedad_id_fk: null as number | null,
    tipo: '',
    fecha: '',
    fecha_fin: '',
    descripcion: '',
  };
  tieneTratamiento = false;

  // VACUNA
  detalleVacuna = {
    id: null as number | null,
    vacuna_id_fk: null as number | null,
    fecha: '',
    observaciones: '',
  };
  tieneVacuna = false;

  // OPERACIÓN
  detalleOperacion = {
    id: null as number | null,
    operacion_id_fk: null as number | null,
    fecha: '',
    observaciones: '',
  };
  tieneOperacion = false;


  // --------- ARCHIVO ADJUNTO ----------
  archivoSeleccionado: File | null = null;
  archivoNombre = '';
  errorArchivo: string | null = null;

  // --------- LISTAS PARA SELECTS (rellena desde tu API) ---------
  veterinarios: Veterinario[] = [];
  veterinarioMap = new Map<number, string>(); // 👈 NUEVO

  citas: any[] = [];

  // --------- CATÁLOGOS ---------
  enfermedadesCatalog: EnfermedadCatalog[] = [];
  vacunasCatalog: VacunaCatalog[] = [];
  operacionesCatalog: OperacionCatalog[] = [];


  // -------- CICLO DE VIDA --------
    ngOnInit(): void {
    this.cargarCatalogos();
    this.cargarVeterinarios();   // 👈 importante

    if (this.pet?.id) {
      this.cargarHistorial();
      // si ya tienes algo para citas, déjalo
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pet']) {
      if (this.pet?.id) {
        this.cargarHistorial();
        this.cargarCitasYVeterinarios();
        this.cargarVeterinarios();
      } else {
        this.historial = [];
        this.citas = [];
        this.veterinarios = [];
      }
    }
  }


  // --------- UTILIDADES FECHA ----------
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

  // --------- CARGAR CATÁLOGOS ----------
  private cargarCatalogos() {
    // Enfermedades
    this.enfermedadSvc.listAll().subscribe({
      next: (lista) => {
        this.enfermedadesCatalog = lista || [];
      },
      error: (e: any) => console.error('Error cargando enfermedades', e),
    });

    // Vacunas
    this.vacunaSvc.listAll().subscribe({
      next: (lista) => {
        this.vacunasCatalog = lista || [];
      },
      error: (e: any) => console.error('Error cargando vacunas', e),
    });

    // Operaciones
    this.operacionSvc.listAll().subscribe({
      next: (lista) => {
        this.operacionesCatalog = lista || [];
      },
      error: (e: any) => console.error('Error cargando operaciones', e),
    });
  }

  // --------- LISTAR HISTORIAL ----------
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
        // Enriquecemos cada registro con flags según los detalles que traiga el back
        const enriched = (lista || []).map((r: any) => {
          const detEnf = r.det_enfermedad || r.det_enfermedades || [];
          const detVac = r.det_vacuna || r.det_vacunas || [];
          const detOp = r.det_operacion || r.det_operaciones || [];

          const tratamientosDirectos = r.tratamientos || [];
          const tratamientosDesdeEnf = Array.isArray(detEnf)
            ? detEnf.flatMap((d: any) => d.tratamientos || d.tratamiento || [])
            : [];

          return {
            ...r,
            // booleans calculados en base a lo que viene del back
            tiene_enfermedad:
              !!r.tiene_enfermedad ||
              (Array.isArray(detEnf) && detEnf.length > 0),

            tiene_tratamiento:
              !!r.tiene_tratamiento ||
              tratamientosDirectos.length > 0 ||
              tratamientosDesdeEnf.length > 0,

            tiene_vacuna:
              !!r.tiene_vacuna ||
              (Array.isArray(detVac) && detVac.length > 0),

            tiene_operacion:
              !!r.tiene_operacion ||
              (Array.isArray(detOp) && detOp.length > 0),
          };
        });

        this.historial = enriched as any;
        this.cargando = false;

        if (!this.historial.length) {
          this.noResultsMsg = 'Esta mascota no tiene historial clínico.';
        }
      },
      error: (err: HttpErrorResponse) => {
        this.cargando = false;

        if (err.status === 404) {
          // 404 = el back no encontró registros
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

  private cargarVeterinarios() {
    this.veterinarioSvc.listAll().subscribe({
      next: (lista: Veterinario[]) => {
        this.veterinarios = lista || [];

        this.veterinarioMap.clear();
        for (const v of this.veterinarios) {
          const baseName = v.nombre || `Veterinario #${v.id}`;
          const label = v.matricula
            ? `${baseName} (Mat: ${v.matricula})`
            : baseName;

          this.veterinarioMap.set(Number(v.id), label);
        }
      },
      error: (err) => {
        console.error('Error cargando veterinarios', err);
        this.veterinarios = [];
        this.veterinarioMap.clear();
      },
    });
  }


    // --------- CARGAR CITAS Y ARMAR LISTA DE VETERINARIOS ----------
  private cargarCitasYVeterinarios() {
    if (!this.pet?.id) {
      this.citas = [];
      this.veterinarios = [];
      return;
    }

    // OJO: si tu AppointmentService tiene otro nombre de método
    // (por ejemplo listAll, listByPetId, etc.), cambia aquí.
    this.appointmentSvc.listByPet(this.pet.id).subscribe({
      next: (lista: any[]) => {
        this.citas = lista || [];

        const mapa = new Map<number, string>();

        // sacamos los veterinarios únicos de las citas
        for (const c of this.citas) {
          const vetId = c.veterinario_id_fk || c.veterinarioIdFk;
          if (!vetId) continue;

          const nombre =
            c.veterinario?.nombre

          if (!mapa.has(vetId)) {
            mapa.set(vetId, nombre);
          }
        }

        this.veterinarios = Array.from(mapa.entries()).map(
          ([id, nombre]) => ({ id, nombre })
        );
      },
      error: (err) => {
        console.error('Error cargando citas', err);
        this.citas = [];
        this.veterinarios = [];
      },
    });
  }


  get tieneHistorial(): boolean {
    return !!this.historial && this.historial.length > 0;
  }

  // --------- MODALES ----------
  private abrirModalHistorial() {
    this.modalHistorialAbierto = true;
  }

  private cerrarModalHistorial() {
    this.modalHistorialAbierto = false;
  }


  private cerrarCheckboxModal(ref?: ElementRef<HTMLInputElement>) {
    if (ref?.nativeElement) {
      ref.nativeElement.checked = false;
    }
  }

  // --------- FORM: CREAR / EDITAR ----------
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

    // limpiar archivo
    this.archivoSeleccionado = null;
    this.archivoNombre = '';
    this.errorArchivo = null;

    this.abrirModalHistorial();
  }


  openEdit(record: RecordItem) {
    this.formMode = 'edit';
    this.editingId = record.id;

    this.formModel = {
      fecha: this.toInputDateTime(record.fecha),
      descripcion: record.descripcion || '',
      tipo: record.tipo || '',
      url_archivos: record.url_archivos || '',
      veterinario_id_fk: (record as any).veterinario_id_fk ?? null,
      cita_id_fk: (record as any).cita_id_fk ?? null,
    };

    this.error = null;
    this.precargarDetallesDesdeRecord(record);
    this.abrirModalHistorial();
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

    // Construimos payload sin mandar nulls a campos numéricos opcionales
    const basePayload: any = {
      fecha: this.fromInputDateTime(this.formModel.fecha),
      descripcion: this.formModel.descripcion,
      tipo: this.formModel.tipo || 'Registro',
      url_archivos: this.formModel.url_archivos || undefined,
      veterinario_id_fk: this.formModel.veterinario_id_fk ?? undefined,
      mascota_id_fk: this.pet.id,
      cita_id_fk: this.formModel.cita_id_fk ?? undefined,
    };

    // Limpiar claves que queden vacías/null para que el back las trate como "no enviadas"
    if (!basePayload.url_archivos) delete basePayload.url_archivos;
    if (basePayload.veterinario_id_fk == null)
      delete basePayload.veterinario_id_fk;
    if (basePayload.cita_id_fk == null) delete basePayload.cita_id_fk;

    const payload: CrearRecordDto = basePayload;

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
            this.cargarHistorial();
            form.resetForm();
            this.resetDetalles();
            this.cerrarModalHistorial();
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

    onArchivoSeleccionado(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || !input.files.length) {
      this.archivoSeleccionado = null;
      this.archivoNombre = '';
      this.errorArchivo = null;
      return;
    }

    const file = input.files[0];
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    const extensionesPermitidas = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];

    if (!extensionesPermitidas.includes(extension)) {
      this.errorArchivo = 'Solo se permiten archivos PDF, Word o Excel.';
      this.archivoSeleccionado = null;
      this.archivoNombre = '';
      input.value = '';
      return;
    }

    this.errorArchivo = null;
    this.archivoSeleccionado = file;
    this.archivoNombre = file.name;

    // Convertimos el archivo a base64 y lo guardamos en url_archivos.
    // Si tu backend espera una URL en vez de base64, aquí podrías
    // cambiar esto por una llamada HTTP para subir el archivo y
    // guardar solo la URL que te devuelva el servidor.
    const reader = new FileReader();
    reader.onload = () => {
      this.formModel.url_archivos = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


  // --------- DETALLES: FLAGS Y HELPERS ----------
  confirmarEnfermedad() {
    if (!this.detalleEnfermedad.enfermedad_id_fk) return;
    this.tieneEnfermedad = true;
    this.cerrarCheckboxModal(this.toggleEnfermedadInput);
  }

  confirmarTratamiento() {
    this.tieneTratamiento = true;
    this.cerrarCheckboxModal(this.toggleTratamientoInput);
  }

  confirmarVacuna() {
    if (!this.detalleVacuna.vacuna_id_fk) return;
    this.tieneVacuna = true;
    this.cerrarCheckboxModal(this.toggleVacunaInput);
  }

  confirmarOperacion() {
    if (!this.detalleOperacion.operacion_id_fk) return;
    this.tieneOperacion = true;
    this.cerrarCheckboxModal(this.toggleOperacionInput);
  }

  private resetDetalles() {
    this.detalleEnfermedad = {
      id: null,
      enfermedad_id_fk: null,
      fecha_inicio: '',
      fecha_fin: '',
      descripcion: '',
    };

    this.detalleTratamiento = {
      id: null,
      det_enfermedad_id_fk: null,
      tipo: '',
      fecha: '',
      fecha_fin: '',
      descripcion: '',
    };

    this.detalleVacuna = {
      id: null,
      vacuna_id_fk: null,
      fecha: '',
      observaciones: '',
    };

    this.detalleOperacion = {
      id: null,
      operacion_id_fk: null,
      fecha: '',
      observaciones: '',
    };

    this.tieneEnfermedad = false;
    this.tieneTratamiento = false;
    this.tieneVacuna = false;
    this.tieneOperacion = false;
  }


  /** Precarga los detalles (enfermedad, tratamiento, vacuna, operación) al editar */
  private precargarDetallesDesdeRecord(record: RecordItem) {
    this.resetDetalles();
    const r: any = record as any;

    // ENFERMEDAD
    const detEnf = this.getPrimeraEnfermedad(record);
    if (detEnf) {
      this.tieneEnfermedad = true;
      this.detalleEnfermedad = {
        id: detEnf.id ?? null,
        enfermedad_id_fk:
          detEnf.enfermedad_id_fk ??
          detEnf.enfermedad_id ??
          detEnf.enfermedad?.id ??
          null,
        fecha_inicio: this.toInputDateTime(
          detEnf.fecha_inicio || detEnf.fechaInicio || detEnf.fecha || ''
        ),
        fecha_fin: this.toInputDateTime(
          detEnf.fecha_fin || detEnf.fechaFin || ''
        ),
        descripcion: detEnf.descripcion || detEnf.observaciones || '',
      };
    }

    // TRATAMIENTO (depende del det_enfermedad)
    const trat = this.getPrimerTratamiento(record);
    if (trat) {
      this.tieneTratamiento = true;
      this.detalleTratamiento = {
        id: trat.id ?? null,
        det_enfermedad_id_fk:
          trat.det_enfermedad_id_fk ?? this.detalleEnfermedad.id ?? null,
        tipo: trat.tipo || '',
        fecha: this.toInputDateTime(trat.fecha || trat.fecha_inicio || ''),
        fecha_fin: this.toInputDateTime(trat.fecha_fin || trat.fechaFin || ''),
        descripcion: trat.descripcion || '',
      };
    }

    // VACUNA
    const detVac = this.getPrimeraVacuna(record);
    if (detVac) {
      this.tieneVacuna = true;
      this.detalleVacuna = {
        id: detVac.id ?? null,
        vacuna_id_fk:
          detVac.vacuna_id_fk ??
          detVac.vacuna_id ??
          detVac.vacuna?.id ??
          null,
        fecha: this.toInputDateTime(detVac.fecha || ''),
        observaciones: detVac.observaciones || '',
      };
    }

    // OPERACIÓN
    const detOp = this.getPrimeraOperacion(record);
    if (detOp) {
      this.tieneOperacion = true;
      this.detalleOperacion = {
        id: detOp.id ?? null,
        operacion_id_fk:
          detOp.operacion_id_fk ??
          detOp.operacion_id ??
          detOp.operacion?.id ??
          null,
        fecha: this.toInputDateTime(detOp.fecha || ''),
        observaciones: detOp.observaciones || '',
      };
    }
  }



  // --------- GUARDA DETALLES EN PARALELO ----------
  private guardarDetalles(historialId: number): Observable<unknown> {
  // 1) RESOLVER det_enfermedad (create/update) Y OBTENER SU ID
  let detEnfermedadId$: Observable<number | null>;

  if (this.tieneEnfermedad && this.detalleEnfermedad.enfermedad_id_fk) {
    const detEnfPayload: CrearDetEnfermedadDto = {
      historial_clinico_id_fk: historialId,
      enfermedad_id_fk: this.detalleEnfermedad.enfermedad_id_fk!,
      fecha_inicio: this.fromInputDateTime(this.detalleEnfermedad.fecha_inicio),
      fecha_fin: this.fromInputDateTime(this.detalleEnfermedad.fecha_fin),
      descripcion: this.detalleEnfermedad.descripcion,
    };

    if (this.formMode === 'edit' && this.detalleEnfermedad.id) {
      // UPDATE -> no rompe la unique constraint
      detEnfermedadId$ = this.detEnfSvc
        .update(this.detalleEnfermedad.id, detEnfPayload)
        .pipe(map(() => this.detalleEnfermedad.id!));
    } else {
      // CREATE
      detEnfermedadId$ = this.detEnfSvc
        .create(detEnfPayload)
        .pipe(map((resp: any) => resp.id as number));
    }
  } else {
    detEnfermedadId$ = of(null);
  }

  // 2) CON ESE ID, GUARDAR TRATAMIENTO, VACUNA Y OPERACIÓN
  return detEnfermedadId$.pipe(
    switchMap((detEnfId) => {
      const ops: Observable<unknown>[] = [];

      // TRATAMIENTO
      if (this.tieneTratamiento) {
        const fk =
          detEnfId ??
          this.detalleTratamiento.det_enfermedad_id_fk ??
          null;

        if (fk) {
          const tratPayload: CrearTratamientoDto = {
            tipo: this.detalleTratamiento.tipo,
            fecha: this.fromInputDateTime(this.detalleTratamiento.fecha),
            fecha_fin: this.fromInputDateTime(this.detalleTratamiento.fecha_fin),
            descripcion: this.detalleTratamiento.descripcion,
            det_enfermedad_id_fk: fk,
          };

          let trat$: Observable<unknown>;
          if (this.formMode === 'edit' && this.detalleTratamiento.id) {
            trat$ = this.tratSvc.update(
              this.detalleTratamiento.id,
              tratPayload
            );
          } else {
            trat$ = this.tratSvc.create(tratPayload);
          }
          ops.push(trat$);
        }
      }

      // VACUNA
      if (this.tieneVacuna && this.detalleVacuna.vacuna_id_fk) {
        const detVPayload: CrearDetVacunaDto = {
          historial_clinico_id_fk: historialId,
          vacuna_id_fk: this.detalleVacuna.vacuna_id_fk!,
          fecha: this.fromInputDateTime(this.detalleVacuna.fecha),
          observaciones: this.detalleVacuna.observaciones,
        };

        if (this.formMode === 'edit' && this.detalleVacuna.id) {
          ops.push(this.detVacSvc.update(this.detalleVacuna.id, detVPayload));
        } else {
          ops.push(this.detVacSvc.create(detVPayload));
        }
      }

      // OPERACIÓN
      if (this.tieneOperacion && this.detalleOperacion.operacion_id_fk) {
        const detOPayload: CrearDetOperacionDto = {
          historial_clinico_id_fk: historialId,
          operacion_id_fk: this.detalleOperacion.operacion_id_fk!,
          fecha: this.fromInputDateTime(this.detalleOperacion.fecha),
          observaciones: this.detalleOperacion.observaciones,
        };

        if (this.formMode === 'edit' && this.detalleOperacion.id) {
          ops.push(this.detOpSvc.update(this.detalleOperacion.id, detOPayload));
        } else {
          ops.push(this.detOpSvc.create(detOPayload));
        }
      }

      if (!ops.length) {
        return of(null);
      }
      return forkJoin(ops);
    })
  );
}


  // --------- DETALLES EXPANDIBLES EN LA LISTA ----------
  registroExpandidoId: number | null = null;

  toggleDetalles(record: RecordItem) {
    this.registroExpandidoId =
      this.registroExpandidoId === record.id ? null : record.id;
  }

  /** Devuelve la primera enfermedad asociada al registro (o null) */
  getPrimeraEnfermedad(record: RecordItem): any | null {
    const r: any = record as any;
    const detEnf = r.det_enfermedad || r.det_enfermedades;

    if (!detEnf) return null;
    if (Array.isArray(detEnf)) {
      return detEnf[0] || null;
    }
    return detEnf;
  }

  /** Devuelve el primer tratamiento (directo o desde enfermedad) */
  getPrimerTratamiento(record: RecordItem): any | null {
    const r: any = record as any;

    const tratamientosDirectos: any[] = r.tratamientos || [];
    if (Array.isArray(tratamientosDirectos) && tratamientosDirectos.length) {
      return tratamientosDirectos[0];
    }

    const detEnf = r.det_enfermedad || r.det_enfermedades || [];
    const desdeEnf: any[] = Array.isArray(detEnf)
      ? detEnf.flatMap((d: any) => d.tratamientos || d.tratamiento || [])
      : [];

    if (desdeEnf.length) {
      return desdeEnf[0];
    }

    return null;
  }

  /** Devuelve la primera vacuna asociada al registro (o null) */
  getPrimeraVacuna(record: RecordItem): any | null {
    const r: any = record as any;
    const detVac = r.det_vacuna || r.det_vacunas;

    if (!detVac) return null;
    if (Array.isArray(detVac)) {
      return detVac[0] || null;
    }
    return detVac;
  }

  /** Devuelve la primera operación asociada al registro (o null) */
  getPrimeraOperacion(record: RecordItem): any | null {
    const r: any = record as any;
    const detOp = r.det_operacion || r.det_operaciones;

    if (!detOp) return null;
    if (Array.isArray(detOp)) {
      return detOp[0] || null;
    }
    return detOp;
  }

  // --------- HELPERS PARA LA VISTA (chips de detalles) ----------
  hasEnfermedad(r: any): boolean {
    const detEnf = r.det_enfermedad || r.det_enfermedades;
    return !!(r.tiene_enfermedad || (Array.isArray(detEnf) && detEnf.length));
  }

  hasTratamiento(r: any): boolean {
    const detEnf = r.det_enfermedad || r.det_enfermedades || [];
    const tratamientosDirectos = r.tratamientos || [];
    const tratamientosDesdeEnf = Array.isArray(detEnf)
      ? detEnf.flatMap((d: any) => d.tratamientos || d.tratamiento || [])
      : [];

    return (
      !!r.tiene_tratamiento ||
      tratamientosDirectos.length ||
      tratamientosDesdeEnf.length
    );
  }

  hasVacuna(r: any): boolean {
    const detVac = r.det_vacuna || r.det_vacunas;
    return !!(r.tiene_vacuna || (Array.isArray(detVac) && detVac.length));
  }

  hasOperacion(r: any): boolean {
    const detOp = r.det_operacion || r.det_operaciones;
    return !!(r.tiene_operacion || (Array.isArray(detOp) && detOp.length));
  }

    // --------- LABELS PARA VISTA: VETERINARIO Y CITA ----------
  getVeterinarioLabel(r: RecordItem): string {
  const anyR: any = r as any;

  const rawId =
    anyR.veterinario_id_fk ??
    anyR.veterinarioIdFk ??
    anyR.vet_id;

  const id = rawId != null ? Number(rawId) : NaN;
  if (!id || Number.isNaN(id)) {
    return '-';
  }

  // 1) Si viene el objeto veterinario embebido en el registro
  const vetObj = anyR.veterinario;
  if (vetObj) {
    const baseName = vetObj.nombre || `Veterinario #${id}`;
    const label = vetObj.matricula
      ? `${baseName} (Mat: ${vetObj.matricula})`
      : baseName;
    return label;
  }

  // 2) Intentar el mapa (llenado en cargarVeterinarios)
  const fromMap = this.veterinarioMap.get(id);
  if (fromMap) {
    return fromMap;
  }

  // 3) Extra: buscar en el array por si acaso
  const vetFromList = this.veterinarios.find((v) => Number(v.id) === id);
  if (vetFromList) {
    const baseName = vetFromList.nombre || `Veterinario #${id}`;
    const label = vetFromList.matricula
      ? `${baseName} (Mat: ${vetFromList.matricula})`
      : baseName;
    return label;
  }

  // 4) Fallback
  return `Veterinario #${id}`;
}

  getCitaLabel(r: RecordItem): string {
    const anyR: any = r as any;

    const id =
      anyR.cita_id_fk ??
      anyR.citaIdFk ??
      anyR.appointment_id_fk;

    if (!id) {
      return '-';
    }

    // 1) Objeto cita embebido en el registro
    let cita: any = anyR.cita;

    // 2) Si no viene embebido, la buscamos en el array de citas cargado
    if (!cita && Array.isArray(this.citas)) {
      cita = this.citas.find((c: any) => c.id === id);
    }

    // 3) Texto de observación / descripción
    const observacion =
      cita?.observaciones ??
      cita?.observacion ??
      cita?.descripcion ??
      anyR.cita_observaciones ??
      anyR.cita_observacion ??
      anyR.cita_descripcion;

    if (observacion) {
      return observacion;
    }

    // 4) Si no hay observación, mostramos la fecha si existe
    const fecha = cita?.fecha || anyR.cita_fecha;
    if (fecha) {
      try {
        return new Date(fecha).toLocaleString();
      } catch {
        return `Cita #${id}`;
      }
    }

    // 5) Fallback final
    return `Cita #${id}`;
  }

  
  private base64ToBlob(base64: string, mimeType: string): Blob {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }


   abrirArchivo(r: RecordItem) {
    const anyR: any = r as any;
    let url = anyR.url_archivos as string | undefined;

    if (!url) {
      return;
    }

    // Si ya viene como URL normal, se abre directo
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) {
      window.open(url, '_blank');
      return;
    }

    let mimeType = 'application/pdf';
    let base64 = url;

    // Si viene como data URL: data:application/pdf;base64,XXXXX
    if (url.startsWith('data:')) {
      const match = url.match(/^data:(.*?);base64,(.*)$/);
      if (match) {
        mimeType = match[1] || mimeType;
        base64 = match[2];
      } else {
        // fallback: quitamos lo que hay antes de la coma
        const commaIndex = url.indexOf(',');
        base64 = commaIndex >= 0 ? url.substring(commaIndex + 1) : url;
      }
    }

    try {
      const blob = this.base64ToBlob(base64, mimeType);
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, '_blank');

      // Opcional: liberar memoria después de un rato
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);
    } catch (e) {
      console.error('Error abriendo archivo adjunto', e);
    }
  }

}
