import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Solo visibles si NO hay token
  { path: 'login',    canMatch: [guestGuard], loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent) },
  { path: 'registro', canMatch: [guestGuard], loadComponent: () => import('./features/auth/register/register').then(m => m.RegisterComponent) },

  // Requieren token
  { path: 'home',     canMatch: [authGuard],  loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },

  { path: '**', redirectTo: 'login' }
];
