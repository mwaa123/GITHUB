import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map}from 'rxjs/operators'
// import {from} from 'rxjs';
// import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:'string';
  private apiKey:''
  constructor( private http:HttpClient) { 
  console.log("service is now ready");
  
  this.username ='string'
  this.apiKey  =''
  };
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/mwaa123? 7129c1942b0707acd1bb911895c6a7893bcbd9e0=" + this.username + "?apiKey")
  }
}
// 7129c1942b0707acd1bb911895c6a7893bcbd9e0