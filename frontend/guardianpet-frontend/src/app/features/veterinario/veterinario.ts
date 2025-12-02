import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VeterinarioService } from '../../core/api/veterinario.service';

@Component({
  standalone: true,
  selector: 'app-veterinario',
  templateUrl: './veterinario.html',
  styleUrls: ['./veterinario.scss'],
  imports: [CommonModule, FormsModule]
})
export class VeterinarioComponent {

  private vet = inject(VeterinarioService);
  private router = inject(Router);

  nombre = '';
  email = '';
  matricula = '';
  loading = false;
  error = '';

  onSubmit() {
    if (this.loading) return;
    this.loading = true;
    this.error = '';

    const payload = {
      nombre: this.nombre,
      email: this.email,
      matricula: this.matricula
    };

    this.vet.create(payload as any).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (e: any) => {
        this.error = e?.error?.error || 'Error de registro';
        this.loading = false;
      }
    });
  }

  cerrar() {
    this.router.navigate(['tipo']);
  }
}
