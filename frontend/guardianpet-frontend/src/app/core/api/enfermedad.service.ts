import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { map, Observable } from 'rxjs';


export interface EnfermedadCatalog {
  id: number;
  tipo: string;
  descripcion: string;
}

export interface CrearEnfermedadDto {
  tipo: string;
  descripcion: string;
}

interface EnfermedadListResponse {
  items: EnfermedadCatalog[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

@Injectable({ providedIn: 'root' })
export class EnfermedadService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/enfermedades`;

  // GET http://localhost:3000/api/enfermedades
  listAll(): Observable<EnfermedadCatalog[]> {
    return this.http.get<any>(`${this.baseUrl}`).pipe(
      map((res: any) => {
        // tu API devuelve { items: [...] }
        if (Array.isArray(res)) return res;
        return res.items ?? [];
      })
    );
  }

  // GET http://localhost:3000/api/enfermedades/:id
  get(id: number) {
    return this.http.get<EnfermedadCatalog>(`${this.baseUrl}/${id}`);
  }

  // POST http://localhost:3000/api/enfermedades
  create(dto: CrearEnfermedadDto) {
    return this.http.post<EnfermedadCatalog>(this.baseUrl, dto);
  }

  // PUT http://localhost:3000/api/enfermedades/:id
  update(id: number, dto: CrearEnfermedadDto) {
    return this.http.put<EnfermedadCatalog>(`${this.baseUrl}/${id}`, dto);
  }

  // DELETE http://localhost:3000/api/enfermedades/:id
  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
