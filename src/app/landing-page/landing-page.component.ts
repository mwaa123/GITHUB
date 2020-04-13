import { Component, OnInit } from '@angular/core';
import  {ProfileService} from '../profile.service';
import { Repository } from '../repository';
import { User } from '../user';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  user:User;
  repo:Repository;
  
    constructor(public userService:ProfileService,public repoService:ProfileService) { }
  search(searchName){
    this.userService.searchUser(searchName).then(
      (success)=>{
        this.user=this.userService.getUser;
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.getReposi(searchName).then(
      (results)=>{
        this.repo=this.repoService.getRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error)
      }
    )
  }
    ngOnInit(): void {
      this.search('mwaa123')
    }
  
  }















