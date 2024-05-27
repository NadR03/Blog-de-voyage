package com.blogdevoyage.controller;

import com.blogdevoyage.model.Post;
import com.blogdevoyage.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Post createPost(@RequestBody Post post) {
       return postService.save(post);
    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable Long id, @RequestBody Post post) {
        Post existingPost = postService.findById(id);
        if (existingPost == null) {
            return null;
        }
        post.setId(id);
        return postService.save(post);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable Long id) {
        postService.deleteById(id);
    }

    @GetMapping("/search/{title}")
    public Iterable<Post> searchPosts(@PathVariable String title) {
        return postService.findByTitle(title);
    }

    @GetMapping("/")
    public Iterable<Post> getPosts() {
        return postService.findAll();
    }
}
