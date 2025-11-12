import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-enfermedad',
  imports: [CommonModule],
  templateUrl: './enfermedad.html',
  styleUrls: ['./enfermedad.scss']
})
export class EnfermedadComponent{
  me: any = null;

}
