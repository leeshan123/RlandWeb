package kr.co.rland.web.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.Gson;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.service.MenuService;

@Controller
@RequestMapping("cart")
public class CartController {

    @Autowired
        MenuService menuservice;

    @GetMapping("list")
    public String list(
    @CookieValue String menus,
    Model model){
        
        //decode
        // String menusStr = URLDecoder.decode(menus, Charset.forName("utf-8"));
        // System.out.println(menusStr);

        // Menu menu = new Gson().fromJson(menusStr, Menu.class);
        // System.out.println(menu);

        List<Menu> menuList;
        
            if(menus == null)
                menuList = new ArrayList<>();
            else{
                String menusStr = URLDecoder.decode(menus, Charset.forName("utf-8"));
                //fromJson() 메서드는 JSON 문자열을 Java 객체로 변환하는 메서드입니다.
                menuList = new Gson().fromJson(menusStr, List.class);
            }
        
            model.addAttribute(menus, menuList);

        return "cart/list";
    }

    @PostMapping("add-menu")
    public String addmenu(
        Long id
        , @CookieValue(required = false) String menus
        , HttpServletResponse response
        ){
            List<Menu> menuList;
            {
                if(menus == null)
                    menuList = new ArrayList<>();
                else{
                    String menusStr = URLDecoder.decode(menus, Charset.forName("utf-8"));
                    //fromJson() 메서드는 JSON 문자열을 Java 객체로 변환하는 메서드입니다.
                    menuList = new Gson().fromJson(menusStr, List.class);
                }

                Menu menu = menuservice.getById(id);
                menuList.add(menu);
            }

            {
            //menu -> json
            // gson
            //toJson() 메서드는 Java 객체를 JSON 문자열로 변환하는 메서드입니다.
            String menusStr = new Gson().toJson(menuList);
            System.out.println(menusStr);
            String menuEncoded = "";

            try {
                menuEncoded = URLEncoder.encode(menusStr, "utf-8");
            } catch (UnsupportedEncodingException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            Cookie menusCookie = new Cookie("menus",menuEncoded);
            menusCookie.setPath("/");

            response.addCookie(menusCookie);
            
            }


            // StringBuilder menus = new StringBuilder();

            // menus.append("\n");
            // menus.append(menu.getId());
            // menus.append(",");
            // menus.append(menu.getKorName());

            // String menusStr = menus.toString();



        return "redirect:/menu/list";
    }
    
}
