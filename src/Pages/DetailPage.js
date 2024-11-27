import React from "react";
import styled from "styled-components";

function DetailPage(){

  return(
    <div>
    <Div>
      <ContentsDiv>
        디테일 페이지
      </ContentsDiv>
    </Div>
    </div>
  )
}

export default DetailPage;

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