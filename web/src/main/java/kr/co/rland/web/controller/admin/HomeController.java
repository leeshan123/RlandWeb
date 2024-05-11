package kr.co.rland.web.controller.admin;



import java.security.Principal;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.co.rland.web.config.security.WebUserDetails;


@Controller("adminHomeController")
@RequestMapping("admin")
public class HomeController {
    
    @GetMapping("index")
    public String index(
        // HttpSession session
        // HttpServletRequest request
        // Long uid
        @CookieValue(required = false) Long uid
        , Principal principal
        //Principal은 유저의 디테일정보.
        , Authentication authentication
        //@AuthenticationPrincipal을 써서 우리가 만든 WebUserDetails을 스프링이 인식하게 알려줌
        , @AuthenticationPrincipal WebUserDetails userDetails
        
        ) {
            //CustomUserDetails 사용법 2
            System.out.println(userDetails.getEmail());

            //CustomUserDetails 사용법 1
            // WebUserDetails userDetails = (WebUserDetails)authentication.getPrincipal();
            // System.out.println(userDetails.getEmail());


            //방법 1
            //홀더 안에 컨텍스트 안에 어설리케이션 안에 프린서펄
            SecurityContext context = SecurityContextHolder.getContext();
            Authentication auth = context.getAuthentication();
            String username = auth.getName();
            System.out.println(username);

            //방법 2
            String username1 = principal.getName();
            System.out.println(username1);
            
        // Cookie[] cookies = request.getCookies();

        //1. 쿼리스트링 , 2.세션, 3.쿠키

        // if(session.getAttribute("uid")==null)
        //     return "redirect:/user/signin";

            // System.out.println(uid);

        // if(uid == null)
        //     return "redirect:/user/signin";


            // if(session.getAttribute("uid")==null)
            // return "redirect:/user/signin";




        return "admin/index";
    }
    
    
}
