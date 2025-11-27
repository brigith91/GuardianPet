// src/app/core/api/det-operacion.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

export interface CrearDetOperacionDto {
  historial_clinico_id_fk: number;
  operacion_id_fk: number;
  fecha: string;           // ISO
  observaciones: string;
}

export interface DetOperacion {
  id: number,
  historial_clinico_id_fk: number;
  operacion_id_fk: number;
  fecha: string;           // ISO
  observaciones: string;
}

@Injectable({ providedIn: 'root' })
export class DetOperacionService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/det_operaciones`;

  create(data: CrearDetOperacionDto): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  update(id: number, data: Partial<CrearDetOperacionDto>): Observable<DetOperacion> {
    return this.http.put<DetOperacion>(`${this.baseUrl}/${id}`, data);
  }
  
}
