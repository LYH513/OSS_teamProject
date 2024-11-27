import React from "react";
import styled from "styled-components";

//Home_Components의 컴포넌트들을 여기 불러오면 됨. 화면에 띄울 페이지
function HomePage(){

  return(
    <Div>
      <ContentsDiv>
        홈 페이지
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