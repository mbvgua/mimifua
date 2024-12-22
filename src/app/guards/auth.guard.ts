import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const auth = inject(AuthService)

  if(auth.showStatus()){
    // if loggedin allow access
    return true
    
  } else {
    // else deny access and redirect to login
    router.navigate(['/auth/signin'])
    return false
  }

};
