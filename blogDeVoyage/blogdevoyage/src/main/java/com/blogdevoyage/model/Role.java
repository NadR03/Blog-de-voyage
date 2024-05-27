package com.blogdevoyage.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.*;

@Data
@Entity
public class Role {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String name;

        @ManyToMany(mappedBy = "roles")
        private Set<User> users;


}
