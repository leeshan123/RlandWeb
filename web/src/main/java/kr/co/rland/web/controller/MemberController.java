package kr.co.rland.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import kr.co.rland.web.service.MemberService;


@Controller
@RequestMapping("user")
public class MemberController {

    @Autowired
    private MemberService service;

    //유저 로그인 페이지
    @GetMapping("signin")
    // @ResponseBody
    public String signin() {
        return "user/signin";
    }

    @PostMapping("signin")
    public String signin(
        String username,
        String password,
        // HttpSession session
        HttpServletResponse response
        ){

        //아이디와 비번이 일치한다. 확인됨.
        boolean valid = service.validate(username,password);

        if(!valid)
            return "redirect:signin?error";
        
        Cookie uidCookie= new Cookie("uid","1");
        //Path와MaxAge의 이점을 가질수있으면 쿠키쓰는게 좋다.
        
        uidCookie.setPath("/");
        // uidCookie.setMaxAge(0);
        // uidCookie.setSecure(false);
        // uidCookie.setHttpOnly(true);

        Cookie usernameCookie=new Cookie("username",username);
        usernameCookie.setPath("/");

        // session.setAttribute("uid", "1");
        // session.setAttribute("username", "newlec");

            response.addCookie(uidCookie);
            response.addCookie(usernameCookie);


        // HttpSession session = request.getSession();

        return "redirect:/index";
    }
    
    

}
