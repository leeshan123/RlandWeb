package kr.co.rland.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/")
public class HomeController {

    //인덱스 페이지
    @GetMapping("index")
    // @ResponseBody
    public String index(Model model) {
        //#은 파일에서 가져오는 것
        //$는 모델에서 가져오는 것
        //@는 
        //~는
        //*은
        model.addAttribute("m", "Hello");
        
        System.out.println("HomeController 의 index 연결");

        return "index";
    }

    
    

}
