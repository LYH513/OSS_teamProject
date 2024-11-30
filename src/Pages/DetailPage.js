import React from "react";
import styled from "styled-components";
import LeftSide from "../Components/Detail_Components/LeftSide";
import RightSide from "../Components/Detail_Components/RightSide";
import { selectRestaurant } from "../Recoil/Atom";
import { useRecoilState } from "recoil";

function DetailPage(){
  const [selectkakaoData, setSelectkakaoData] = useRecoilState(selectRestaurant);

  return(
    <div>
    <Div>
      <ContentsDiv>
        <LeftSide selectkakaoData={selectkakaoData}/>
        <RightSide selectkakaoData={selectkakaoData}/>
      </ContentsDiv>
    </Div>
    </div>
  )
}

export default DetailPage;

const Div = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`

const ContentsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
`