import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import  {ProfileService} from './profile.service';
import  { FormsModule} from '@angular/forms'

import { AppRoutingModule,routingComponets } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepoComponent } from './repo/repo.component';
import{ NavBarComponent} from './nav-bar/nav-bar.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    routingComponets,
    SearchFormComponent,
    RepoComponent,
    NavBarComponent,
    HighlightDirective,
    DateCountPipe

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
