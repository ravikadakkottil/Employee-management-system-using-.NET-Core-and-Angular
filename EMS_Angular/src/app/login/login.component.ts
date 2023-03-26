import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData=new FormGroup({
    UserName:new FormControl(''),
    Password:new FormControl('')
  })

  constructor(private DService:DataService, private router:Router) { }
  f:boolean = false;

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.router.navigate(['/home/user']);
    }
  }

  login(){
    //console.log(this.loginData.value);
    this.DService.login(this.loginData.value).subscribe(
      (res:any)=>{
        // console.log(res)
        localStorage.setItem('token',res['token']); 
        //console.log(localStorage['token']);
        this.router.navigateByUrl('home/user');
      },
      err => {
        if(err.status == 400){
          console.log("Incorrect mail or password");
          this.f=true;
        }
        else{
          console.log(err);
        }
      }
    );
  }
}
