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

  // --------- DETALLES OPCIONALES ----------
  // Enfermedad
  detalleEnfermedad = {
    enfermedad_id_fk: null as number | null,
    fecha_inicio: '',
    fecha_fin: '',
    descripcion: '',
  };
  tieneEnfermedad = false;

  // Tratamiento (ligado a enfermedad)
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
    // Operación
  detalleOperacion = {
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
  veterinarios: { id: number; nombre: string }[] = [];
  citas: any[] = [];

  // --------- CATÁLOGOS ---------
  enfermedadesCatalog: EnfermedadCatalog[] = [];
  vacunasCatalog: VacunaCatalog[] = [];
  operacionesCatalog: OperacionCatalog[] = [];


  // -------- CICLO DE VIDA --------
    ngOnInit(): void {
    this.cargarCatalogos();

    if (this.pet?.id) {
      this.cargarHistorial();
      this.cargarCitasYVeterinarios();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pet']) {
      if (this.pet?.id) {
        this.cargarHistorial();
        this.cargarCitasYVeterinarios();
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
            c.veterinario?.nombre ||
            c.veterinario_nombre ||
            `Veterinario #${vetId}`;

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
      veterinario_id_fk: record.veterinario_id_fk ?? null,
      cita_id_fk: record.cita_id_fk ?? null,
    };

    // no precargamos detalles existentes;
    this.resetDetalles();
    this.error = null;

    // limpiar archivo seleccionado (pero dejamos la url actual)
    this.archivoSeleccionado = null;
    this.archivoNombre = '';
    this.errorArchivo = null;

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

    // ENFERMEDAD + TRATAMIENTO
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

    // intentamos varios posibles nombres de campo para el id
    const id =
      anyR.veterinario_id_fk ??
      anyR.veterinarioIdFk ??
      anyR.vet_id;

    if (!id) {
      return '-';
    }

    // 1) Si el backend manda el objeto veterinario en el registro
    const vetObj = anyR.veterinario;
    if (vetObj?.nombre) {
      return vetObj.nombre;
    }

    // 2) Si viene como campo plano en el registro
    if (anyR.veterinario_nombre) {
      return anyR.veterinario_nombre;
    }

    // 3) Si lo tenemos en el array de veterinarios cargado en el componente
    const vetFromList = this.veterinarios?.find((v) => v.id === id);
    if (vetFromList) {
      return vetFromList.nombre;
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
