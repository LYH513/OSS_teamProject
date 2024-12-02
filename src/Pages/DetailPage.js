import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LeftSide from "../Components/Detail_Components/LeftSide";
import RightSide from "../Components/Detail_Components/RightSide";
import { item, selectRestaurant } from "../Recoil/Atom";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { getAllReviewDataAPI, getUsersAPI } from "../API/AxiosAPI";

function DetailPage(){
  const [selectkakaoData, setSelectkakaoData] = useRecoilState(selectRestaurant);
  const { postId } = useParams();
  const [getFilterReview, setGetFilterReview] = useState([]);
  const [oneItem, setOneItem] = useRecoilState(item);

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

        for (let userId of users) {
        //   // 실제 API에 맞게 수정해야 합니다
          const response = await getAllReviewDataAPI(userId); 

          if(response ){
            allReviews.push(...response); 
          }

        const filteredReviews = allReviews.filter((review) => review.postId === postId);
        setGetFilterReview(filteredReviews);
      
    }} catch (error) {
      console.error("리뷰 데이터를 가져오는 중 에러 발생:", error);
    }
  };

  // 비어 있는 값 확인 함수
  const checkAndSetData = () => {
    const isEmpty = Object.values(selectkakaoData).every((value) => value === "");
    if (isEmpty) {
      setSelectkakaoData(oneItem);
    }
  };

  useEffect(() => {
      getAllReviewData(); 
      checkAndSetData();
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
