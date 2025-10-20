import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../evironments/environment';
import { Observable, tap } from 'rxjs';

export interface User {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  rol: 'usuario' | 'admin';
}
interface LoginResponse { token: string; user: User; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = `${environment.apiUrl}/usuarios`;
  private tokenKey = 'gp_token';

  constructor(private http: HttpClient) {}

  login(data: { email: string; contrasena: string; }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.base}/login`, data).pipe(
      tap(res => localStorage.setItem(this.tokenKey, res.token))
    );
  }

  registro(data: { cedula: number; nombre: string; email: string; telefono?: string; contrasena: string; rol?: string; }): Observable<User> {
    return this.http.post<User>(`${this.base}/registro`, data);
  }

  me(): Observable<User> {
    return this.http.get<User>(`${this.base}/me`);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  get token(): string | null { return localStorage.getItem(this.tokenKey); }
  get isLoggedIn(): boolean { return !!this.token; }
}
