package kr.co.rland.web.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rland.web.config.security.WebUserDetails;
import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;
import kr.co.rland.web.service.MenuService;


//restController는 뷰를 찾지않음. 그 자체의 데이터를 찾음.
//페이지를 주는게 아니라 데이터를 주는 녀석임.
// Representational State Transfer 구체적인 상태를 전송해라.
@RestController("apiMenuController")
@RequestMapping("api/menus")
public class MenuContorller {

    @Autowired
    private MenuService service;

    //@ResponseBody
    @GetMapping
    public List<MenuView> list(
    @RequestParam(name ="c", required = false) Long categoryId,
    @RequestParam(name ="q", required = false) String query,
    @RequestParam(name ="p", required = false, defaultValue = "1") Integer page,
    @AuthenticationPrincipal WebUserDetails userDetails) {

        
        //멤버 아이디 집어넣고
        Long memberId = null;
        if(userDetails != null)
        memberId = userDetails.getId();
        
        List<MenuView> menus = new ArrayList<>();


        if(categoryId != null)
        menus = service.getList(memberId,page,categoryId);
    else if(query != null)
        menus = service.getList(memberId,page,query);
    else
        menus = service.getList(memberId,page);
    
        return menus;
    }
    
    @GetMapping("1")
    public Menu get(Long id){
        return null;
    }

    @PostMapping
    public Menu add(Menu menu){
        return null;
    }

    @PutMapping //PatchMapping
    public Menu edit(Menu menu){
        return null;
    }

    @DeleteMapping
    public Menu delete(Menu menu){
        return null;
    }
    
    
}
