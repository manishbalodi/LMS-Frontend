import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  coachLogin(loginData:login){
    return this.http.post("http://localhost:9091/api/users/login",loginData);
  }
}
