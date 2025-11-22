// src/app/features/home/components/mascotas-sidebar/mascotas-sidebar.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  Mascota,
  MascotaService,
  CrearMascotaDto
} from '../../../../core/api/pet.service';

@Component({
  selector: 'app-mascotas-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mascotas-sidebar.component.html',
  styleUrls: ['./mascotas-sidebar.component.scss']
})
export class MascotasSidebarComponent {
  private mascotasApi = inject(MascotaService);

  @Input() mascotas: Mascota[] = [];
  @Input() seleccionada?: Mascota;
  @Input() usuarioId?: number; // <- viene desde Home

  @Output() seleccionar = new EventEmitter<Mascota>();
  @Output() creada = new EventEmitter<Mascota>();

  nueva = {
    nombre: '',
    especie: '',
    raza: '',
    sexo: '',
    fecha_nacimiento: '',
    url_foto: ''
  };

  creando = false;
  errorCrear: string | null = null;

  seleccionarMascota(m: Mascota) {
    this.seleccionar.emit(m);
  }

  onSubmitNueva(form: NgForm) {
    if (form.invalid || !this.usuarioId) {
      this.errorCrear = 'Usuario no identificado.';
      return;
    }

    const payload: CrearMascotaDto = {
      nombre: this.nueva.nombre,
      especie: this.nueva.especie,
      raza: this.nueva.raza,
      sexo: this.nueva.sexo,
      fecha_nacimiento: this.nueva.fecha_nacimiento,
      usuario_id_fk: this.usuarioId,
      url_foto: this.nueva.url_foto || undefined
    };

    this.creando = true;
    this.errorCrear = null;

    this.mascotasApi.create(payload).subscribe({
      next: (mascota) => {
        this.creando = false;
        this.creada.emit(mascota);
        // reset form
        this.nueva = {
          nombre: '',
          especie: '',
          raza: '',
          sexo: '',
          fecha_nacimiento: '',
          url_foto: ''
        };
        form.resetForm();
      },
      error: (e) => {
        this.creando = false;
        this.errorCrear = e?.error?.message || 'No se pudo crear la mascota';
      }
    });
  }
}
