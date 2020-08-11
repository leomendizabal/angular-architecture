import { Component, OnInit } from '@angular/core';
import { LoginFacade } from './login.facade';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'cfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private loginFacade: LoginFacade) {
  }

  ngOnInit() {
    this.initForm();
  }

  submit() {
    console.log("user: " + JSON.stringify(this.loginForm.value));
    // this.loginFacade.login(this.user);
  }

  private initForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    });
  }
}
