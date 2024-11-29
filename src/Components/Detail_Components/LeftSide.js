import React from "react";
import styled from "styled-components";
import KakaoMap from "./KakaMap";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { selectReview } from "../../Recoil/Atom";
import { useRecoilState } from "recoil";

function LeftSide({selectkakaoData, getFilterReview}){
  const [selecReview, setSelecReview] = useRecoilState(selectReview);
  const navigate = useNavigate();

  const onClickReviewDetail = (item) =>{
    setSelecReview({
      postId: item.postId,
      rating: item.rating,
      group: item.group,
      visitDate: item.visitDate,
      menu: item.menu,
      review: item.review,
      title: item.title,
      companion: item.companion,
      x: item.x,
      y: item.y,
      id: item.id,
      userId: item.userId
    })
    navigate(`/review/${item.id}`)
  }
=======

function LeftSide({selectkakaoData}){
>>>>>>> 5257c53 (add: 디테일, 리뷰 페이지 추가)

  return(
    <LeftSideDiv>
      <LeftTitle>흑과 백, 어떤 스타일의 식당일지 궁금해요!</LeftTitle>
      <BorderDiv>
        <KakaoMap selectkakaoData={selectkakaoData}/>
      </BorderDiv>
<<<<<<< HEAD
      <span style={{marginTop:"5px"}}>리뷰 : {getFilterReview.length}개</span>
      {
        getFilterReview.length > 0 && (
          getFilterReview.map((item) => {
            return (
              <ReviewDiv key={item.id} group ={item.group} onClick={()=>onClickReviewDetail(item)} > 
                <span>{item.title}</span> 
              </ReviewDiv>
            );
          })
        )
      }
=======
>>>>>>> 5257c53 (add: 디테일, 리뷰 페이지 추가)
    </LeftSideDiv>

  )
}

export default LeftSide;

const LeftSideDiv =styled.div`
  display: flex;
  width: 375px;
  flex-direction: column;
  align-items: flex-start;
<<<<<<< HEAD
=======
  gap: 34px;
>>>>>>> 5257c53 (add: 디테일, 리뷰 페이지 추가)
  flex-shrink: 0;
   margin-right: 69px;
`;

const LeftTitle = styled.div`
  display: flex;
  /* width: 305.87px; */
  height: 147px;
  flex-direction: column;
  justify-content: center;

  color: #000;
  font-family: Arial;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; /* 119.048% */
<<<<<<< HEAD
  margin-bottom: 34px;
=======
>>>>>>> 5257c53 (add: 디테일, 리뷰 페이지 추가)
`;

const BorderDiv =styled.div`
  width: 375px;
  height: 375px;
  border-radius: 4px;
  border: 1px solid #E0E0E0;
<<<<<<< HEAD
`;

const ReviewDiv = styled.div`
  display: flex;
  width: 375px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border: 1px solid #E0E0E0;
  margin-bottom: 5px;
  background-color: ${(props) => (props.group === "흑" ? "black" : "white")};
  color: ${(props) => (props.group === "흑" ? "white" : "black")};
  font-size: 30px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
=======
>>>>>>> 5257c53 (add: 디테일, 리뷰 페이지 추가)
`;