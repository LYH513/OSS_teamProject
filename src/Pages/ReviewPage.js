import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReviewRight from '../Components/Review_Components/ReviewRight';
import ReviewLeftSide from '../Components/Review_Components/ReviewLeftSide';
import { useRecoilState } from 'recoil';
import { selectRestaurant } from '../Recoil/Atom';

function ReviewPage() {
  const [selectkakaoData, setSelectkakaoData] =
    useRecoilState(selectRestaurant);

  return (
    <div>
      <Div>
        <ContentsDiv>
          <ReviewLeftSide selectkakaoData={selectkakaoData} />
          <ReviewRight selectkakaoData={selectkakaoData}/>
        </ContentsDiv>
      </Div>
    </div>
  );
}

export default ReviewPage;

const Div = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const ContentsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
`;
