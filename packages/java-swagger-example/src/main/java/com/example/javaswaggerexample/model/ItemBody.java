package com.example.javaswaggerexample.model;

import io.swagger.annotations.ApiModelProperty;

import java.util.ArrayList;

public class ItemBody {
    @ApiModelProperty("名称")
    private String name;
    @ApiModelProperty("描述")
    private String text;

    private ArrayList<Item> listItems;
    // 构造方法
    public ItemBody(String name, String text, ArrayList<Item> listItems) {
        this.name = name;
        this.text = text;
        this.listItems = listItems;
    }

    // 获取属性值的方法
    public String getName() {
        return name;
    }

    public String getText() {
        return text;
    }

    public ArrayList<Item> getListItems() {
        return listItems;
    }


    // 设置属性值的方法
    public void setName(String name) {
        this.name = name;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setText(ArrayList<Item> listItems) {
        this.listItems = listItems;
    }

    // 其他方法
    public void printInfo() {
        System.out.println("Name: " + name + ", Text: " + text);
    }
}