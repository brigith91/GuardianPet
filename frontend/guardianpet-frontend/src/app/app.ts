import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  constructor(public auth: AuthService, private router: Router) {}
  logout(){
    this.auth.logout();
    this.router.navigate(['/indice']);
  }
}
