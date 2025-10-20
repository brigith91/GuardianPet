import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  template: `
  <div class="page">
    <h2>Home</h2>
    <ng-container *ngIf="me; else notLogged">
      <p>Hola, {{me?.nombre}} ({{me?.email}})</p>
    </ng-container>
    <ng-template #notLogged><p>No autenticado.</p></ng-template>
  </div>`
})
export class HomeComponent implements OnInit{
  me?: User;
  constructor(private auth: AuthService){}
  ngOnInit(){ this.auth.me().subscribe({ next: u => this.me = u, error: ()=> this.me = undefined }); }
}
