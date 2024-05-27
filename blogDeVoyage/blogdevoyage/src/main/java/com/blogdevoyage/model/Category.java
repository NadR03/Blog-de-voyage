package com.blogdevoyage.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.*;

@Data
@Entity
public class Category {

    @Id
    private Long id;
    private String name;
    private String description;
    private String image;

    @ManyToMany(mappedBy = "categories")
    private Set<Post> posts;


}
