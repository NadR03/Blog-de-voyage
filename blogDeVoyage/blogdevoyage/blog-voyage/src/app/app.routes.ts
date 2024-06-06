import {RouterModule, Routes} from '@angular/router';
import {createComponent, NgModule} from "@angular/core";

import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {PostListComponent} from "./components/post-list/post-list.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import {CreatePostComponent} from "./components/create-post/create-post.component";


export const routes: Routes = [ // Exportez la constante routes

  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'post/:title', component: SinglePostComponent},
  {path: 'create-post', component: CreatePostComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
