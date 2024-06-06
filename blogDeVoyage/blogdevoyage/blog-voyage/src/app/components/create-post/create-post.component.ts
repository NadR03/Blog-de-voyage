// create-post.component.ts
import { Component } from '@angular/core';
import { PostService } from '../../services/posts.service';
// @ts-ignore
import { Post } from '../../models/post.model';
import { Router } from '@angular/router';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent{
  newPost: Post = {
    title: '',
    content: '',

  };
  selectedFile: File | null = null;

  constructor(private postService: PostService, private router: Router) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      // Si vous avez besoin de gérer l'image, vous devrez peut-être utiliser FormData
      const formData = new FormData();
      formData.append('title', this.newPost.title);
      formData.append('content', this.newPost.content);
      formData.append('image', this.selectedFile, this.selectedFile.name);

      this.postService.createPostWithImage(formData).subscribe((createdPost: any) => {
        console.log('Post créé:', createdPost);
        this.router.navigate(['/post-list']); // Redirige vers la liste des posts après la création
      });
    } else {
      this.postService.createPost(this.newPost).subscribe(createdPost => {
        console.log('Post créé:', createdPost);
        this.router.navigate(['/post-list']); // Redirige vers la liste des posts après la création
      });
    }
  }
}
