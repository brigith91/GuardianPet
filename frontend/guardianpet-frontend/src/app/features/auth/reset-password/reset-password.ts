import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

function matchValidator(a: string, b: string) {
  return (group: AbstractControl): ValidationErrors | null => {
    const va = group.get(a)?.value;
    const vb = group.get(b)?.value;
    return va && vb && va !== vb ? { mismatch: true } : null;
  };
}

@Component({
  standalone: true,
  selector: 'app-reset-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.html',
   styleUrls: ['./reset-password.scss']
})
export class ResetPasswordComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private auth = inject(AuthService);

  token = this.route.snapshot.queryParamMap.get('token') || '';
  loading = false;
  done = false;
  error = '';

  form = this.fb.group(
    {
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]],
    },
    { validators: matchValidator('contrasena', 'confirm') }
  );

  submit() {
    if (this.loading || this.form.invalid || !this.token) return;
    this.loading = true;
    this.error = '';

    const pass = this.form.value.contrasena as string;

    this.auth.resetPassword(this.token, pass).subscribe({
      next: () => { this.done = true; this.loading = false; },
      error: (e) => { this.error = e?.error?.error || 'Token inválido o vencido'; this.loading = false; }
    });
  }

  goLogin() { this.router.navigate(['/login']); }
}
