package com.blogdevoyage.controller;

import com.blogdevoyage.model.User;
import com.blogdevoyage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.save(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        // L'authentification est gérée par Spring Security, cette méthode peut être utilisée pour retourner des informations supplémentaires
        return userService.findByUsername(user.getUsername());
    }
}
