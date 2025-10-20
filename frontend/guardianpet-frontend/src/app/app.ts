import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  template: `
    <nav class="topbar">
      <a routerLink="/home" *ngIf="auth.isLoggedIn">Home</a>
      <a routerLink="/login" *ngIf="!auth.isLoggedIn">Login</a>
      <a routerLink="/registro" *ngIf="!auth.isLoggedIn">Registro</a>
      <button *ngIf="auth.isLoggedIn" (click)="logout()" class="linklike" style="margin-left:auto">
        Salir
      </button>
    </nav>
    <router-outlet />
  `,
  styles: [`.topbar{display:flex;gap:1rem;padding:.75rem 1rem;border-bottom:1px solid #eee}
            .linklike{background:none;border:0;cursor:pointer;padding:0;font:inherit;color:#1976d2}`]
})
export class AppComponent {
  constructor(public auth: AuthService, private router: Router) {}
  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
