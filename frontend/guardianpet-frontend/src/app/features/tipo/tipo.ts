import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tipo',
  imports: [CommonModule],
  templateUrl: './tipo.html',
  styleUrls: ['./tipo.scss']
})
export class TipoComponent{
  me: any = null;

}
