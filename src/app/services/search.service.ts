import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  addCourse(category:string,duration:number){
    return this.http.get("http://localhost:9091/api/users/searchCourse?courseCategory="+category+"&courseDuration="+duration);
  }
}
