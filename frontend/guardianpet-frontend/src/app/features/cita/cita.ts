import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cita',
  imports: [CommonModule],
  templateUrl: './cita.html',
  styleUrls: ['./cita.scss']
})
export class CitaComponent{
  me: any = null;

}
