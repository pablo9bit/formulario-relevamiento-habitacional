import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(private routes: Router, public authService: AuthService) {}

  get isLogIn (){
    return this.authService.isLoggedIn;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(this.isLogIn)
    if (this.isLogIn) {
      return true;
    } else {
      this.routes.navigate(['/sign-in']);
      return false;
    }
  }
}
