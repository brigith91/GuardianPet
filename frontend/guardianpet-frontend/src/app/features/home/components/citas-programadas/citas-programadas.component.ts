import {
  CommonModule
} from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Mascota } from '../../../../core/api/pet.service';
import {
  AppointmentService,
  Cita,
  CrearCitaDto
} from '../../../../core/api/appointment.service';

@Component({
  selector: 'app-citas-programadas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './citas-programadas.component.html',
  styleUrls: ['./citas-programadas.component.scss']
})
export class CitasProgramadasComponent implements OnChanges {
  private citasApi = inject(AppointmentService);

  @Input() pet!: Mascota;

  citas: Cita[] = [];
  cargando = false;
  error?: string;

  nueva: {
    fecha: string;
    motivo: string;
    estado: string;
    observacion: string;
    veterinario_id_fk: number | null;
  } = {
    fecha: '',
    motivo: '',
    estado: '',
    observacion: '',
    veterinario_id_fk: null
  };

  editando: Cita | null = null;
  editModel: {
    fecha: string;
    estado: string;
    observacion: string;
    veterinario_id_fk: number | null;
  } = {
    fecha: '',
    estado: '',
    observacion: '',
    veterinario_id_fk: null
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pet'] && this.pet?.id) {
      this.cargarCitas();
    }
  }

  cargarCitas() {
    if (!this.pet) return;
    this.cargando = true;
    this.error = undefined;
    this.citasApi.listByPet(this.pet.id).subscribe({
      next: (list) => (this.citas = list || []),
      error: (e) => {
        this.error = e?.error?.message || 'No se pudieron cargar las citas';
        this.citas = [];
      },
      complete: () => (this.cargando = false)
    });
  }

  onSubmitNueva(form: NgForm) {
    if (!this.pet || form.invalid) return;

    const payload: CrearCitaDto = {
      fecha: this.nueva.fecha,
      estado: this.nueva.estado,
      observacion: this.nueva.observacion || this.nueva.motivo,
      mascota_id_fk: this.pet.id,
      veterinario_id_fk: this.nueva.veterinario_id_fk || 1 // por defecto
    };

    this.citasApi.create(payload).subscribe({
      next: (cita) => {
        this.citas = [...this.citas, cita];
        this.nueva = {
          fecha: '',
          motivo: '',
          estado: '',
          observacion: '',
          veterinario_id_fk: null
        };
        form.resetForm();
      },
      error: (e) => {
        this.error = e?.error?.message || 'No se pudo crear la cita';
      }
    });
  }

  abrirEditar(c: Cita) {
    this.editando = c;
    this.editModel = {
      fecha: c.fecha.substring(0, 16),
      estado: c.estado,
      observacion: c.observacion || '',
      veterinario_id_fk: c.veterinario_id_fk
    };
  }

  cancelarEdicion() {
    this.editando = null;
  }

  onSubmitEditar(form: NgForm) {
    if (!this.editando || form.invalid) return;

    const payload: Partial<CrearCitaDto> = {
      fecha: this.editModel.fecha,
      estado: this.editModel.estado,
      observacion: this.editModel.observacion,
      veterinario_id_fk: this.editModel.veterinario_id_fk || undefined
    };

    this.citasApi.update(this.editando.id, payload).subscribe({
      next: (actualizada) => {
        this.citas = this.citas.map((c) =>
          c.id === actualizada.id ? actualizada : c
        );
        this.cancelarEdicion();
      },
      error: (e) => {
        this.error = e?.error?.message || 'No se pudo actualizar la cita';
      }
    });
  }

  eliminarCita(c: Cita) {
    if (!confirm('¿Eliminar esta cita?')) return;

    this.citasApi.delete(c.id).subscribe({
      next: () => {
        this.citas = this.citas.filter((x) => x.id !== c.id);
      },
      error: (e) => {
        this.error = e?.error?.message || 'No se pudo eliminar la cita';
      }
    });
  }
}
