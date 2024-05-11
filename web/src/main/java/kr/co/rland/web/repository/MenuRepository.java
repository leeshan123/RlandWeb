package kr.co.rland.web.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;

@Mapper
public interface MenuRepository {
    //인터페이스는 약속이지 구현을 해놓는 곳이 아니다.
    // 쿼리문이 너무 길어지면 별로라서
    //
    // @Select("select * from menu")
    //기본값이 있으면 뒤로 미뤄도된다. 꼭 넣어야하면 앞에다 둬야한다.
    List<MenuView> findAll(Long memberId, Long categoryId, String query,int offset, int size);
    // List<MenuView> findAll(Long categoryId);
    Menu findById(Long id);


    int update(Menu menu);
    int save(Menu menu);
    int delete(long id);
    



}
