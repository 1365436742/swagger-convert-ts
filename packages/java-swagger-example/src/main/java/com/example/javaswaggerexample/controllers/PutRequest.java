package com.example.javaswaggerexample.controllers;

import com.example.javaswaggerexample.model.Item;
import com.example.javaswaggerexample.model.ItemBody;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/getRequest")
public class PutRequest {
    @PutMapping("/users/{id}")
    public String getUserById(@PathVariable Long id) {
       return id + "";
    }
    @PutMapping("/users/{id}/{spanceId}")
    public String getUserByIds(@PathVariable Long id,@PathVariable String spanceId) {
        return id + spanceId + "";
    }
    @PutMapping("/search")
    public ArrayList<Item> searchItems(@RequestParam int length,@RequestParam int query, @RequestParam String text) {
        ArrayList list = new ArrayList();
        for (int i = 0; i < length; i++) {
            list.add(new Item(query, text));
        }
        // 处理逻辑
        return list;
    }
    @PutMapping("/getBody")
    public ArrayList<ItemBody> bodyListItems(@RequestBody ItemBody itemBody,@RequestParam int length) {
        ArrayList list = new ArrayList();
        for (int i = 0; i < length; i++) {
            list.add(itemBody);
        }
        // 处理逻辑
        return list;
    }
}

