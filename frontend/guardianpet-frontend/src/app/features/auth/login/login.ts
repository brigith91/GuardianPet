import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  email = '';
  contrasena = '';
  loading = false;
  error = '';

  ngOnInit() {
    if (this.auth.isLoggedIn()) this.router.navigate(['/home']);
  }

  onSubmit() {
    if (this.loading) return;
    this.loading = true;
    this.error = '';

    this.auth.login(this.email, this.contrasena).subscribe({
      next: () => {
        const redirectTo =
          this.route.snapshot.queryParamMap.get('redirectTo') || '/';
        this.router.navigateByUrl(redirectTo);
      },
      error: (e: any) => {                 // ✅ tipa el parámetro
        this.error = e?.error?.error || 'Credenciales inválidas';
        this.loading = false;
      }
    });
  }
}
