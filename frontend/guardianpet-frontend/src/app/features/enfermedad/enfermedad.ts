import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EnfermedadService } from '../../core/api/enfermedad.service';


@Component({
  standalone: true,
  selector: 'app-enfermedad',
  templateUrl: './enfermedad.html',
  styleUrls: ['./enfermedad.scss'],
  imports: [CommonModule, FormsModule]
})
export class EnfermedadComponent {

  private enf = inject(EnfermedadService);
  private router = inject(Router);

  tipo = '';
  descripcion = '';
  loading = false;
  error = '';

  onSubmit() {
    if (this.loading) return;
    this.loading = true;
    this.error = '';

    const payload = {
      tipo: this.tipo,
      descripcion: this.descripcion
    };

    this.enf.create(payload).subscribe({
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
