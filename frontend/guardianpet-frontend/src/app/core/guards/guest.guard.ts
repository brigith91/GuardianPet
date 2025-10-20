import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const guestGuard: CanMatchFn = () => {
  const router = inject(Router);
  const hasToken = !!localStorage.getItem('gp_token');
  if (hasToken) {
    router.navigate(['/home']);
    return false;
  }
  return true;
};
