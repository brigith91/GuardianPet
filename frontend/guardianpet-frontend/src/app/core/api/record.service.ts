import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environments';

export interface RecordItem {
  id: number;
  tipo?: string;
  titulo?: string;
  descripcion?: string;
  fecha: string;           // ISO
  veterinario?: string;
  mascota_id_fk: number;
}

@Injectable({ providedIn: 'root' })
export class RecordService {
  private http = inject(HttpClient);

  // Variante 1: si tu backend acepta query ?mascota_id_fk=123
  listByPet(mascotaId: number) {
    const params = new HttpParams().set('mascota_id_fk', mascotaId);
    return this.http.get<RecordItem[]>(`${environment.apiUrl}/historial_clinico`, { params });
  }

  listAll() {
    return this.http.get<any>(`${environment.apiUrl}/historial_clinico`);
  }
  // Variante 2 (si prefieres ruta REST):
  // listByPet(mascotaId: number) {
  //   return this.http.get<RecordItem[]>(`${environment.apiUrl}/historial_clinico/mascota/${mascotaId}`);
  // }
}
