import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VacunaService } from '../../core/api/vacuna.service';


@Component({
  standalone: true,
  selector: 'app-vacuna',
  templateUrl: './vacuna.html',
  styleUrls: ['./vacuna.scss'],
  imports: [ CommonModule, FormsModule]
})
export class VacunaComponent{

    private vac = inject(VacunaService);
    private router = inject(Router);

    nombre = '';
    descripcion = '';
    loading = false;
    error = '';

    onSubmit() {
    if (this.loading) return;
    this.loading = true;
    this.error = '';

    const payload = {
      nombre: this.nombre,                // backend: string ≥ 2
      descripcion: this.descripcion,                    // backend: email válido
    };

    this.vac.create(payload).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (e: any) => {
        this.error = e?.error?.error || 'Error de registro';
        this.loading = false;
      }
    });
  }
}
