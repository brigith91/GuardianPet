// src/app/core/api/record.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

export interface RecordItem {
  id: number;
  fecha: string;           // ISO
  descripcion: string;
  tipo: string;
  url_archivos?: string | null;
  veterinario_id_fk?: number | null;
  mascota_id_fk: number;
  cita_id_fk?: number | null;
}

export interface CrearRecordDto {
  fecha: string;
  descripcion: string;
  tipo: string;
  url_archivos?: string | null;
  veterinario_id_fk?: number | null;
  mascota_id_fk: number;
  cita_id_fk?: number | null;
}

@Injectable({ providedIn: 'root' })
export class RecordService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/historial_clinico`;

  listByPet(mascotaId: number): Observable<RecordItem[]> {
    const params = new HttpParams().set('mascota_id_fk', mascotaId);
    return this.http.get<RecordItem[]>(`${this.baseUrl}/mascota/${mascotaId}`);
  }

  getOne(id: number): Observable<RecordItem> {
    return this.http.get<RecordItem>(`${this.baseUrl}/${id}`);
  }

  create(data: CrearRecordDto): Observable<RecordItem> {
    return this.http.post<RecordItem>(this.baseUrl, data);
  }

  update(id: number, data: Partial<CrearRecordDto>): Observable<RecordItem> {
    return this.http.put<RecordItem>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
