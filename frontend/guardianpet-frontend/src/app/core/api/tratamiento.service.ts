import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environments';

export interface Tratamiento {
  id: number;
  tipo: number;
  fecha: string;       // ISO
  fecha_fin: number;   // cantidad de días
  descripcion: string;
  enfermedad_id_fk: number;
}

export interface CrearTratamientoDto {
  tipo: number;
  fecha: string;
  fecha_fin: number;
  descripcion: string;
  enfermedad_id_fk: number;
}

@Injectable({ providedIn: 'root' })
export class TratamientoService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/tratamientos`;

  // GET http://localhost:3000/api/tratamientos
  list() {
    return this.http.get<Tratamiento[]>(this.baseUrl);
  }

  // (opcional) listar por enfermedad si en el back aceptas el query param
  listByEnfermedad(enfermedadId: number) {
    const params = new HttpParams().set('enfermedad_id_fk', enfermedadId);
    return this.http.get<Tratamiento[]>(this.baseUrl, { params });
  }

  // GET http://localhost:3000/api/tratamientos/:id
  get(id: number) {
    return this.http.get<Tratamiento>(`${this.baseUrl}/${id}`);
  }

  // POST http://localhost:3000/api/tratamientos
  create(dto: CrearTratamientoDto) {
    return this.http.post<Tratamiento>(this.baseUrl, dto);
  }

  // PUT http://localhost:3000/api/tratamientos/:id
  update(id: number, dto: CrearTratamientoDto) {
    return this.http.put<Tratamiento>(`${this.baseUrl}/${id}`, dto);
  }

  // DELETE http://localhost:3000/api/tratamientos/:id
  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
