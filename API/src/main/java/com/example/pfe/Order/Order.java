package com.example.pfe.Order;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "Order")
public class Order {
    
    @Id
    private int id;
    private int ownerId;
    private int bookId;
    private LocalDate startDate;
    private LocalDate endDate;

}
