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
  RecordItem,
  RecordService,
  CrearRecordDto
} from '../../../../core/api/record.service';

@Component({
  selector: 'app-historial-clinico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.scss']
})
export class HistorialClinicoComponent implements OnChanges {
  private recordApi = inject(RecordService);

  @Input() pet!: Mascota;

  historial: RecordItem[] = [];
  cargando = false;
  error?: string;

  // formulario nuevo
  nuevo: {
    fecha: string;
    descripcion: string;
    veterinario: string;
    cita: string;
  } = { fecha: '', descripcion: '', veterinario: '', cita: '' };

  // edición
  editando: RecordItem | null = null;
  editModel: {
    fecha: string;
    descripcion: string;
    veterinario: string;
  } = { fecha: '', descripcion: '', veterinario: '' };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pet'] && this.pet?.id) {
      this.cargarHistorial();
    }
  }

  cargarHistorial() {
    if (!this.pet) return;
    this.cargando = true;
    this.error = undefined;
    this.recordApi.listByPet(this.pet.id).subscribe({
      next: (list) => (this.historial = list || []),
      error: (e) => {
        this.error = e?.error?.message || 'No se pudo cargar el historial';
        this.historial = [];
      },
      complete: () => (this.cargando = false)
    });
  }

  onSubmitNuevo(form: NgForm) {
    if (!this.pet || form.invalid) return;

    const payload: CrearRecordDto = {
      fecha: this.nuevo.fecha,
      descripcion: this.nuevo.descripcion,
      veterinario: this.nuevo.veterinario,
      titulo: this.nuevo.cita || 'Registro',
      tipo: 'General',
      mascota_id_fk: this.pet.id
    };

    this.recordApi.create(payload).subscribe({
      next: (item) => {
        this.historial = [...this.historial, item];
        this.nuevo = { fecha: '', descripcion: '', veterinario: '', cita: '' };
        form.resetForm();
      },
      error: (e) => {
        this.error = e?.error?.message || 'No se pudo crear el registro';
      }
    });
  }

  abrirEditar(item: RecordItem) {
    this.editando = item;
    this.editModel = {
      fecha: item.fecha.substring(0, 16),
      descripcion: item.descripcion || '',
      veterinario: item.veterinario || ''
    };
  }

  cancelarEdicion() {
    this.editando = null;
  }

  onSubmitEditar(form: NgForm) {
    if (!this.editando || form.invalid) return;

    const payload: Partial<CrearRecordDto> = {
      fecha: this.editModel.fecha,
      descripcion: this.editModel.descripcion,
      veterinario: this.editModel.veterinario
    };

    this.recordApi.update(this.editando.id, payload).subscribe({
      next: (actualizado) => {
        this.historial = this.historial.map((h) =>
          h.id === actualizado.id ? actualizado : h
        );
        this.cancelarEdicion();
      },
      error: (e) => {
        this.error = e?.error?.message || 'No se pudo actualizar el registro';
      }
    });
  }

  eliminarRegistro(item: RecordItem) {
    if (!confirm('¿Eliminar este registro?')) return;

    this.recordApi.delete(item.id).subscribe({
      next: () => {
        this.historial = this.historial.filter((h) => h.id !== item.id);
      },
      error: (e) => {
        this.error = e?.error?.message || 'No se pudo eliminar el registro';
      }
    });
  }
}
