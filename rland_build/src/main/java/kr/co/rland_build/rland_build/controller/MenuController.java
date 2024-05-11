package kr.co.rland_build.rland_build.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rland_build.rland_build.entity.Menu;
import kr.co.rland_build.rland_build.repository.MenuRepository;


// 페이징 정렬 필터링 findBy속성Like까지 다 해줌.

@RestController
@RequestMapping("menus")
public class MenuController {

    @Autowired
    private MenuRepository repository;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public List<Menu> list(
        @RequestParam(name="p", required = false, defaultValue = "1") Integer page,
        @RequestParam(name="s", required = false, defaultValue = "6") Integer size

    ){
        // Pageable pageable = PageRequest.of(page,size,Sort.by("regDate").descending());
        // Page<Menu> menuPage = repository.findAll(pageable);

        // List<Menu> list = menuPage.getContent();

        //풀네임을 넣으면 안나옴 뭐임?
        Pageable pageable2 = PageRequest.of(page,size,Sort.by("engName").descending().and(Sort.by("regDate")));
        Page<Menu> menuPage2 = repository.findByEngNameLike("%oo%",pageable2);

        List<Menu> list2 = menuPage2.getContent();

        
        
        return list2;
    }

    //menus/2
    @GetMapping("{id}")
    public String item(
        @PathVariable Long id){
    
        return "";
    }

    @PostMapping
    public String save(){
        return "";
    }


    
}
