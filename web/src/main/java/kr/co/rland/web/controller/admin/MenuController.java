package kr.co.rland.web.controller.admin;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Type;
import java.net.URLDecoder;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.web.exchanges.HttpExchange.Principal;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kr.co.rland.web.config.security.WebUserDetails;
import kr.co.rland.web.entity.Category;
import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;
import kr.co.rland.web.service.CategoryService;
import kr.co.rland.web.service.MenuService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Controller("adminMenuController")
@RequestMapping("admin/menu")
public class MenuController {

        @Autowired
    private MenuService service;

    @Autowired
    private CategoryService categoryservice;

        @GetMapping("list")
public String list(@RequestParam(name ="c", required = false) Long categoryId,
@RequestParam(name ="q", required = false) String query,
@RequestParam(name ="p", required = false, defaultValue = "1") Integer page,
//쿠키 이름을 다르게 하면 안됨
@CookieValue(name = "menus", required = false)  String menuscookie,
HttpServletResponse response,
@AuthenticationPrincipal WebUserDetails userDetails,
Model model) {

    //required = false하면 null값이 와도 ㄱㅊ다.
    System.out.println(page);
    System.out.println(categoryId);

      //멤버 아이디 집어넣고
      Long memberId = null;
      if(userDetails != null)
          memberId = userDetails.getId();

    
    // List<MenuView> list = service.getList();
    List<Category> categorylist = categoryservice.getList();
    
    List<MenuView>  list = new ArrayList<>();
    if(categoryId != null)
        list = service.getList(memberId,page,categoryId);
    else if(query != null)
        list = service.getList(memberId,page,query);
    else{
        list = service.getList(memberId,page);
    }

    
    model.addAttribute("list",list);
    model.addAttribute("clist", categorylist);
    // model.addAttribute("count", count);

    int cartTotalPrice = 0;
    int cartCount = 0;


    if (menuscookie != null){
        //menuscookie가 null이 아니면 List 객체로 다시 변환해서
        //각각의 값을 집계해서...

        //gson이 List<Menu>를 알 수가 없다.
        //1번째 방법
        //(1 방법)Menu[] list = list = new Gson().fromJson(menusCookie, List.class);
        //(2 방법)
        System.out.println();



        String decoded = URLDecoder.decode(menuscookie, Charset.forName("utf-8"));
        Type listType = new TypeToken<List<Menu>>(){}.getType();

        List<Menu> list1 = new Gson().fromJson(decoded, listType);

        for (Menu m : list1)
            cartTotalPrice += m.getPrice();
        cartCount = list1.size();
        
    }


    
    model.addAttribute("cartTotalPrice", cartTotalPrice);
    model.addAttribute("cartCount", cartCount);


    //굳이 안필요했음
    //모델컨트롤러에 추가
    // model.addAttribute("categorycss", categoryId);
    

        return "admin/menu/list";
    }
    
    @GetMapping("reg")
    public String reg(){

        return "admin/menu/reg";
    }

    //HTML은 소대문자 구분을 못함. 그렇기 때문에 engName을 HTML에
    //쓰는건 좀 별로임.
    @PostMapping("reg")
    public String reg(
        // @RequestParam("kor_name") String korName,
        // @RequestParam("eng_name") String engName,
            // // , @RequestParam("img") MultipartFile imgFile
            // , @RequestParam("price") Integer price
            Menu menu, 
            @RequestParam("img-file") List<MultipartFile> imgFiles,
            HttpServletRequest request,
            Principal principal
            )throws IllegalStateException, IOException {
        // Menu menu = Menu.builder()
        // .korName(korName)
        // .engName(engName)
        // .price(price)
        // // .img(imgFile.getOriginalFilename())
        // .build();
                System.out.println(menu);
    
            List<String> fileNames = new ArrayList<>();

        for(MultipartFile imgFile : imgFiles)
        {
            String fileName="";

        if (imgFile != null && !imgFile.isEmpty()) {
            // 파일 저장

            fileName = imgFile.getOriginalFilename();
            System.out.println(fileName);

            String path = "/image/menu";
            String realPath = request.getServletContext().getRealPath(path);

            File pathFile = new File(realPath);

            if (!pathFile.exists()) {
                pathFile.mkdirs();
            }

            File file = new File(realPath + File.separator + fileName); // File.separator or "//"
            imgFile.transferTo(file);

            fileNames.add(fileName);

            System.out.println(realPath);
            }
        }

        menu.setRegMemberId(1004L);
        menu.setCategoryId(4);
        // menu.setImg(fileName);
        int affected = service.add(menu, fileNames);

        System.out.println("x=================");
        System.out.printf("imgFile:%s", imgFiles);
        System.out.printf("affected%d", affected);


        System.out.println(menu);

        return "redirect:list";


    }
        

    
    
    

}
