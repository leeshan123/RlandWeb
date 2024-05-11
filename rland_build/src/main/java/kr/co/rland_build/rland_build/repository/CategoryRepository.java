package kr.co.rland_build.rland_build.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rland_build.rland_build.entity.Category;
import kr.co.rland_build.rland_build.entity.Menu;

// MenuRepository

public interface CategoryRepository extends JpaRepository<Category, Long> {


    
}
