import { Injectable, Inject, forwardRef, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) { }

}

export const canActivateIfAuthenticated: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(forwardRef(() => AuthService));
  const router = inject(forwardRef(() => Router));
  if (authService.checkConnexion()) {
    return true;
  } else {
    // Naviguer vers la page de connexion ou une autre page appropriée
    router.navigate(['/connexion']);
    return false;
  }
};