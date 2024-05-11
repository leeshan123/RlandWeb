package kr.co.rland.web;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.List;


import com.google.gson.Gson;

public class Movie {

    public static void main(String[] args) {
        // 개인이 받아와야 하는 인증 키
        String key = "fa4a546d896ea6a36a7db5d09bcb80f3";
        String movieCd = "20212866"; // 영화 코드 (예시)

        
        try {
            // 영화 정보 API URL 구성
            URL url = new URL("http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=" + key + "&movieCd=" + movieCd);

            // BufferedReader를 이용하여 API 응답 데이터 읽기
            BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) {
                sb.append(line);
            }
            br.close();

            // Gson 라이브러리를 이용하여 JSON 데이터 파싱
            Gson gson = new Gson();
            MovieInfoResponse response = gson.fromJson(sb.toString(), MovieInfoResponse.class);

            // 영화 정보 출력
            MovieInfo movieInfo = response.getMovieInfoResult().getMovieInfo();
            System.out.println("영화 코드: " + movieInfo.getMovieCd());
            System.out.println("영화명 (한글): " + movieInfo.getMovieNm());
            System.out.println("영화명 (영문): " + movieInfo.getMovieNmEn());
            System.out.println("재생 시간: " + movieInfo.getShowTm());
            System.out.println("개봉일: " + movieInfo.getOpenDt());
            System.out.println("영화 유형: " + movieInfo.getTypeNm());

            // 제작 국가명 출력
            Nation nation = movieInfo.getNations().get(0);
            System.out.println("제작 국가명: " + nation.getNationNm());

            // 장르 출력
            String genreNm = "";
            for (Genre genre : movieInfo.getGenres()) {
                genreNm += genre.getGenreNm() + " ";
            }
            System.out.println("장르: " + genreNm.trim());

            // 감독명 출력
            Director director = movieInfo.getDirectors().get(0);
            System.out.println("감독명: " + director.getPeopleNm());

            // 출연 배우 출력
            String peopleNm = "";
            for (Actor actor : movieInfo.getActors()) {
                peopleNm += actor.getPeopleNm() + ", ";
            }
            System.out.println("출연 배우: " + peopleNm.trim());

    


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

// 영화 정보 응답 데이터 클래스 (필요한 필드만 정의)
class MovieInfoResponse {
    private MovieInfoResult movieInfoResult;

    public MovieInfoResult getMovieInfoResult() {
        return movieInfoResult;
    }
}

class MovieInfoResult {
    private MovieInfo movieInfo;

    public MovieInfo getMovieInfo() {
        return movieInfo;
    }
}

class MovieInfo {
    private String movieCd;
    private String movieNm;
    private String movieNmEn;
    private String showTm;
    private String openDt;
    private String typeNm;
    private List<Nation> nations;
    private List<Genre> genres;
    private List<Director> directors;
    private List<Actor> actors;

    // getter method (생략)
     // getter method
    public String getMovieCd() {
        return movieCd;
    }

    public String getMovieNm() {
        return movieNm;
    }

    public String getMovieNmEn() {
        return movieNmEn;
    }

    public String getShowTm() {
        return showTm;
    }

    public String getOpenDt() {
        return openDt;
    }

    public String getTypeNm() {
        return typeNm;
    }

    public List<Nation> getNations(){
        return nations;
    }
    public List<Genre> getGenres(){
        return genres;
    }
    public List<Director> getDirectors(){
        return directors;
    }
    public List<Actor> getActors(){
        return actors;
    }

}

class Nation {
    private String nationNm;

    public String getNationNm() {
        return nationNm;
    }
}

class Genre {
    private String genreNm;

    public String getGenreNm() {
        return genreNm;
    }
}

class Director {
    private String peopleNm;

    public String getPeopleNm() {
        return peopleNm;
    }
}

class Actor {
    private String peopleNm;

    public String getPeopleNm() {
        return peopleNm;
    }
}
