import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environments';

export interface Clinica {
  id: number;
  tienda: string;
  direccion: string;
  telefono: string;
  latitud: number | string;
  longitud: number | string;
}

interface PaginatedClinicas {
  items: Clinica[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

@Injectable({ providedIn: 'root' })
export class ClinicsService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  getClinicas(): Observable<Clinica[]> {
    return this.http
      .get<PaginatedClinicas>(`${this.base}/clinicas`)
      .pipe(map(res => res?.items ?? []));
  }
}
