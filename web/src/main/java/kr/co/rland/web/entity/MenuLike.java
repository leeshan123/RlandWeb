package kr.co.rland.web.entity;

import java.time.LocalDateTime;

import groovy.transform.builder.Builder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MenuLike {
    private Long MemberId;
    private Long menuId;
    private LocalDateTime regDate;
}
