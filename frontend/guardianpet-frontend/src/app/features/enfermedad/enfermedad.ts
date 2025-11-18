import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-enfermedad',
  imports: [CommonModule],
  templateUrl: './enfermedad.html',
  styleUrls: ['./enfermedad.scss']
})
export class EnfermedadComponent{
  me: any = null;
   constructor(private router: Router) {}

  cerrar() {
    this.router.navigate(['tipo']);
  }

}
