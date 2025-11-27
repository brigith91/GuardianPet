// src/app/core/api/veterinario.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// Modelo principal que vas a usar en la app
export interface Veterinario {
  id: number;
  // En tu backend puede ser "nombre" o "nombres + apellidos";
  // dejamos ambos por compatibilidad.
  nombre?: string;
  email?: string;
  matricula?: string;
}

// DTO para crear/actualizar
export interface CrearVeterinarioDto {
  nombre?: string;
  email?: string;
  matricula?: string;
}

@Injectable({ providedIn: 'root' })
export class VeterinarioService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/veterinarios`;
  // Ej: http://localhost:3000/api/veterinarios

  // GET /veterinarios
  listAll(): Observable<Veterinario[]> {
    return this.http
      .get<{
        items: Veterinario[];
        total: number;
        page: number;
        pageSize: number;
        pages: number;
      }>(this.baseUrl)
      .pipe(map((resp) => resp.items || []));
  }

  // GET /veterinarios/:id
  getById(id: number): Observable<Veterinario> {
    return this.http.get<Veterinario>(`${this.baseUrl}/${id}`);
  }

  // POST /veterinarios
  create(data: CrearVeterinarioDto): Observable<Veterinario> {
    return this.http.post<Veterinario>(this.baseUrl, data);
  }

  // PUT /veterinarios/:id
  update(id: number, data: Partial<CrearVeterinarioDto>): Observable<Veterinario> {
    return this.http.put<Veterinario>(`${this.baseUrl}/${id}`, data);
  }

  // DELETE /veterinarios/:id
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
