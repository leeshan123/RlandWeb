package kr.co.rland.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;
import kr.co.rland.web.repository.MenuRepository;

@Service
public class MenuServiceImp implements MenuService {

    @Autowired
    private MenuRepository repository;


    @Override
    public List<MenuView> getList(Long memberId, Integer page) {
        return getList(memberId,page,null,null);
    }


    @Override
    public List<MenuView> getList(Long memberId, Integer page,Long categoryId) {
        return getList(memberId,page,categoryId,null);
    }


    @Override
    public List<MenuView> getList(Long memberId, Integer page,String query) {
        return getList(memberId,page,null,query);
    }

    public List<MenuView> getList(Long memberId,Integer page,Long categoryId, String query){
        //page -> offset,size;
        int size =6;
        int offset = (page-1) * size;


        List<MenuView> list
        = repository.findAll(memberId,categoryId, query, offset, size);
        return list;
    }


    @Override
    public Menu getById(long id) {
        Menu menu = repository.findById(id);

        return menu;
    }

    public int add(Menu menu, List<String> fileNames){
        int affected = repository.save(menu);
        
        return affected;
    }
    
}
