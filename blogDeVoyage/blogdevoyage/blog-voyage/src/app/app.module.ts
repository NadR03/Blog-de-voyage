import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth.service';
import { AuthGardService } from './services/auth-gard.service';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app.routes';
import { CreatePostComponent } from './components/create-post/create-post.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    AppComponent,
    CreatePostComponent,
    NavbarComponent,
    ContactComponent,
    PostListComponent,
    SinglePostComponent,
    HomeComponent
  ],
  providers: [
    AuthService,
    AuthGardService
  ],
  //bootstrap: [AppComponent]
})
export class AppModule { }
