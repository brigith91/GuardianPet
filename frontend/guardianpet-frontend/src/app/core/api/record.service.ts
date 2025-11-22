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

export interface CrearRecordDto {
  tipo?: string;
  titulo?: string;
  descripcion?: string;
  fecha: string;
  veterinario?: string;
  mascota_id_fk: number;
}

@Injectable({ providedIn: 'root' })
export class RecordService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/historial_clinico`;

  listByPet(mascotaId: number) {
      return this.http.get<RecordItem[]>(`${this.baseUrl}/mascota/${mascotaId}`);
    }

  create(data: CrearRecordDto) {
    return this.http.post<RecordItem>(this.baseUrl, data);
  }

  update(id: number, data: Partial<CrearRecordDto>) {
    return this.http.put<RecordItem>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
