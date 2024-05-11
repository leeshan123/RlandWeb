package kr.co.rland.web.entity;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Menu {
    private Long id;
	private String korName;
	private String engName;
	private int price;
	private String img;
	private Date regDate;
	private int categoryId;
	private long regMemberId;
	// private boolean likeCount;
	// private Date regDate;

	

}
