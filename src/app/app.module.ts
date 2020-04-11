import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import  {ProfileService} from './profile.service';

import { AppRoutingModule,routingComponets } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    routingComponets
    // LandingPageComponent,
    // AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
