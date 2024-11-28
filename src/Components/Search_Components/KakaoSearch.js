import axios from "axios";
import React, { useEffect } from "react";

function KakaoSearch() {
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAOSEARCH_KEY; 

  // placeSearch 함수
  async function placeSearch() {

    // 음식점 x,y 위경도 기준으로부터 20000미터 반경의 결과 1페이지의 15개
    const url =
      "https://dapi.kakao.com/v2/local/search/category.json?category_group_code=FD6&x=127.106604&y=37.64116&radius=2000&page=1&size=15";
    
    try {
      const response = await axios.get(url, {
        headers: {
          "Authorization": `KakaoAK ${KAKAO_API_KEY}`, // KakaoAK 뒤에 실제 API 키를 넣어야 합니다.
        },
      });
  
      console.log("카카오에서 받아온 데이터", response.data); // 검색된 데이터 콘솔 출력
    } catch (error) {
      console.error("에러 발생:", error);
    }
  }
  

  // 페이지가 로드될 때 자동으로 검색
  useEffect(() => {
    placeSearch();
  }, []);
}

export default KakaoSearch;
