import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'  

})
export class RegisterComponent{
  nombre = '';
  apellidos = '';
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
