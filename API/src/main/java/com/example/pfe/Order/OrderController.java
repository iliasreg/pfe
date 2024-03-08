package com.example.pfe.Order;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class OrderController {
    
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/getorders")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Order> getOrders() {
        return orderRepository.findAll();
    }
    
    @GetMapping("/getorder/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Order> getOrder(@RequestParam int id) {
        return orderRepository.findById(id);
    }
    
    
    @PostMapping("/addorder")
    @CrossOrigin(origins = "http://localhost:3000")
    public String saveOrder(@RequestBody Order order) {
        orderRepository.save(order);
        return HttpStatus.ACCEPTED.toString() + ": Order " + order.getId() + " was created successfully !";
    }
    
    
    @DeleteMapping("/deleteorder/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String deleteOrder(@RequestParam int id){
        orderRepository.deleteById(id);
        return HttpStatus.ACCEPTED.toString() + ": Order " + id + " was deleted successfully !";
    }
    
}
