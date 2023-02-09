import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoachhomeService {

  constructor(private http:HttpClient) { }

  getCoachCourses(coachId:any){
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + sessionStorage.getItem("jwtToken"));
    return this.http.get("http://localhost:9091/api/coach/allCourses?userName="+coachId,{ 'headers': headers });
  }
}
