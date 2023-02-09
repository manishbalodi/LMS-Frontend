import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addCourse } from '../models/addCourse';
import { AddCourseService } from '../services/add-course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  courseFormData!: FormGroup;
  anyIssue : boolean=false;

  constructor(private addCourseService:AddCourseService,private router :Router) {
    this.courseFormData = new FormGroup({
      'courseName' : new FormControl('',[Validators.required,Validators.minLength(10)]),
      'courseDuration' : new FormControl('',[Validators.required]),
      'courseDescription' : new FormControl('',[Validators.required,Validators.minLength(100)]),
      'courseTechnology' : new FormControl('',Validators.required),
      'courseLaunchUrl' : new FormControl('',Validators.required)
    });
   }

  ngOnInit(): void {
    if(!sessionStorage.getItem("jwtToken"))
    {
      this.router.navigate(["/","login"]);
    }
  }

  onSubmit(){
    let course : addCourse = {
      "courseId":0,
      "courseName": this.courseFormData.value.courseName,
      "courseDuration": this.courseFormData.value.courseDuration,
      "courseDescription": this.courseFormData.value.courseDescription,
      "courseTechnology": this.courseFormData.value.courseTechnology,
      "courseLaunchUrl": this.courseFormData.value.courseLaunchUrl,
      "createdBy":sessionStorage.getItem("userName")
    }
    this.addCourseService.addCourse(course)
    .subscribe({
      next: (res: any) => {
        if(res.status==200){
          this.anyIssue=false;
          console.log(res.data);
          // this.router.navigate(["/","login"]);
        }
      },
      error: (err: any) => {
        console.log(err);
        this.anyIssue=true;
      }
    });
    this.courseFormData.reset();
  }

}
