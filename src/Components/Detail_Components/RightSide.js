<<<<<<< HEAD
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { myInfo } from "../../Recoil/UserInfo";
import { useRecoilState } from "recoil";

function RightSide({ selectkakaoData }) {
  const [info, setInfo] = useRecoilState(myInfo);
  const navigate = useNavigate();

  const clickReviewWrite = () =>{
    if(info){
      navigate('/review/create')
    }
    else{
      alert("로그인을 진행해주세요!")
    }
=======
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function RightSide({ selectkakaoData }) {
  const navigate = useNavigate();

  const clickReviewWrite = () =>{
    navigate('/review/create')
>>>>>>> 5257c53 (add: 디테일, 리뷰 페이지 추가)
  }

  return (
    <Div>
      <Title>{selectkakaoData.place_name}</Title>
      <RightSideDiv>
        <Container>
          <Category>{selectkakaoData.category_group_name}</Category>
          <Category>{selectkakaoData.category_name}</Category>
          <Address>
            <strong>주소: </strong>{selectkakaoData.address_name}
          </Address>
          <RoadAddress>
            <strong>도로명 주소: </strong>{selectkakaoData.road_address_name}
          </RoadAddress>
          <LinkWrapper>
            <Link href={selectkakaoData.place_url} target="_blank" rel="noopener noreferrer">
              자세히 보기
            </Link>
          </LinkWrapper>
          <ButtonWrapper>
            <Button onClick={clickReviewWrite}>리뷰 작성하기</Button>
          </ButtonWrapper>
        </Container>
      </RightSideDiv>
    </Div>
  );
}

export default RightSide;

const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

const RightSideDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e0e0e0;
  justify-content: center;
  width: 373px;
  height: 373px;
  margin-top: 115px;
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  /* margin-bottom: 10px; */
  text-align: center;
  margin-top: 25px;
`;

const Category = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #555;
  text-align: center;
`;

const Address = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #777;
  line-height: 1.5;
`;

const RoadAddress = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #777;
  line-height: 1.5;
  margin-top: 10px;
`;

const LinkWrapper = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const Link = styled.a`
  font-size: 16px;
  color: #0077cc;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #005fa3;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #333;
  }
`;
