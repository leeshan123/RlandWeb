package kr.co.rland_build.rland_build.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rland_build.rland_build.entity.Menu;

// MenuRepository

public interface MenuRepository extends JpaRepository<Menu, Long> {

   Page<Menu> findByEngNameLike(String engName, Pageable pageable);

    
}
