import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Solo visibles si NO hay token
  { path: 'login',    canMatch: [guestGuard], loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent) },
  { path: 'registro', canMatch: [guestGuard], loadComponent: () => import('./features/auth/register/register').then(m => m.RegisterComponent) },
  { path: 'indice', canMatch: [guestGuard], loadComponent: () => import('./features/indice/indice').then(m => m.IndiceComponent) },
  { path: 'menu', canMatch: [guestGuard], loadComponent: () => import('./features/menu/menu').then(m => m.IndiceComponent) },
  { path: 'home', canMatch: [guestGuard], loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },
  { path: 'mascota', canMatch: [guestGuard], loadComponent: () => import('./features/mascota/mascota').then(m => m.MascotaComponent) },
    { path: 'tipo', canMatch: [guestGuard], loadComponent: () => import('./features/tipo/tipo').then(m => m.TipoComponent) },





  // Requieren token
  { path: 'home',     canMatch: [authGuard],  loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },

  { path: '**', redirectTo: 'login' }
];
