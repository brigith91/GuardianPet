import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-indice',
  imports: [CommonModule],
  templateUrl: './indice.html',
  styleUrls: ['./indice.scss']
})
export class IndiceComponent{
  me: any = null;

}
