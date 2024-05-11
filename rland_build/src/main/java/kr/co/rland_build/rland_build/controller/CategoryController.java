package kr.co.rland_build.rland_build.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rland_build.rland_build.entity.Category;

@RestController
@RequestMapping("categorys")
public class CategoryController {

    @Autowired
    private ListCrudRepository<Category,Long> repository;


    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public List<Category> list(){

        List<Category> list = repository.findAll();

        return list;
    }
    
}
