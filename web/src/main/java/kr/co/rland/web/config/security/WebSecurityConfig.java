package kr.co.rland.web.config.security;



import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class WebSecurityConfig {

    @Autowired
    private DataSource dataSource;

    @Bean
    public PasswordEncoder passwordEncoder(){
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder;
    }


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf((csrf) -> csrf.disable())
            .authorizeHttpRequests((requests) -> requests
            //자식에 자식에 안되게하는건 /**이다
            .requestMatchers("/member/**").hasAnyRole("MEMBER", "ADMIN")
            .requestMatchers("/admin/**").hasRole("ADMIN")
            .anyRequest().permitAll()
            )
            .formLogin((form) -> form
                .loginPage("/user/signin")
                // .successForwardUrl(null)
                .permitAll()
            )
            .logout((logout) -> logout
                .logoutUrl("/user/logout")
                .logoutSuccessUrl("/index")
                .permitAll()
            );

            return http.build();
    }

    

    // 데이터베이스 쿼리를 이용해서 사용자 정보를 제공하는 제공자.
    // username만 가져올수있다.
    // @Bean
    public UserDetailsService jdbcUserDetailsService(){

        //      -> 결과 집합의 모양
//         ┌────────────┬───────────┬─────────┐
//         │  username  │  password │ enabled │
//         ├────────────┼───────────┼─────────┤
//         │   newlec   │    111    │    1    │
// 상속값에 값을추가할수있다.
// 컬럼도 꺼낸거지 컬럼만 꺼낼수있는게 아니다.
        String userSql = "select username, pwd password, 1 enabled from member where username=?";
        // 결과 집합의 모양

        //"""text block"""
        String authorSql = """
            SELECT M.USERNAME,
            MR.ROLE_NAME AUTHORITY
            FROM
            member M right join member_role MR
            ON M.ID = MR.MEMBER_ID
            WHERE username =?
                """;
        

        JdbcUserDetailsManager manager = new JdbcUserDetailsManager(dataSource);
        manager.setUsersByUsernameQuery(userSql);
        manager.setAuthoritiesByUsernameQuery(authorSql);

        return manager;
    }

    //메모리 상의 사용자 정보 제공자
    // @Bean
    public UserDetailsService userDetailsService() {

        //암호화가 안된 비밀번호다 => {noop}
        UserDetails user1 = User.builder()
                        .username("newlec")
                        .password("{noop}111")
                        //역할자 구분.
                        .roles("MEMBER","ADMIN")
                        .build();

        UserDetails user2 = User.builder()
                        .username("지성팍")
                        .password("{noop}13")
                        .roles("MEMBER")
                        .build();

    return new InMemoryUserDetailsManager(user1,user2);
    }


    // class AuthSuccessHandler implements AuthenticationSuccessHandler{

    //     @Override
    //     public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
    //             Authentication authentication) throws IOException, ServletException {
    //         HttpSession session = request.getSession();
    //         String username = authentication.getName();
    //         Member member = memberRepository.findByUsername(username);
    //         session.setAttribute("email", member.getEmail());
    //     }
        
    // }
    
}
