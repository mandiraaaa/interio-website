//import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../users';
import { UserService } from '../user.service';


@Component({
  selector: 'app-admin-userinside',
  templateUrl: './admin-userinside.component.html',
  styleUrls: ['./admin-userinside.component.css']
})
export class AdminUserinsideComponent {
  userssdata: any;
  constructor(private UserService: UserService, private httpClient: HttpClient){}

  ngOnInit(){
    this.UserService.Getusers().subscribe((response: any) =>{
      console.log(response);
      this.userssdata=response;
    })
  }
}
