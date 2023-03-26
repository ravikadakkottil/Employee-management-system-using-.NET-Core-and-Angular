import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  success_msg:boolean = false;

  formData = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    address:new FormControl(''),
    role:new FormControl(''),
    teamType:new FormControl(''),
    experience:new FormControl(''),
    dateOfJoining:new FormControl(''),
    previousOrgName:new FormControl(''),
    currentOrgName:new FormControl(''),
  })

  constructor(private router:Router, private DService:DataService, private datepipe:DatePipe) { }

  f:boolean=false;

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.router.navigate(['/home/user']);
    }
  }

  login(){
    this.router.navigate(['/entry/login']);
  }

  RegData(){
    console.log(this.formData.value);
    
    this.formData.value.dateOfJoining = this.datepipe.transform(this.formData.value.dateOfJoining,'dd-MM-yyyy')
    this.DService.addData(this.formData.value).subscribe(
      data => {
        console.log("Success");
        this.success_msg=true;
      },
      error => {
        if(error.status==400){
          console.log("Email id already registered");
          this.f=false;
        }
        else{
          console.log(error);
        }
      }
    )

    //alert("registered successfully");
    this.formData = new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      confirmPassword:new FormControl(''),
      address:new FormControl(''),
      role:new FormControl(''),
      teamType:new FormControl(''),
      experience:new FormControl(''),
      dateOfJoining:new FormControl(''),
      previousOrgName:new FormControl(''),
      currentOrgName:new FormControl(''),
    })
    
  }

}
