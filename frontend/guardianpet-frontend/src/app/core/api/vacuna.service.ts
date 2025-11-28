import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { map, Observable } from 'rxjs';

export interface VacunaCatalog {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface CrearVacunaDto {
  nombre: string;
  descripcion: string;
}

@Injectable({ providedIn: 'root' })
export class VacunaService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/vacunas`;

  // GET http://localhost:3000/api/vacunas
  listAll(): Observable<VacunaCatalog[]> {
    return this.http.get<any>(`${this.baseUrl}`).pipe(
      map((res: any) => {
        // tu API de ejemplo devuelve un array directo
        return Array.isArray(res) ? res : [];
      })
    );
  }

  // GET http://localhost:3000/api/vacunas/:id
  get(id: number) {
    return this.http.get<VacunaCatalog>(`${this.baseUrl}/${id}`);
  }

  // POST http://localhost:3000/api/vacunas
  create(dto: CrearVacunaDto) {
    return this.http.post<VacunaCatalog>(this.baseUrl, dto);
  }

  // PUT http://localhost:3000/api/vacunas/:id
  update(id: number, dto: CrearVacunaDto) {
    return this.http.put<VacunaCatalog>(`${this.baseUrl}/${id}`, dto);
  }

  // DELETE http://localhost:3000/api/vacunas/:id
  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
