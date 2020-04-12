import { Component, OnInit } from '@angular/core';
import  {ProfileService} from '../profile.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
 profile:any;
 repos:any;
 username:String;

  constructor(private ProfileService: ProfileService) { 
    this.ProfileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });

    this.ProfileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos
    })
  }
    getProfile(){
      this.ProfileService.updateprofile(this.username);

      this.ProfileService.getProfileInfo().subscribe(profile =>{
        console.log(profile);
        this.profile = profile;
      });
  
      this.ProfileService.getProfileRepos().subscribe(repos =>{
        console.log(repos);
        this.repos = repos
      })
    }

  ngOnInit(): void {
  }

}
