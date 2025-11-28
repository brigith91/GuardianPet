// src/app/core/api/det-vacuna.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

export interface CrearDetVacunaDto {
  historial_clinico_id_fk: number;
  vacuna_id_fk: number;
  fecha: string;           // ISO
  observaciones: string;
}

export interface DetVacuna{
  id: number;
  historial_clinico_id_fk: number;
  vacuna_id_fk: number;
  fecha: string;           // ISO
  observaciones: string;
}

@Injectable({ providedIn: 'root' })
export class DetVacunaService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/det_vacunas`;

  create(data: CrearDetVacunaDto): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  update(id: number, data: Partial<CrearDetVacunaDto>): Observable<DetVacuna> {
      return this.http.put<DetVacuna>(`${this.baseUrl}/${id}`, data);
    }
}
