import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { course } from '../models/course';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchFormData!: FormGroup;
  anyIssue : boolean=false;
  courseList!: course[];

  constructor(private searchService:SearchService,private router :Router) {
    this.searchFormData = new FormGroup({
      'courseCategory' : new FormControl('',Validators.required),
      'courseDuration' : new FormControl()
    });
   }

  ngOnInit(): void {
    if(sessionStorage.getItem("jwtToken"))
    {
      this.router.navigate(["/","coachHome"]);
    }
  }

  onSubmit(){
    this.searchService.addCourse(this.searchFormData.value.courseCategory,this.searchFormData.value.courseDuration|0)
    .subscribe({
      next: (res: any) => {
        if(res.status==200){
          this.anyIssue=false;
          console.log(res.data);
          this.courseList=res.data;
          // this.router.navigate(["/","login"]);
          // setTimeout(() => {
          //   this.router.navigate(["/","login"]);
          // }, 1000);
        }
      },
      error: (err: any) => {
        console.log(err);
        this.anyIssue=true;
      }
    });
    // this.searchFormData.reset();
  }
}
