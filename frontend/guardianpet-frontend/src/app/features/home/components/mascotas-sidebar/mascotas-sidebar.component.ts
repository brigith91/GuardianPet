// src/app/features/home/components/mascotas-sidebar/mascotas-sidebar.component.ts
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  Mascota,
  MascotaService,
  CrearMascotaDto,
} from '../../../../core/api/pet.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mascotas-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mascotas-sidebar.component.html',
  styleUrls: ['./mascotas-sidebar.component.scss'],
})
export class MascotasSidebarComponent {
  private mascotasApi = inject(MascotaService);
  private sanitizer = inject(DomSanitizer);

  @Input() mascotas: Mascota[] = [];
  @Input() seleccionada?: Mascota;
  @Input() usuarioId?: number;

  @Output() seleccionar = new EventEmitter<Mascota>();
  @Output() creada = new EventEmitter<Mascota>();
  @Output() actualizada = new EventEmitter<Mascota>();

  @ViewChild('toggleModalMascota')
  toggleModalMascota?: ElementRef<HTMLInputElement>;

  @ViewChild('toggleModalEditarMascota')
  toggleModalEditarMascota?: ElementRef<HTMLInputElement>;

  // ---- CREAR ----
  nueva: {
    nombre: string;
    especie: string;
    raza: string;
    sexo: string;
    fecha_nacimiento: string;
    url_foto?: string;
  } = {
    nombre: '',
    especie: '',
    raza: '',
    sexo: '',
    fecha_nacimiento: '',
    url_foto: '',
  };

  nombreArchivo: string | null = null;
  creando = false;
  errorCrear: string | null = null;

  // ---- EDITAR ----
  edit: {
    id?: number;
    nombre: string;
    especie: string;
    raza: string;
    sexo: string;
    fecha_nacimiento: string;
    url_foto?: string;
  } | null = null;

  editNombreArchivo: string | null = null;
  editando = false;
  errorEditar: string | null = null;

  // ----- LISTA -----
  seleccionarMascota(m: Mascota) {
    this.seleccionar.emit(m);
  }

  editarMascota(m: Mascota) {
    this.edit = {
      id: m.id,
      nombre: m.nombre,
      especie: m.especie,
      raza: m.raza,
      sexo: m.sexo,
      // dejamos solo la parte yyyy-MM-dd para el input date
      fecha_nacimiento: (m.fecha_nacimiento || '').slice(0, 10),
      url_foto: m.url_foto || '',
    };
    this.editNombreArchivo = null;
    this.errorEditar = null;

    if (this.toggleModalEditarMascota?.nativeElement) {
      this.toggleModalEditarMascota.nativeElement.checked = true;
    }
  }

  fotoSegura(m: Mascota): SafeUrl {
    const fallback =
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=60&h=60&fit=crop';
    return this.sanitizer.bypassSecurityTrustUrl(m.url_foto || fallback);
  }

  // ----- FORM NUEVA -----
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.nueva.url_foto = '';
      this.nombreArchivo = null;
      return;
    }

    const file = input.files[0];
    this.nombreArchivo = file.name;

    const reader = new FileReader();
    reader.onload = () => {
      // data:image/png;base64,...
      this.nueva.url_foto = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  private cerrarModalCrear() {
    if (this.toggleModalMascota?.nativeElement) {
      this.toggleModalMascota.nativeElement.checked = false;
    }
  }

  onSubmitNueva(form: NgForm) {
    if (form.invalid || !this.usuarioId) {
      this.errorCrear = 'Usuario no identificado.';
      return;
    }

    this.creando = true;
    this.errorCrear = null;

    const payload: CrearMascotaDto = {
      nombre: this.nueva.nombre,
      especie: this.nueva.especie,
      raza: this.nueva.raza,
      sexo: this.nueva.sexo,
      fecha_nacimiento: this.nueva.fecha_nacimiento,
      usuario_id_fk: this.usuarioId,
      url_foto: this.nueva.url_foto || undefined,
    };

    this.mascotasApi.create(payload).subscribe({
      next: (mascota) => {
        this.creando = false;
        this.creada.emit(mascota);

        // reset
        this.nueva = {
          nombre: '',
          especie: '',
          raza: '',
          sexo: '',
          fecha_nacimiento: '',
          url_foto: '',
        };
        this.nombreArchivo = null;
        form.resetForm();

        this.cerrarModalCrear();
      },
      error: (e) => {
        this.creando = false;
        this.errorCrear =
          e?.error?.message || 'No se pudo crear la mascota';
      },
    });
  }

  // ----- FORM EDITAR -----
  onFileChangeEditar(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!this.edit) return;

    if (!input.files || input.files.length === 0) {
      this.edit.url_foto = '';
      this.editNombreArchivo = null;
      return;
    }

    const file = input.files[0];
    this.editNombreArchivo = file.name;

    const reader = new FileReader();
    reader.onload = () => {
      if (this.edit) {
        this.edit.url_foto = reader.result as string;
      }
    };
    reader.readAsDataURL(file);
  }

  private cerrarModalEditar() {
    if (this.toggleModalEditarMascota?.nativeElement) {
      this.toggleModalEditarMascota.nativeElement.checked = false;
    }
    this.edit = null;
    this.editNombreArchivo = null;
    this.editando = false;
    this.errorEditar = null;
  }

  onSubmitEditar(form: NgForm) {
    if (!this.edit || form.invalid) {
      this.errorEditar = 'Formulario inválido.';
      return;
    }

    const id = this.edit.id;
    if (!id) {
      this.errorEditar = 'Mascota inválida.';
      return;
    }

    this.editando = true;
    this.errorEditar = null;

    const payload: Partial<CrearMascotaDto> = {
      nombre: this.edit.nombre,
      especie: this.edit.especie,
      raza: this.edit.raza,
      sexo: this.edit.sexo,
      fecha_nacimiento: this.edit.fecha_nacimiento,
      url_foto: this.edit.url_foto || undefined,
    };

    this.mascotasApi.update(id, payload).subscribe({
      next: (mascota) => {
        this.editando = false;
        this.actualizada.emit(mascota);
        this.cerrarModalEditar();
      },
      error: (e) => {
        this.editando = false;
        this.errorEditar =
          e?.error?.message || 'No se pudo actualizar la mascota';
      },
    });
  }
}
