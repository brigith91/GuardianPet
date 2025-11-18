import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environments';

type Rol = 'usuario' | 'admin';
export type User = {
  id: number; nombre: string; email: string;
  telefono?: string; rol: Rol; cedula?: string;
};

type LoginResponse = { ok?: boolean; token: string; user: User };

const STORAGE_KEY = 'auth';

function decodeJwt<T = any>(token: string): T | null {
  try { return JSON.parse(atob(token.split('.')[1])); } catch { return null; }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private _token$ = new BehaviorSubject<string | null>(null);
  private _user$  = new BehaviorSubject<User | null>(null);

  token$ = this._token$.asObservable();
  user$  = this._user$.asObservable();

  constructor() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const { token, user } = JSON.parse(raw);
      this._token$.next(token);
      this._user$.next(user);
      const payload = decodeJwt<{ exp?: number }>(token);
      if (payload?.exp && Date.now() >= payload.exp * 1000) this.logout(false);
    }
  }

  get token() { return this._token$.value; }
  get user()  { return this._user$.value; }
  get role(): Rol | null { return this.user?.rol ?? null; }

  isLoggedIn() { return !!this._token$.value; }      // ✅ es método

  hasAnyRole(roles: string[]) {
    return !roles?.length || roles.includes(this.role ?? '');
  }

  // ✅ firma que espera tu código de login.ts
  login(email: string, contrasena: string) {
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}/usuarios/login`, { email, contrasena })
      .pipe(tap(resp => this.persist(resp)));
  }

  forgotPassword(email: string) {
    return this.http.post<{ ok: boolean; message: string }>(
      `${environment.apiUrl}/auth/forgot-password`,
      { email }
    );
  }

  resetPassword(token: string, contrasena: string) {
    return this.http.post<{ ok: boolean; message: string }>(
      `${environment.apiUrl}/auth/reset-password`,
      { token, contrasena }
    );
  }

  // ✅ tu front llama "registro" → expón este método
  registro(payload: {
    nombre: string; email: string; contrasena: string;
    telefono?: string; cedula?: number; rol?: 'usuario';
  }) {
    return this.http
      .post<any>(`${environment.apiUrl}/usuarios/registro`, payload)
      .pipe(tap(resp => {
        // si tu backend devuelve token al registrar, persístelo
        if (resp?.token && resp?.user) this.persist(resp as LoginResponse);
      }));
  }

  // ✅ usado por home.ts
  me() {
    return this.http.get<User>(`${environment.apiUrl}/usuarios/me`);
  }

  logout(navigate = true) {
    localStorage.removeItem(STORAGE_KEY);
    this._token$.next(null);
    this._user$.next(null);
    if (navigate) this.router.navigate(['/auth/login']);
  }

  private persist(resp: LoginResponse) {
    this._token$.next(resp.token);
    this._user$.next(resp.user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: resp.token, user: resp.user }));
  }
}
