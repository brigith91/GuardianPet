import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-operacion',
  imports: [CommonModule],
  templateUrl: './operacion.html',
  styleUrls: ['./operacion.scss']
})
export class OperacionComponent{
  me: any = null;

}
