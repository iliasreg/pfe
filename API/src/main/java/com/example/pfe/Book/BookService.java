package com.example.pfe.Book;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    
    @Autowired
    private BookRepository bookRepository;


    public Book getMostLiked(){
        List<Book> books = bookRepository.findAll();
        Book mostLiked = books.get(0); 
            for (Book book : books) {
                if(book.getLikeCount() > mostLiked.getLikeCount()){
                    mostLiked = book;
                }
            }
            return mostLiked;
    }
}
