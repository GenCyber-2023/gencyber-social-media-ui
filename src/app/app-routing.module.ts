import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
	{path: '', redirectTo: 'landing-page', pathMatch: 'full'},
	{path: 'landing-page', component: LandingPageComponent},
  {path: 'home/newsfeed', component: HomeComponent},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
