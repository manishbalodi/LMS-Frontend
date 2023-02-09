import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  userName : any = sessionStorage.getItem("userName");

  constructor(private router :Router) {
  
   }

  ngOnInit(): void {
    if(!sessionStorage.getItem("jwtToken"))
    {
      this.router.navigate(["/","login"]);
    }else{
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("userName");
    setTimeout(() => {
      this.router.navigate(["/","allCourses"]);
    }, 3000);
  }
}
}
