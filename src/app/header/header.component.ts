import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck{

  isLoggedIn:boolean=false;

  ngOnInit(): void {
    if(sessionStorage.getItem("jwtToken")){
      this.isLoggedIn=true;
    }
  }

  ngDoCheck(): void {
    if(sessionStorage.getItem("jwtToken")){
      this.isLoggedIn=true;
    }else{
      this.isLoggedIn=false;
    }
  }

}
