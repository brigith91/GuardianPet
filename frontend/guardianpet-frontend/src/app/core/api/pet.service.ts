import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';

export interface Mascota {
  id: number;
  nombre: string;
  especie?: string;
  raza?: string;
  usuario_id_fk: number;
  foto_url?: string;
}

@Injectable({ providedIn: 'root' })
export class MascotaService {
  private http = inject(HttpClient);

  // Asumiendo que el backend ya filtra por el usuario del token:
  listMine() {
    return this.http.get<Mascota[]>(`${environment.apiUrl}/mascotas`);
  }
}
