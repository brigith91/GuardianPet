// src/app/core/api/det-enfermedad.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

export interface CrearDetEnfermedadDto {
  historial_clinico_id_fk: number;
  enfermedad_id_fk: number;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
}

export interface DetEnfermedad {
  id: number;
  historial_clinico_id_fk: number;
  enfermedad_id_fk: number;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
}

@Injectable({ providedIn: 'root' })
export class DetEnfermedadService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/det_enfermedades`;

  create(data: CrearDetEnfermedadDto): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  update(id: number, data: Partial<CrearDetEnfermedadDto>): Observable<DetEnfermedad> {
    return this.http.put<DetEnfermedad>(`${this.baseUrl}/${id}`, data);
  }
}
