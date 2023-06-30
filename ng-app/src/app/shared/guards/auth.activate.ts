import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const loginRequired = route.data['loginRequired'];

    if (
      loginRequired === undefined ||
      this.authService.isLoggedIn === loginRequired
    ) {
      return true;
    }

    return this.router.navigate(['/auth/login']) as unknown as false;

    // this.router.navigate(['/auth/login']);
    // return false;
  }
}

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(AuthActivate).canActivate(route, state);
};
