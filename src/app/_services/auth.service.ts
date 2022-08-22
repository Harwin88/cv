import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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


  login(username: string, password: string): Observable<any> {
    let formdata: any = new FormData();
      formdata.append("grant_type", "password");
      formdata.append("client_id", "f8007bbd-c5be-48c9-80d6-a0f5c6fef058");
      formdata.append("username", username);
      formdata.append("password", password);
     return this.http.post('https://dev-sistemadeseguimientoproyectos.pantheonsite.io/oauth/token', formdata);
  
}
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post('https://dev-sistemadeseguimientoproyectos.pantheonsite.io/' + 'signup', {
      username,
      email,
      password
    }, consthttpOptions);
  }
}