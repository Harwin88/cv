import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.idp.url_api;

const consthttpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
     "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
   })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  ObBeare(username: string, password: string): Observable<any> {
  // WARNING: For POST requests, body is set to null by browsers.

    let data = "grant_type=password&client_id=7cf780c8-c37c-4be7-a653-f489af62c591&username=admin&password=admin";
 return this.http.post(environment.idp.url_api, {
    data
 }, consthttpOptions);
}


  login(username: string, password: string): Observable<any> {
       console.log(username);
    const client_id=  environment.idp.clicnt_id;
    console.log(client_id);
    const pass= "password";
    return this.http.post('https://sistema-plan-desarrollo.lndo.site/oauth/token', {
       pass,
       client_id,
       username,
       password
    }, consthttpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, consthttpOptions);
  }
}