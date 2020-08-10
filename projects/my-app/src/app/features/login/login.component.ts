import { Component } from '@angular/core';
import { LoginFacade } from './login.facade';

@Component({
  selector: 'cfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginFacade: LoginFacade) { 
    
  }

}
