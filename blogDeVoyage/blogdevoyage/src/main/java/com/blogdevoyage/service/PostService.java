package com.blogdevoyage.service;

import com.blogdevoyage.model.Post;
import com.blogdevoyage.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post save(Post post) {
        return postRepository.save(post);
    }

    public Post findById(Long id) {
        return postRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        postRepository.deleteById(id);
    }

    public Iterable<Post> findAll() {
        return postRepository.findAll();
    }
    public Iterable<Post> findByTitle(String title) {
        return postRepository.findByTitle(title);
    }
}
