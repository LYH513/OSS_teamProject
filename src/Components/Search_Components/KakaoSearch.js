import axios from "axios";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchData, searchKeyword } from "../../Recoil/Atom";


export const KakaoSearch = async (keyword, currentPage) => {
  // const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(keyword)}&category_group_code=FD6`;

  const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(keyword)}&category_group_code=FD6&page=${currentPage}`;


  console.log("페이지네이션", currentPage)
  try {
    const response = await axios.get(url, {
      headers: {
        "Authorization": `KakaoAK ${process.env.REACT_APP_KAKAOSEARCH_KEY}`,
      },
    });

    return response.data; // 결과 데이터 반환
  } catch (error) {
    console.error("에러 발생:", error);
    throw error; // 에러를 호출한 곳에서 처리할 수 있도록 던짐
  }
};


export default KakaoSearch;