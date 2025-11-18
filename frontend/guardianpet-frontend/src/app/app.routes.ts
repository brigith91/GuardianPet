import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'indice', pathMatch: 'full' },

  // Solo visibles si NO hay token
  { path: 'login',    canMatch: [guestGuard], loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent) },
  { path: 'registro', canMatch: [guestGuard], loadComponent: () => import('./features/auth/register/register').then(m => m.RegisterComponent) },
  { path: 'indice', canMatch: [guestGuard], loadComponent: () => import('./features/indice/indice').then(m => m.IndiceComponent) },
  { path: 'menu', canMatch: [guestGuard], loadComponent: () => import('./features/menu/menu').then(m => m.IndiceComponent) },


  { path: 'recuperar',  canMatch: [guestGuard], loadComponent: () => import('./features/auth/forgot/forgot').then(m => m.ForgotPasswordComponent) },
  { path: 'reset-password', loadComponent: () => import('./features/auth/reset-password/reset-password').then(m => m.ResetPasswordComponent) },
  { path: 'clinicas', loadComponent: () => import('./features/clinicas/mapa/mapa').then(m => m.ClinicasMapaComponent) },





  // Requieren token
  { path: 'home', canMatch: [authGuard],  loadComponent: () => import('./features/home/home').then(m => m.HomeComponent) },
  { path: 'mascota', canMatch: [authGuard], loadComponent: () => import('./features/mascota/mascota').then(m => m.MascotaComponent) },
  { path: 'tipo', canMatch: [authGuard], loadComponent: () => import('./features/tipo/tipo').then(m => m.TipoComponent) },
  { path: 'enfermedad', canMatch: [authGuard], loadComponent: () => import('./features/enfermedad/enfermedad').then(m => m.EnfermedadComponent) },
  { path: 'cita', canMatch: [authGuard], loadComponent: () => import('./features/cita/cita').then(m => m.CitaComponent) },
  { path: 'operacion', canMatch: [authGuard], loadComponent: () => import('./features/operacion/operacion').then(m => m.OperacionComponent) },
  { path: 'tratamiento', canMatch: [authGuard], loadComponent: () => import('./features/tratamiento/tratamiento').then(m => m.TratamientoComponent) },
  { path: 'vacuna', canMatch: [authGuard], loadComponent: () => import('./features/vacuna/vacuna').then(m => m.VacunaComponent) },
  { path: 'chat', canMatch: [authGuard],  loadComponent: () => import('./features/chat/chat').then(m => m.ChatComponent) },




  { path: '**', redirectTo: 'indice' }
];
