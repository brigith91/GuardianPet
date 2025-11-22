import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService, User } from '../../core/services/auth.service';
import { MascotaService, Mascota } from '../../core/api/pet.service';

import { MascotasSidebarComponent } from './components/mascotas-sidebar/mascotas-sidebar.component';
import { HistorialClinicoComponent } from './components/historial-clinico/historial-clinico.component';
import { CitasProgramadasComponent } from './components/citas-programadas/citas-programadas.component';
import { AppointmentService, Cita } from '../../core/api/appointment.service';


@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    MascotasSidebarComponent,
    HistorialClinicoComponent,
    CitasProgramadasComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  private auth = inject(AuthService);
  private petsApi = inject(MascotaService);

  me?: User;
  mascotas: Mascota[] = [];
  seleccionada?: Mascota;

  ngOnInit(): void {
    this.auth.me().subscribe({
      next: (u) => {
        this.me = u;
        this.cargarMascotas();
      },
      error: () => {
        this.me = undefined;
      }
    });
  }

  cargarMascotas() {
    this.petsApi.list().subscribe({
      next: (list) => {
        
        this.mascotas = list || [];

        if (this.mascotas.length && !this.seleccionada) {
          this.seleccionada = this.mascotas[0];
        }
      },
      error: () => {
        this.mascotas = [];
      }
    });
  }

  seleccionarMascota(m: Mascota) {
    this.seleccionada = m;
  }

  mascotaCreada(m: Mascota) {
    this.mascotas = [...this.mascotas, m];
    this.seleccionada = m;
  }

  iniciales(nombre: string) {
    return (nombre || '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join('');
  }
}
