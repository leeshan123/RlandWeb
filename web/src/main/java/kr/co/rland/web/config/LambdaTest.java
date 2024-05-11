package kr.co.rland.web.config;

import java.util.*;

import kr.co.rland.web.entity.Menu;


public class LambdaTest {
    public static void main(String[] args) {
        List<Menu> list = new ArrayList<>();

        //이대로는 비교 못함 비교식을으로 비교해야함.
        //비교식 만드려면 너무 빡셈.. class안에 비교식을 넣어서 ~~~~~

        // list.add(Menu.builder().id(1).korName("아하").build());
        // list.add(Menu.builder().id(3).korName("어허").build());
        // list.add(Menu.builder().id(2).korName("어호").build());
        // list.add(Menu.builder().id(7).korName("어흥").build());


        System.out.println(list);

        
        //원래는 안되는데 허용해준거임.
        
        //1번째
        // Comparator<Menu> aaa = new Comparator<Menu>(){
        //     @Override
        //     public int compare(Menu arg0, Menu arg1) {
        //         return (int)(arg0.getId() - arg1.getId());
        //     }  
        // };

        // 2번째
        // Comparator<Menu> bbb1 = (Menu o1, Menu o2) ->{
        //     return (int)(o1.getId() - o2.getId());
        // };

        // 3번째
        Comparator<Menu> bbb =  (o1,o2) -> (int)(o1.getId()-o2.getId());



        //리스트 안의 파라메터는 컴페어레이터가드러간다.
        list.sort(bbb);

        System.out.println(list);
    }
    
}
