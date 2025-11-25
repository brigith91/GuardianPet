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

  @ViewChild('toggleModalMascota')
  toggleModalMascota?: ElementRef<HTMLInputElement>;

  nueva = {
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

  // ----- LISTA -----
  seleccionarMascota(m: Mascota) {
    this.seleccionar.emit(m);
  }

  fotoSegura(m: Mascota): SafeUrl {
    const fallback =
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=60&h=60&fit=crop';
    return this.sanitizer.bypassSecurityTrustUrl(m.url_foto || fallback);
  }

  // ----- FORMULARIO -----
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

  private cerrarModal() {
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

        this.cerrarModal();
      },
      error: (e) => {
        this.creando = false;
        this.errorCrear =
          e?.error?.message || 'No se pudo crear la mascota';
      },
    });
  }
}
