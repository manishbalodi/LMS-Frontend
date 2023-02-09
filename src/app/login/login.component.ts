import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../models/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormData!: FormGroup;
  anyIssue : boolean=false;

  constructor(private loginService:LoginService,private router :Router) {
    this.loginFormData = new FormGroup({
      'userName' : new FormControl('',Validators.required),
      'userPassword' : new FormControl('',Validators.required)
    });
   }

  ngOnInit(): void {
    if(sessionStorage.getItem("jwtToken"))
    {
      this.router.navigate(["/","coachHome"]);
    }
  }

  onSubmit(){
    let detailsData : login = {
      "userName": this.loginFormData.value.userName,
      "userPassword": this.loginFormData.value.userPassword
    }
    this.loginService.coachLogin(detailsData)
    .subscribe({
      next: (res: any) => {
        if(res.status==200){
          this.anyIssue=false;
          console.log(res.data);
          sessionStorage.setItem("jwtToken",res.data.jwtToken);
          sessionStorage.setItem("userName",res.data.userName);
        }else{
          this.anyIssue=true;
        }
      },
      error: (err: any) => {
        console.log(err);
        this.anyIssue=true;
      }
    });
    this.loginFormData.reset();
    setTimeout(() => {
      this.router.navigate(["/","coachHome"]);
    }, 1000);
  }
}
