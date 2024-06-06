import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [{
    title: 'Article 1',
    content: 'Contenu de l\'article 1',
    image: 'https://picsum.photos/500/250'
  },
    {
      title: 'Article 2',
      content: 'Contenu de l\'article 2',
      image: 'https://picsum.photos/500/250'
    },
    {
      title: 'Article 3',
      content: 'Contenu de l\'article 3',
      image: 'https://picsum.photos/500/250'
    }];

  ngOnInit(): void {
  }
}
