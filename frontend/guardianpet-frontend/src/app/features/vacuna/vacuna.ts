import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-vacuna',
  imports: [CommonModule],
  templateUrl: './vacuna.html',
  styleUrls: ['./vacuna.scss']
})
export class VacunaComponent{
  me: any = null;

}
