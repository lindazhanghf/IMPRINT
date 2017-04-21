import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { User } from './../data/user';
import { UserService } from './../user.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./../app.component.css'],
})

export class RegistrationComponent implements OnInit {
  user: User;
  step = 1;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.getProjects();
  }

  logIn(): void {
    this.userService.logIn(0); // Log into the first user in the user list (default)
  }

  nextStep(): void {
    this.step = this.step + 1;
  }

  previousStep(): void {
    this.step--;
  }

  adminReg(): void {
    this.step = 5;
  }

  returnLogin(): void {
    this.step = 1;
  }

  returnSignUp(): void{
    this.step = 2;
  }
  // goBack(): void {
  //   this.location.back();
  // }

}

