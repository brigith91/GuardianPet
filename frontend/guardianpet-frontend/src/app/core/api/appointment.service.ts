import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';

export interface Cita {
  id: number;
  fecha: string;          // ISO
  estado: string;         // 'Programada', 'Completada', etc.
  observacion?: string;
  mascota_id_fk: number;
  veterinario_id_fk: number;
}

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private http = inject(HttpClient);

  // endpoint que definimos antes: /citas/mascota/:mascota_id
  listByPet(mascotaId: number) {
    return this.http.get<Cita[]>(`${environment.apiUrl}/citas/mascota/${mascotaId}`);
  }
}
