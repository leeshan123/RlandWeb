package kr.co.rland.web.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.rland.web.entity.Category;

@Mapper
public interface CategoryRepository {
    List<Category> findAllCategory();
    Category findAllById();

    void save(Category category);
    void update(Category cetegory);
    void delete(long id);
    
    List<Category> findById();
}