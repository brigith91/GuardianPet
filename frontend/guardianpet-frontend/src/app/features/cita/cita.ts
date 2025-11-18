import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-cita',
  imports: [CommonModule],
  templateUrl: './cita.html',
  styleUrls: ['./cita.scss']
})
export class CitaComponent {

  me: any = null;

  constructor(private router: Router) {}

  cerrar() {
    this.router.navigate(['tipo']);
  }
}