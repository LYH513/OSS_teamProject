import React from "react";
import styled from "styled-components";

function Mypage(){

  return(
    <Div>
      <ContentsDiv>
        마이 페이지
      </ContentsDiv>
    </Div>
  )
}

export default Mypage;

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