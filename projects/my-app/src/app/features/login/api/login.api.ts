import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginApi {

  readonly API_URL = 'http://demo0354281.mockable.io/api/signup';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<string> {
    return this.http.post<string>(this.API_URL, user);
  }
}
