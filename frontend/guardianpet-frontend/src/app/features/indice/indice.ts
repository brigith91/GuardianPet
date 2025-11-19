import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-indice',
  imports: [CommonModule, RouterLink],
  templateUrl: './indice.html',
  styleUrls: ['./indice.scss']
})
export class IndiceComponent{
  me: any = null;
  

}
