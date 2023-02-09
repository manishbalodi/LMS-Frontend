import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  deleteCourse(courseId:number){
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    return this.http.delete("http://localhost:9091/api/coach/deleteCourse?courseId="+courseId,{ 'headers': headers });
  }
}
