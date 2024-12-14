import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReviewRight from '../Components/Review_Components/ReviewRight';
import ReviewLeftSide from '../Components/Review_Components/ReviewLeftSide';
import { useRecoilState } from 'recoil';
import { selectRestaurant, selectReview } from '../Recoil/Atom';
import { useParams } from 'react-router-dom';
import { myInfo } from '../Recoil/UserInfo';
import ReivewDetailRight from '../Components/Review_Components/Detail/ReivewDetailRight';
import { getReviewDataAPI } from '../API/AxiosAPI';

function ReviewDetailPage() {
  const [selectkakaoData, setSelectkakaoData] =
    useRecoilState(selectRestaurant);
  const [selecReview, setSelecReview] = useRecoilState(selectReview);
  const [info, setInfo] = useRecoilState(myInfo);
  const { reviewId } = useParams();
  const [getReview, setGetReview] = useState({});
  const [sendMap, setSendMap] = useState({
    x: "",
    y: ""
  })

  const getReviewData = async() =>{
    try{
      const response = await getReviewDataAPI(selecReview.userId, reviewId);
      setGetReview(response);
      setSendMap({
        x:response.x,
        y:response.y
      })
    }
    catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    if(info){
      getReviewData();
    }
    else{
      setGetReview(selecReview);
      setSendMap({
        x:selecReview.x,
        y:selecReview.y
      })
    }
  },[])

  return (
    <div>
      <Div>
        <ContentsDiv>
          <ReviewLeftSide selectkakaoData={sendMap} />
          <ReivewDetailRight getReview={getReview}/>
        </ContentsDiv>
      </Div>
    </div>
  );
}

export default ReviewDetailPage;

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