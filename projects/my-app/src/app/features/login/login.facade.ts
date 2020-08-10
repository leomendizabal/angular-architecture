import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginApi } from "./api/login.api";
import { User } from "./models/user.model";
import { LoginState } from "./state/login.state";

@Injectable({
  providedIn: 'root'
})
export class LoginFacade {
  constructor(private authenticationApi: LoginApi, private authenticationState: LoginState) {}

  isLoading$(): Observable<boolean> {
    return this.authenticationState.isLoading$();
  }

  login(user: User): void {
    this.authenticationApi.login(user).subscribe((token: string) => {
      this.authenticationState.setToken(token);
    });
  }
}