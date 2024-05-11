package kr.co.rland_build.rland_build.entity;


import java.time.LocalDateTime;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuLike {
    private Long MemberId;
    private Long menuId;
    private LocalDateTime regDate;
}
