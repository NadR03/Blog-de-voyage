package com.blogdevoyage.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Data
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private String createdAt;
    private String updatedAt;
    private String image;

    @ManyToMany
    @JoinTable(
            name = "blogpost_categories",
            joinColumns = @JoinColumn(name = "blogpost_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<Category> categories;

    @OneToMany(mappedBy = "blogPost", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Comment> comments;

}
