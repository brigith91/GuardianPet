import { Component.inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClinicaService } from '../../core/api/clinica.service';


@Component({
  standalone: true,
  selector: 'app-clinica',
  imports: [CommonModule,FormsModule],
  templateUrl: './clinica.html',
  styleUrls: ['./clinica.scss']
})
export class ClinicaComponent {

 private clin = inject(ClinicaService);
  private router = inject(Router);


  tienda='';
  direccion='';
  telefono='';
  longitud='';
  latitud='';
  loading = false;
  error = '';

  onSubmit() {
    if (this.loading) return;
    this.loading = true;
    this.error = '';

    const payload = {
      tienda: this.tienda,
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
