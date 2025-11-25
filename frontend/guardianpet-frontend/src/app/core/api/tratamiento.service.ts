// src/app/core/api/tratamiento.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

export interface CrearTratamientoDto {
  tipo: number;           // según tu API (1, 2, etc.)
  fecha: string;          // ISO
  fecha_fin: number;      // en tu Postman es un número (días)
  descripcion: string;
  enfermedad_id_fk: number;
}

@Injectable({ providedIn: 'root' })
export class TratamientoService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/tratamientos`;

  create(data: CrearTratamientoDto): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }
}
