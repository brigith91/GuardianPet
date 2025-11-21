import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot.html',
  styleUrls: ['./forgot.scss']
})
export class ForgotPasswordComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  sent = false;
  loading = false;
  error = '';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  submit() {
    if (this.loading || this.form.invalid) return;
    this.loading = true;
    this.error = '';

    const email = this.form.value.email as string;

    this.auth.forgotPassword(email).subscribe({
      next: () => { this.sent = true; this.loading = false; },
      error: (e) => {
        this.error = e?.error?.error || 'No se pudo enviar el correo';
        this.loading = false;
      }
    });
  }
}
