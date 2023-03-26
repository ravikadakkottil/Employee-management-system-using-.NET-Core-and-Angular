import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public Users:any;
  public FilterData:any;
  tTypeFilter=new FormGroup({
    tType:new FormControl(''),
  });

  dateFilterData=new FormGroup({
    sDate:new FormControl(''),
    eDate:new FormControl('')
  });
  
  p:number = 1;
  count:number = 5;

  constructor(private DService:DataService, public datepipe:DatePipe) { }

  ngOnInit(): void {
    this.DService.getList().subscribe((result)=>{
      this.Users = result;
      console.log(this.Users);
    })
  }

  teamTypeFilter(){
    // console.log(this.tTypeFilter.value.tType);
    if(this.tTypeFilter.value.tType==0){
      this.DService.getList().subscribe((result)=>{
        this.Users = result;
        console.log(this.Users);
      })
    }
    else{
      this.DService.tTypeFilter(this.tTypeFilter.value.tType).subscribe((res)=>{
        this.Users = res
        console.log(this.FilterData)
      })
    }
  }

  dateFilter(){
    if(this.dateFilterData.value.sDate>=this.dateFilterData.value.eDate){
      console.log("error");
    }
    else{
      this.DService.dateFilter(this.dateFilterData.value.sDate,this.dateFilterData.value.eDate).subscribe((res)=>{
        this.Users = res;
      })
    }
    this.dateFilterData = new FormGroup({
      sDate:new FormControl(''),
      eDate:new FormControl('')
    })
  }

  clearFilter(){
    this.DService.getList().subscribe((result)=>{
      this.Users = result;
      console.log(this.Users);
    })
  }

}

