import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean | UrlTree> {
    return this.checkLogin(state.url);
  }
  checkLogin(url: string): boolean | Promise<boolean> {
    const currentUser = localStorage.getItem('userDetails');

    if (currentUser) {
      if (url === '/auth/login') {
        this.router.navigate(['/dashboard']);
        return false;
      }
      return true;
    }
    if (url === '/auth/login') {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
