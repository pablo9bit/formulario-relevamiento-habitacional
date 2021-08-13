import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
})
export class SignOutComponent implements OnInit {

  constructor(public authService: AuthService, private routes: Router) {

  }

  ngOnInit(): void {
  }

  loggedOut() {
    this.authService.SignOut();
  }

}
