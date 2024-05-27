package com.blogdevoyage.repository;

import com.blogdevoyage.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    Iterable<Post> findByTitle(String title);
}
