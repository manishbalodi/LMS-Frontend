import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerCoach(user:register){
    return this.http.post("http://localhost:9091/api/users/register", user);
  }
}
