import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { course } from '../models/course';
import { CoachhomeService } from '../services/coachhome.service';
import { DeleteService } from '../services/delete.service';

@Component({
  selector: 'app-coachhome',
  templateUrl: './coachhome.component.html',
  styleUrls: ['./coachhome.component.css']
})
export class CoachhomeComponent {

  courseList!: course[];
  constructor(private coachhomeservice:CoachhomeService,private router :Router,private deleteService:DeleteService){

  }
  ngOnInit(): void {
    if(!sessionStorage.getItem("jwtToken"))
    {
      this.router.navigate(["/","login"]);
    }else{
    this.getCourses();
  }

  }

  getCourses(){
    this.coachhomeservice.getCoachCourses(sessionStorage.getItem("userName"))
    .subscribe({
      next: (res: any) => {
        if(res.status==200){
          this.courseList=res.data;
        }
    },
    error: (err: any) => {
      console.log(err);
    }
    })
  }

  deleteCourse(course:course){
    this.deleteService.deleteCourse(course.courseId)
    .subscribe({
      next: (res: any) => {
        if(res.status==200){
          this.getCourses();
        }
    },
    error: (err: any) => {
      console.log(err);
    }
    })
  }
}
