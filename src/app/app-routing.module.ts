import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./landing-page/signup/signup.component";
import {ProfileComponent} from "./profile/profile.component";


const routes: Routes = [
	{path: '', redirectTo: 'landing-page/login', pathMatch: 'full'},
	{path: 'landing-page/login', component: LandingPageComponent},
  {path: 'home/newsfeed', component: HomeComponent},
  {path: 'landing-page/signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
