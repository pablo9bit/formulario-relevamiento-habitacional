import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  constructor(public authService: AuthService, private routes: Router) {
    
  }

  get isLogIn(){
    return this.authService.isLoggedIn;
  }

  public ingresando: boolean = false;

  ngOnInit() {
    if (this.isLogIn) {
      this.routes.navigate(['/']);
    }
  }

  loggedIn(userName: any, userPassword: any) {
    this.ingresando = true;
    this.authService.SignIn(userName, userPassword);
    if(this.isLogIn){
      this.routes.navigate(['/']);
    } 
    
  }
}
