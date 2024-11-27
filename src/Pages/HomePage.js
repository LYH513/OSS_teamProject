import React from "react";
import styled from "styled-components";
import Test from "../Components/Home_Components/Test";

//Home_Components의 컴포넌트들을 여기 불러오면 됨. 화면에 띄울 페이지
function HomePage(){

  return(
    <Div>
      <ContentsDiv>
        홈 페이지
        <Test/>
        <Hi>
          하이
        </Hi>
      </ContentsDiv>
    </Div>
  );
}

export default HomePage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`

const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const Hi = styled.div`
  display: flex;
  width: 32.2px;
  height: 17px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #000;
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
`