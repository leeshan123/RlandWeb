package kr.co.rland.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rland.web.entity.Category;
import kr.co.rland.web.repository.CategoryRepository;


@Service
public class CategoryServiceImp implements CategoryService {

    @Autowired
    private CategoryRepository repository;


    @Override
    public List<Category> getList() {
        List<Category> Categorylist = repository.findAllCategory();
        
        

        return Categorylist;
    }



    
    
    
}
