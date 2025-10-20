import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
  <div class="card">
    <h2>Iniciar sesión</h2>
    <form (ngSubmit)="onSubmit()">
      <label>Email</label>
      <input [(ngModel)]="email" name="email" type="email" required/>
      <label>Contraseña</label>
      <input [(ngModel)]="contrasena" name="contrasena" type="contrasena" required/>
      <button type="submit" [disabled]="loading">Entrar</button>
    </form>
    <a routerLink="/registro">Crear cuenta</a>
    <p class="error" *ngIf="error">{{error}}</p>
  </div>`,
  styles:[`.card{max-width:380px;margin:4rem auto;padding:1.5rem;border:1px solid #eee;border-radius:12px} .error{color:#c62828}`]
})
export class LoginComponent implements OnInit {
  email = '';
  contrasena = '';     
  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(){ if (this.auth.isLoggedIn) this.router.navigate(['/home']); }

  onSubmit(){
    if (this.loading) return;
    this.loading = true;
    this.error = '';

    // Enviamos la propiedad que espera el backend:
    this.auth.login({ email: this.email, contrasena: this.contrasena }).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (e) => { this.error = e?.error?.error || 'Error de login'; this.loading = false; }
    });
  }
}
