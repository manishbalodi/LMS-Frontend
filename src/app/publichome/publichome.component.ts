import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { course } from '../models/course';
import { PublichomeService } from '../services/publichome.service';

@Component({
  selector: 'app-publichome',
  templateUrl: './publichome.component.html',
  styleUrls: ['./publichome.component.css']
})
export class PublichomeComponent implements OnInit{

  courseList!: course[];

  constructor(private pubhomeservice:PublichomeService,private router :Router){

  }
  ngOnInit(): void {
    if(sessionStorage.getItem("jwtToken"))
    {
      this.router.navigate(["/","coachHome"]);
    }
    this.pubhomeservice.getAllCourses()
    .subscribe({
      next: (res: any) => {
        if(res.status==200){
          this.courseList=res.data;
          console.log(res.data);
        }
    },
    error: (err: any) => {
      console.log(err);
    }
    })
  }

}
