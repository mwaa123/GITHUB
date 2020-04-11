import { Component, OnInit } from '@angular/core';
import  {ProfileService} from '../profile.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
 profile:any;

  // constructor(private ProfileService: ProfileService) { 
  //   this.ProfileService.getProfileInfo().subscribe(profile =>{
  //     console.log(profile);
  //     this.profile = profile;
  //   });
  // }

  ngOnInit(): void {
  }

}
