import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PublichomeComponent } from './publichome/publichome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CoachhomeComponent } from './coachhome/coachhome.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublichomeComponent,
    RegisterComponent,
    LoginComponent,
    CoachhomeComponent,
    AddcourseComponent,
    LogoutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
