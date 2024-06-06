import { Component } from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    MatMenuTrigger,
    MatMenu,
    MatIcon,
    MatButton,
    MatMenuItem,
    RouterLink
  ],
  standalone: true
})
export class NavbarComponent {}
