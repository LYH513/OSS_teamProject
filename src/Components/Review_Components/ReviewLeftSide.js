import React from "react";
import styled from "styled-components";
import KakaoMap from "../Detail_Components/KakaMap";

function ReviewLeftSide({selectkakaoData}){

  return(
    <LeftSideDiv>
      <LeftTitle>방문하신 시설은
      만족스러우셨나
      요?</LeftTitle>
      <BorderDiv>
        <KakaoMap selectkakaoData={selectkakaoData}/>
      </BorderDiv>
    </LeftSideDiv>

  )
}

export default ReviewLeftSide;

const LeftSideDiv =styled.div`
  display: flex;
  width: 375px;
  flex-direction: column;
  align-items: flex-start;
  gap: 34px;
  flex-shrink: 0;
   margin-right: 69px;
`;

const LeftTitle = styled.div`
  display: flex;
  width: 305.87px;
  height: 147px;
  flex-direction: column;
  justify-content: center;

  color: #000;
  font-family: Arial;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; /* 119.048% */
`;

const BorderDiv =styled.div`
  width: 375px;
  height: 375px;
  border-radius: 4px;
  border: 1px solid #E0E0E0;
`;