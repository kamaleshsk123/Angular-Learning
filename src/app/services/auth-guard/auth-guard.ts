import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router);
  const isLoggedIn = true;

  if (isLoggedIn) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
