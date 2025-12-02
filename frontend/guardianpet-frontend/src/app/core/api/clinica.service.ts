import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { map, Observable } from 'rxjs';

export interface ClinicaCatalog {
  id: number;
  tienda: string;
  direccion: string;
  telefono: string;
  longitud: GLfloat;
  latitud: GLfloat;
}
export interface CrearClinicaDto {
  tienda: string;
  direccion: string;
  telefono: string;
  longitud: GLfloat;
  latitud: GLfloat;
}

interface ClinicaListResponse {
  items: ClinicaCatalog[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

@Injectable({ providedIn: 'root' })
export class ClinicaService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/Clinica`;

  // GET http://localhost:3000/api/operaciones
  listAll(): Observable<ClinicaCatalog[]> {
    return this.http.get<any>(`${this.baseUrl}`).pipe(
      map((res: any) => {
        // tu API devuelve { items: [...] }
        if (Array.isArray(res)) return res;
        return res.items ?? [];
      })
    );
  }

  // GET http://localhost:3000/api/operaciones/:id
  get(id: number) {
    return this.http.get<ClinicaCatalog>(`${this.baseUrl}/${id}`);
  }

  // POST http://localhost:3000/api/operaciones
  create(dto: CrearClinicaDto) {
    return this.http.post<ClinicaCatalog>(this.baseUrl, dto);
  }

  // // PUT http://localhost:3000/api/operaciones/:id
  // update(id: number, dto: CrearOperacionDto) {
  //   return this.http.put<OperacionCatalog>(`${this.baseUrl}/${id}`, dto);
  // }

  // DELETE http://localhost:3000/api/operaciones/:id
  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
