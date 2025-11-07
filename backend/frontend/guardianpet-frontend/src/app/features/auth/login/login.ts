import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent implements OnInit {
  email = '';
  contrasena = '';
  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(){ if (this.auth.isLoggedIn) this.router.navigate(['/home']); }

  onSubmit(){
    if (this.loading) return;
    this.loading = true;
    this.error = '';

    // Enviamos la propiedad que espera el backend:
    this.auth.login({ email: this.email, contrasena: this.contrasena }).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (e) => { this.error = e?.error?.error || 'Error de login'; this.loading = false; }
    });
  }
}
