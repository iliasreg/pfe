package com.example.pfe.Book;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {
    
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BookService bookService;
    
    @PostMapping("/addbook")
    @CrossOrigin(origins = "http://localhost:3000")
    public String saveBook(@RequestBody Book book){
        bookRepository.save(book);
        return HttpStatus.ACCEPTED.toString() + ": Book " + book.getIsbn() + " added successfully !";
    }
    
    @GetMapping("/getbooks")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Book> getBooks(){
        return bookRepository.findAll();
    }


    @GetMapping("/getbook/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Book> getBook(@PathVariable Integer id) {
        return bookRepository.findById(id);
    }
    

    @DeleteMapping("/deletebook/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String deleteBook(@PathVariable Integer id){
        bookRepository.deleteById(id);
        return HttpStatus.OK.toString() + ": Book deleted successfully !";
    }
    
    @GetMapping("/getmostliked")
    @CrossOrigin(origins = "http://localhost:3000")
    public Book getMostLikedBook(){
        return bookService.getMostLiked();
    }


}
