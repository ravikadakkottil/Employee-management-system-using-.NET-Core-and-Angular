import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // UserData:any = {};

  constructor(private router:Router,private DService:DataService) { }

  ngOnInit(): void {
    // this.DService.getUserData().subscribe(
    //   res=>{
    //     this.UserData=res;
    //     console.log(this.UserData);
    //   },
    //   err=>{
    //     console.log(err);
    //   }
    // )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/entry/login'])
  }

  
}
