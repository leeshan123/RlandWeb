package kr.co.rland.web.controller.api;

import org.springframework.web.bind.annotation.RestController;

import kr.co.rland.web.entity.MenuLike;
import kr.co.rland.web.service.MenuLikeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("api/menu-likes")
public class MenuLikeController {

    @Autowired
    private MenuLikeService service;

    //추가하면서 결과를 돌려 받는게 일반적이다.
    @PostMapping
    public MenuLike add(
        @RequestBody MenuLike menuLike){
        System.out.println(menuLike);
        MenuLike newOne = service.add(menuLike);
        return newOne;
    }

    @DeleteMapping
    public String delete(Long id){
        return null;
    }


}
