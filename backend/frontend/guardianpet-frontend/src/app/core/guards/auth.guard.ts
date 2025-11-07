import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanMatchFn = () => {
  const router = inject(Router);
  const hasToken = !!localStorage.getItem('gp_token');
  if (!hasToken) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
