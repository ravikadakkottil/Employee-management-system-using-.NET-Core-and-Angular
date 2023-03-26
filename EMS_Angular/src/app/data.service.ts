import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BaseURI = "https://localhost:5001/api/Data";
  private UserURI = "https://localhost:5001/api/UserData";
  list:any;
  //url:any;

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get(`${this.UserURI}/UserList`,{headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})});
  }

  addData(data:any){
    //this.url = `${this.BaseURI}/Register`;
    //console.log(this.url)
    return this.http.post(`${this.BaseURI}/Register`,data);
  }

  login(loginData:any){
    return this.http.post(`${this.BaseURI}/Login`,loginData);
  }

  getUserData(){
    // var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    // console.log(tokenHeader.get('Authorization'));
    return this.http.get(`${this.UserURI}/UserDetails`,{headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})});
  }

  tTypeFilter(tType:any){
    console.log(tType)
    return this.http.get(`${this.UserURI}/TeamTypeFilter?tType=${tType}`,{headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})});
  }

  dateFilter(sDate:any,eDate:any){
    return this.http.get(`${this.UserURI}/DateFilter?sDate=${sDate}&eDate=${eDate}`,{headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})});
  }
}
