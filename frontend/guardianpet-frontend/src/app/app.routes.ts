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
  { path: 'enfermedad', canMatch: [guestGuard], loadComponent: () => import('./features/enfermedad/enfermedad').then(m => m.EnfermedadComponent) },
  { path: 'cita', canMatch: [guestGuard], loadComponent: () => import('./features/cita/cita').then(m => m.CitaComponent) },
  { path: 'operacion', canMatch: [guestGuard], loadComponent: () => import('./features/operacion/operacion').then(m => m.OperacionComponent) },
  { path: 'tratamiento', canMatch: [guestGuard], loadComponent: () => import('./features/tratamiento/tratamiento').then(m => m.TratamientoComponent) },
  { path: 'vacuna', canMatch: [guestGuard], loadComponent: () => import('./features/vacuna/vacuna').then(m => m.VacunaComponent) },


 




  // Requieren token
  { path: 'home',     canMatch: [authGuard],  loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },

  { path: '**', redirectTo: 'login' }
];
