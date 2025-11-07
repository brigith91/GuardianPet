import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const t = localStorage.getItem('gp_token');
  return next(t ? req.clone({ setHeaders: { Authorization: `Bearer ${t}` } }) : req);
};
