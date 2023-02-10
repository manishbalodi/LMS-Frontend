import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from '../models/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationFormData!: FormGroup;
  anyIssue : boolean=false;

  constructor(private registerService:RegisterService,private router :Router) {
    this.registrationFormData = new FormGroup({
      'userName' : new FormControl('',[Validators.required]),
      'userEmail' : new FormControl('',[Validators.required,Validators.pattern('[A-Za-z0-9._%-+]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}')]),
      'userPassword' : new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$')])
    });
   }

  ngOnInit(): void {
  }


  onSubmit(){
    let detailsData : register = {
      "userName": this.registrationFormData.value.userName,
      "userPassword": this.registrationFormData.value.userPassword,
      "userEmail": this.registrationFormData.value.userEmail,
      "role": [{
        "roleName" : "COACH"
      }]
    }
    this.registerService.registerCoach(detailsData)
    .subscribe({
      next: (res: any) => {
        if(res.status==200){
          this.anyIssue=false;
          console.log(res.data);
          // this.router.navigate(["/","login"]);
          setTimeout(() => {
            this.router.navigate(["/","login"]);
          }, 1000);
        }
      },
      error: (err: any) => {
        console.log(err);
        this.anyIssue=true;
      }
    });
    this.registrationFormData.reset();
  }


}
