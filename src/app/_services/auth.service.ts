import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = "https://dev-sistemadeseguimientoproyectos.pantheonsite.io/oauth/token";
const clicnt_id = '882e3a05-3045-4208-b671-cbb9c1f3bd81';
const consthttpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
   })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let formdata: any = new FormData();
      formdata.append("grant_type", "password");
      formdata.append("client_id", "f8007bbd-c5be-48c9-80d6-a0f5c6fef058");
      formdata.append("username", username);
      formdata.append("password", password);
     return this.http.post('https://dev-sistemadeseguimientoproyectos.pantheonsite.io/oauth/token', formdata);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, consthttpOptions);
  }
}