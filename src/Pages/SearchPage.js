import React from "react";
import styled from "styled-components";
import SearchResult from "../Components/Search_Components/SearchResult";

function SearchPage(){

  return(
    <Div>
      <SearchResult/>
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
`