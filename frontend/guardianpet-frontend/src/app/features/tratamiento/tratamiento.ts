import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tratamiento',
  imports: [CommonModule],
  templateUrl: './tratamiento.html',
  styleUrls: ['./tratamiento.scss']
})
export class TratamientoComponent{
  me: any = null;

}
