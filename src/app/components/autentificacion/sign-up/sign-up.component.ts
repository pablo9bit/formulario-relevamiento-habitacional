import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})

export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

}