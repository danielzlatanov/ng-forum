import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.authService.user$.pipe(
      take(1),
      map((user) => {
        const loginRequired = route.data['loginRequired'];

        if (loginRequired === undefined || Boolean(user) === loginRequired) {
          return true;
        } 

        return Boolean(user)
          ? (this.router.navigate(['/theme/list']) as unknown as false)
          : (this.router.navigate(['/auth/login']) as unknown as false);
      })
    );
  }
}

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | Observable<boolean> => {
  return inject(AuthActivate).canActivate(route, state);
};
