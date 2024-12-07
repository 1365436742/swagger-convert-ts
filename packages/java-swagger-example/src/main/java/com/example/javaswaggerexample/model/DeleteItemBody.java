package com.example.javaswaggerexample.model;

import io.swagger.annotations.ApiModelProperty;

import java.util.ArrayList;

public class DeleteItemBody {
    @ApiModelProperty("删除名称")
    private String deleteName;
    @ApiModelProperty("删除描述")
    private String deleteText;
    @ApiModelProperty("删除列表内容")
    private ArrayList<Item> listItems;
    // 构造方法
    public DeleteItemBody(String name, String text, ArrayList<Item> listItems) {
        this.deleteName = deleteName;
        this.deleteText = deleteText;
        this.listItems = listItems;
    }

    // 获取属性值的方法
    public String getName() {
        return deleteName;
    }

    public String getText() {
        return deleteText;
    }

    public ArrayList<Item> getListItems() {
        return listItems;
    }


    // 设置属性值的方法
    public void setName(String deleteName) {
        this.deleteName = deleteName;
    }

    public void setText(String deleteText) {
        this.deleteText = deleteText;
    }

    public void setText(ArrayList<Item> listItems) {
        this.listItems = listItems;
    }

    // 其他方法
    public void printInfo() {
        System.out.println("DeleteName: " + deleteName + ", DeleteText: " + deleteText);
    }
}