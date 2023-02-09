import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublichomeService {

  constructor(private http:HttpClient) { }

  getAllCourses(){
    return this.http.get("http://localhost:9091/api/users/allCourses");
  }
}
