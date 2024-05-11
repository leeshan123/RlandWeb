package kr.co.rland.web.entity;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    private long id;
    private String username;
    private String pwd;
    private String email;
    private Date reg_date;
}
