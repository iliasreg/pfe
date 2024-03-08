package com.example.pfe.User;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "User")
public class User {
    
    @Id
    private int id;
    private String firstName;
    private String lastName;
    private String type;
    private String address;
    private String email;
    private String password;

}
