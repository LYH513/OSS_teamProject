import React from "react";
import styled from "styled-components";

function SearchPage(){

  return(
    <Div>
      <ContentsDiv>
        검색 페이지
      </ContentsDiv>
    </Div>
  )
}

export default SearchPage;

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