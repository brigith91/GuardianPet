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

export interface CrearCitaDto {
  fecha: string;
  estado: string;
  observacion?: string;
  mascota_id_fk: number;
  veterinario_id_fk: number;
}

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/citas`;

  listByPet(mascotaId: number) {
    return this.http.get<Cita[]>(`${this.baseUrl}/mascota/${mascotaId}`);
  }

  create(data: CrearCitaDto) {
    return this.http.post<Cita>(this.baseUrl, data);
  }

  update(id: number, data: Partial<CrearCitaDto>) {
    return this.http.put<Cita>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
