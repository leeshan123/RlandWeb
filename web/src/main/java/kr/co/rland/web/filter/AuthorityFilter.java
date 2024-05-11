package kr.co.rland.web.filter;

import java.io.IOException;

import org.springframework.stereotype.Component;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;

//서블릿보다 빨리 실행됨 (프론트컨트롤러도 서블릿)
// @WebFilter 서블릿에서
// @Component
public class AuthorityFilter implements Filter{

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        
                System.out.println("필터 실행됨?");
                chain.doFilter(request, response);
    }

    
    
}
