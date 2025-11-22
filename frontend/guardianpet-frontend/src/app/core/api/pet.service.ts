import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  sexo: string;
  fecha_nacimiento: string;   // ISO string
  usuario_id_fk: number;
  url_foto?: string;
}

export interface CrearMascotaDto {
  nombre: string;
  especie: string;
  raza: string;
  sexo: string;
  fecha_nacimiento: string;   // ISO o 'YYYY-MM-DD'
  usuario_id_fk: number;
  url_foto?: string;
}

@Injectable({ providedIn: 'root' })
export class MascotaService {
  private http = inject(HttpClient);

  private baseUrl = `${environment.apiUrl}/mascotas`;

  // el back devuelve TODAS las mascotas
  list() {
    return this.http.get<Mascota[]>(this.baseUrl); // 👈 GET general
  }

  getById(id: number) {
    return this.http.get<Mascota>(`${this.baseUrl}/${id}`);
  }

  create(data: CrearMascotaDto) {
    return this.http.post<Mascota>(this.baseUrl, data);
  }

  update(id: number, data: Partial<CrearMascotaDto>) {
    return this.http.put<Mascota>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}