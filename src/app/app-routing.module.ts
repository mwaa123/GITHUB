import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
 { path:'', redirectTo:'/landing-page', pathMatch:'full'},
{ path: 'landing-page', component: LandingPageComponent},
{ path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets =[ LandingPageComponent,AboutComponent ]