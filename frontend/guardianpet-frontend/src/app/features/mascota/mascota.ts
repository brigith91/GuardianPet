import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-mascota',
  imports: [CommonModule],
  templateUrl: './mascota.html',
  styleUrls: ['./mascota.scss']
})
export class MascotaComponent{
  me: any = null;

}
