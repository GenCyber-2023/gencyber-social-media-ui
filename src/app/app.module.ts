import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material/icon";
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRadioModule} from "@angular/material/radio";
import {NavbarComponent} from "./navbar/navbar.component";
import { LoginComponent } from './landing-page/login/login.component';
import { NewsFeedComponent } from './home/news-feed/news-feed.component';
import { PostComponent } from './home/news-feed/post-feed/post.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    LoginComponent,
    NewsFeedComponent,
    PostComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTooltipModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
