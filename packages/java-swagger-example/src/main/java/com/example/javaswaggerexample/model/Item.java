package com.example.javaswaggerexample.model;

public class Item {
    // 类属性
    private int number;
    private String text;

    // 构造方法
    public Item(int number, String text) {
        this.number = number;
        this.text = text;
    }

    // 获取属性值的方法
    public int getNumber() {
        return number;
    }

    public String getText() {
        return text;
    }

    // 设置属性值的方法
    public void setNumber(int number) {
        this.number = number;
    }

    public void setText(String text) {
        this.text = text;
    }

    // 其他方法
    public void printInfo() {
        System.out.println("Number: " + number + ", Text: " + text);
    }
}