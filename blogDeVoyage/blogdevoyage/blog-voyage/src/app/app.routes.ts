import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar/navbar.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [ // Exportez la constante routes
  { path: 'app-navbar', component: NavbarComponent },
  {path: '', redirectTo: '/app-navbar', pathMatch: 'full'},
  { path: 'app-home', component: HomeComponent },
  {path: '', redirectTo: '/app-home', pathMatch: 'full'},
  { path: 'app-root', component: AppComponent },
  {path: '', redirectTo: '/app-root', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
