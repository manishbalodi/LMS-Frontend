import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addCourse } from '../models/addCourse';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {

  constructor(private http:HttpClient) { }

  addCourse(course:addCourse){
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    return this.http.post("http://localhost:9091/api/coach/addCourse", course,{ 'headers': headers });
  }
}
