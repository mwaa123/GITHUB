 import { environment } from './../environments/environment';
import {Repository } from './repository';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
getUser:User;
getRepos:Repository;
  constructor( private http:HttpClient) {
    this.getUser=new User("","","","","","","",0,0,0,0,"",new Date,new Date)
     this.getRepos=new Repository("","","","","",0,0,"",new Date)
  }
searchUser(searchName:string){
  interface Response{
    url:string;
    login: string;
    html_url:string;
    followers_url:string;
    follolling_url:string;
    repos_url:string;
    starred_url:string;
    public_gists:number;
     public_repos:number;
     followers:number;
     following:number;
     avatar_url:string;
      created_at:Date;
      updated_at:Date;
  }

  return new Promise((resolve,reject)=>{
    this.http.get<Response>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then( 
      (result)=>{
        this.getUser=result;
        console.log(this.getUser);
        resolve()
      },
      (error)=>{
        console.log(error);
        reject();
      }
    )
  })
}
getReposi(searchName){
 interface Repo{
  name:string;
  full_name:string;
  url:string;
  html_url:string;
  description:string;
  forks:number;
  watchers_count:number;
  language:string;
  created_at:Date;
 }
 return new Promise((resolve,reject)=>{
   this.http.get<Repo>('https:api.github.com/users/'+searchName+'/repos?order=created&sort=asc?access_token='+environment.apiKey).toPromise().then(
     (results)=>{
       this.getRepos=results;
       resolve();
     },
     (error)=>{
       console.log("check the error above");
       reject()
     }
   )
 })
}
} 










































// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


//  import{map}from 'rxjs/operators'
// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {
//   private username:'string';

//   private clientid = '92574d6eaf446dd40556';
//   private clientsecret ='1e2ef9e47bd6284dd2e6d44d26c212a3e7f058bc';
//   constructor( private http:HttpClient) { 
//   console.log("service is now ready");
  
//   this.username ='string'
  
//   };
//   getProfileInfo(){
//     return this.http.get("https://api.github.com/users/mwaa123?" + this.username +
//     +"?client_id="+this.clientid + "&client_secret=" + this.clientsecret)
//     .pipe(map(res => res));
//   }

//   getProfileRepos(){
//     return this.http.get("https://api.github.com/users/" + this.username +
//     +"/repos?client_id="+this.clientid + "&client_secret=" + this.clientsecret)
//      .pipe(map(res => res));
//    }

//    updateprofile(username:any){
//      this.username=username
//    }
// }
// 7129c1942b0707acd1bb911895c6a7893bcbd9e0




 