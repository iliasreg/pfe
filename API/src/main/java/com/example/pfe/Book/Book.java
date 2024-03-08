package com.example.pfe.Book;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "Ouvrage")
public class Book {

    @Id
    private int id;
    private String isbn;
    private String title;
    private String shortDescription;
    private String longDescription;
    private String status;
    private LocalDate publishedDate;
    private String thumbnailUrl;
    private String[] authors;
    private String[] categories;
    private int pageCount;
    private int likeCount;

}
