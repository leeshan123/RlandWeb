package kr.co.rland.web;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.annotations.SerializedName;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.List;

class Movie2 {
    @SerializedName("movieCd")
    private String movieCd;
    @SerializedName("movieNm")
    private String movieNm;
    @SerializedName("openDt")
    private String openDt;
    @SerializedName("salesAmt")
    private String salesAmt;
    @SerializedName("audiCnt")
    private String audiCnt;
    @SerializedName("audiAcc")
    private String audiAcc;
    @Override
    public String toString() {
        return "Movie2 [movieCd=" + movieCd + ", movieNm=" + movieNm + ", openDt=" + openDt + ", salesAmt=" + salesAmt
                + ", audiCnt=" + audiCnt + ", audiAcc=" + audiAcc + "]";
    }

    
}

public class MoviePrac {
    public static void main(String[] args) throws IOException {
        String key = "fa4a546d896ea6a36a7db5d09bcb80f3";
        String targetDt = "20240327";

        try {
            URL url = new URL("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key="+ key+ "&targetDt="+targetDt);

            BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = br.readLine())!= null){
                sb.append(line);
            }
            br.close();

            // Gson 객체 생성
            Gson gson = new GsonBuilder().create();

            // JSON 데이터를 Movie2 객체로 파싱
            BoxOfficeResult boxOfficeResult = gson.fromJson(sb.toString(), BoxOfficeResult.class);
            List<Movie2> movieList = boxOfficeResult.getBoxOfficeResult().getDailyBoxOfficeList();

            // 저장된 Movie2 객체 출력
            for (Movie2 movie : movieList) {
                System.out.println(movie.toString());
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    // Gson으로 파싱하기 위한 클래스 구조
    static class BoxOfficeResult {
        @SerializedName("boxOfficeResult")
        private BoxOfficeInfo boxOfficeResult;

        public BoxOfficeInfo getBoxOfficeResult() {
            return boxOfficeResult;
        }
    }

    static class BoxOfficeInfo {
        @SerializedName("dailyBoxOfficeList")
        private List<Movie2> dailyBoxOfficeList;

        public List<Movie2> getDailyBoxOfficeList() {
            return dailyBoxOfficeList;
        }
    }
}