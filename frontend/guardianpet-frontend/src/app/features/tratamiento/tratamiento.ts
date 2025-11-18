import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tratamiento',
  imports: [CommonModule],
  templateUrl: './tratamiento.html',
  styleUrls: ['./tratamiento.scss']
})
export class TratamientoComponent{
  me: any = null;
  constructor(private router: Router) {}

  cerrar() {
    this.router.navigate(['tipo']);
  }

}
