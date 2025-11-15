import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  nombre = '';
  apellidos = '';
  telefono = '';
  email = '';
  cedula: string | number = '';
  contrasena = '';
  loading = false;
  error = '';

  onSubmit() {
    if (this.loading) return;
    this.loading = true;
    this.error = '';

    // Une nombre + apellidos si quieres mantener los dos inputs
    const nombreCompleto = `${this.nombre} ${this.apellidos}`.trim();

    const payload = {
      nombre: nombreCompleto,                // backend: string ≥ 2
      email: this.email,                    // backend: email válido
      contrasena: this.contrasena,          // backend: string ≥ 6
      telefono: this.telefono || undefined, // opcional
      cedula: Number(this.cedula),          // backend: number ≥ 1_000_00                       // opcional; por defecto 'usuario'
    };

    this.auth.registro(payload).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (e: any) => {
        this.error = e?.error?.error || 'Error de registro';
        this.loading = false;
      }
    });
  }
}
