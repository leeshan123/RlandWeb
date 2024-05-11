package kr.co.rland.web.config.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import kr.co.rland.web.entity.Member;
import kr.co.rland.web.entity.MemberRole;
import kr.co.rland.web.repository.MemberRepository;
import kr.co.rland.web.repository.MemberRoleRepository;

//내가 만든건 Servie
//남이 만든건 Bean

@Service
public class WebUserDetailService implements UserDetailsService{

    @Autowired
    private MemberRepository repository;

    @Autowired
    private MemberRoleRepository memberRoleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        Member member = repository.findByUsername(username);
        List<MemberRole> roles = memberRoleRepository.findAllMemberId(member.getId());

        List<GrantedAuthority> authorities = new ArrayList<>();
        // authorities.add(new SimpleGrantedAuthority("ROLE_MEMBER"));
        // authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));

        for(MemberRole role : roles)
        authorities.add(new SimpleGrantedAuthority(role.getRoleName()));


        WebUserDetails userDetails = new WebUserDetails();
        userDetails.setId(member.getId());
        userDetails.setUsername(member.getUsername());
        userDetails.setEmail(member.getEmail());
        userDetails.setPassword(member.getPwd());
        
        System.out.println(member.getId());
        System.out.println(member.getUsername());
        userDetails.setAuthorities(authorities);


        return userDetails;
    }
    
}
