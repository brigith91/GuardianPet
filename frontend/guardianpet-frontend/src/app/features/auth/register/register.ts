import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
  <div class="card">
    <h2>Crear cuenta</h2>
    <form (ngSubmit)="onSubmit()">
      <label>Cedula</label>
      <input [(ngModel)]="cedula" name="cedula" type="number" required/>
      <label>Nombre</label>
      <input [(ngModel)]="nombre" name="nombre" required/>
      <label>Email</label>
      <input [(ngModel)]="email" name="email" type="email" required/>
      <label>Teléfono</label>
      <input [(ngModel)]="telefono" name="telefono"/>
      <label>Contraseña</label>
      <input [(ngModel)]="contrasena" name="contrasena" type="contrasena" required/>
      <button type="submit">Registrarme</button>
    </form>
    <a routerLink="/login">Ya tengo cuenta</a>
    <p class="ok" *ngIf="ok">Cuenta creada, ahora inicia sesión</p>
    <p class="error" *ngIf="error">{{error}}</p>
  </div>`,
  styles:[`.card{max-width:420px;margin:4rem auto;padding:1.5rem;border:1px solid #eee;border-radius:12px} .ok{color:#2e7d32} .error{color:#c62828}`]
})
export class RegisterComponent{
  nombre = '';
  email = '';
  telefono = '';
  contrasena = '';
  cedula = 0;   
  ok = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(){
    this.ok = false;
    this.error = '';

    // Mapea a la clave que espera el backend:
    this.auth.registro({
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      contrasena: this.contrasena,
      cedula: this.cedula  
    })
    .subscribe({
      next: () => { this.ok = true; setTimeout(() => this.router.navigate(['/login']), 600); },
      error: e => this.error = e?.error?.error || 'Error de registro'
    });
  }
}
