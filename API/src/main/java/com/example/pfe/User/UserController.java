package com.example.pfe.User;

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
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    @PostMapping("/adduser")
    @CrossOrigin(origins = "http://localhost:3000")
    public String saveUser(@RequestBody User user){
        userRepository.save(user);
        return HttpStatus.ACCEPTED.toString() + ": User " + user.getId() + " added successfully !";
    }
    
    @GetMapping("/getusers")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<User> getUsers(){
        return userRepository.findAll();
    }


    @GetMapping("/getuser/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<User> getUser(@PathVariable Integer id) {
        return userRepository.findById(id);
    }
    

    @DeleteMapping("/deleteuser/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String deleteUser(@PathVariable Integer id){
        userRepository.deleteById(id);
        return HttpStatus.OK.toString() + ": User deleted successfully !";
    }

}
