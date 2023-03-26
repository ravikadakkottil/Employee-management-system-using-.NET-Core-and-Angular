import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  UserData:any = {};

  constructor(private router:Router,private DService:DataService, private datepipe:DatePipe) { }

  ngOnInit(): void {
    this.DService.getUserData().subscribe(
      res=>{
        this.UserData=res;
        this.UserData.dateOfJoining = this.datepipe.transform(this.UserData.dateOfJoining,'dd-MM-yyyy')
        console.log(this.UserData.dateOfJoining);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
