import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-operacion',
  imports: [CommonModule],
  templateUrl: './operacion.html',
  styleUrls: ['./operacion.scss']
})
export class OperacionComponent{
  me: any = null;
   constructor(private router: Router) {}

  cerrar() {
    this.router.navigate(['tipo']);
  }

}
