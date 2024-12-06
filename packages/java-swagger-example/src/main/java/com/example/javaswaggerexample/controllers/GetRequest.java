package com.example.javaswaggerexample.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/getRequest")
public class GetRequest {
    @GetMapping("/users/{id}")
    public String getUserById(@PathVariable Long id) {
       return id + "";
    }
}
