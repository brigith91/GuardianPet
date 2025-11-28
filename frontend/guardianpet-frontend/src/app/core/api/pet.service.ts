// src/app/core/api/pet.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  sexo: string;
  fecha_nacimiento: string;
  usuario_id_fk: number;
  url_foto?: string; // data URL o URL normal
}

export interface CrearMascotaDto {
  nombre: string;
  especie: string;
  raza: string;
  sexo: string;
  fecha_nacimiento: string;
  usuario_id_fk: number;
  url_foto?: string;
}
@Injectable({ providedIn: 'root' })
export class MascotaService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/mascotas`;

  list(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.baseUrl);
  }

  create(data: CrearMascotaDto): Observable<Mascota> {
    return this.http.post<Mascota>(this.baseUrl, data);
  }

  update(id: number, data: Partial<CrearMascotaDto>): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
