import React from "react";
import styled from "styled-components";

function ReviewPage(){

  return(
    <Div>
      <ContentsDiv>
        리뷰 페이지
      </ContentsDiv>
    </Div>
  )
}

export default ReviewPage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`

const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
`