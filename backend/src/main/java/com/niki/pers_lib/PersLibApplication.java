package com.niki.pers_lib;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PersLibApplication {

    String string = "text";

    public static void main(String[] args) {
        SpringApplication.run(PersLibApplication.class, args);
        System.out.println("Test123412123123222111");
    }

}
