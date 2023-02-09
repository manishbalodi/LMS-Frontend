import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddcourseComponent } from "./addcourse/addcourse.component";
import { CoachhomeComponent } from "./coachhome/coachhome.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { PublichomeComponent } from "./publichome/publichome.component";
import { RegisterComponent } from "./register/register.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
    {path:'',component : PublichomeComponent},
    {path:'allCourses',component : PublichomeComponent},
    {path:'register',component : RegisterComponent},
    {path:'login',component : LoginComponent},
    {path:'coachHome',component : CoachhomeComponent},
    {path:'addCourse',component : AddcourseComponent},
    {path:'logout',component : LogoutComponent},
    {path:'search',component : SearchComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

   }