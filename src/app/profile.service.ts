import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
 import{map}from 'rxjs/operators'
// import {from} from 'rxjs';
// import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:'string';
  private apiKey:''
  private clientid = '92574d6eaf446dd40556';
  private clientsecret ='1e2ef9e47bd6284dd2e6d44d26c212a3e7f058bc';
  constructor( private http:HttpClient) { 
  console.log("service is now ready");
  
  this.username ='string'
  this.apiKey  =''
  };
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/mwaa123?" + this.username +
    +"?client_id="+this.clientid + "&client_secret=" + this.clientsecret);
    // .pipe(Map(res => res.json()));
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/mwaa123?" + this.username +
    +"/repos?client_id="+this.clientid + "&client_secret=" + this.clientsecret);
    // .pipe(Map(res => res.json()));
   }

   updateprofile(username:any){
     this.username=username
   }
}
// 7129c1942b0707acd1bb911895c6a7893bcbd9e0