import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LeftSide from "../Components/Detail_Components/LeftSide";
import RightSide from "../Components/Detail_Components/RightSide";
import { selectRestaurant } from "../Recoil/Atom";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { getAllReviewDataAPI, getUsersAPI } from "../API/AxiosAPI";

function DetailPage(){
  const [selectkakaoData, setSelectkakaoData] = useRecoilState(selectRestaurant);
  const { postId } = useParams();
  const [getFilterReview, setGetFilterReview] = useState([]);

  // 유저 데이터 가져오기
  const getUsersData = async () => {
    const response = await getUsersAPI();
    console.log("유저 데이터 가져옴", response);
    
    const arr = [];  // id를 저장할 배열
  
    response.forEach((user) => {
      // 이미 있는 id는 추가하지 않음
      if (!arr.includes(user.id)) {
        arr.push(user.id);  // arr 배열에 user.id 추가
      }
    });
    return arr

  };  

  // 리뷰 데이터 가져오기
  const getAllReviewData = async () => {
    try {
      const users = await getUsersData();  // 유저 데이터 먼저 가져오기

      // console.log("제발",users)
      // // userIds 배열을 순회하며 해당 id로 리뷰 데이터 가져오기
      const allReviews = [];

      // // 상태 업데이트 후 ids 배열이 변경될 때마다 다시 호출되지 않도록 방지
      for (let userId of users) {
      //   // 실제 API에 맞게 수정해야 합니다
        const response = await getAllReviewDataAPI(userId); 
        allReviews.push(...response); // 모든 리뷰 데이터를 합침
      // }

      console.log("데이터", allReviews)

      const filteredReviews = allReviews.filter((review) => review.postId === postId);
      setGetFilterReview(filteredReviews);
    }} catch (error) {
      console.error("리뷰 데이터를 가져오는 중 에러 발생:", error);
    }
  };

  useEffect(() => {
      getAllReviewData(); 
  }, [postId]);

  return (
    <div>
      <Div>
        <ContentsDiv>
          <LeftSide 
            selectkakaoData={selectkakaoData} 
            getFilterReview={getFilterReview}
          />
          <RightSide selectkakaoData={selectkakaoData} />
        </ContentsDiv>
      </Div>
    </div>
  );
}

export default DetailPage;

const Div = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
`;

const ContentsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
`;
