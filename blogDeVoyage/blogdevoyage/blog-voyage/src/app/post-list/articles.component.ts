import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles = [
    {
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
