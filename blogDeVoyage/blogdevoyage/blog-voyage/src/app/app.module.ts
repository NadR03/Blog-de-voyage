import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "./services/auth.service";
import {PostsService} from "./services/posts.service";
import {AuthGardService} from "./services/auth-gard.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AppComponent,
    MatMenuModule,
    MatButtonModule
    HttpClient,
    ReactiveFormsModule

  ],
  providers: [
    AuthService,
    PostsService,
    AuthGardService
  ],
  //bootstrap: [AppComponent]
})
export class AppModule { }
