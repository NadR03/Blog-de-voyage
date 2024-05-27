package com.blogdevoyage.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
public class Comment {
    @Id
    private Long id;
    private String content;
    private String createdAt;
    private String updatedAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User author;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post Posts;

}
