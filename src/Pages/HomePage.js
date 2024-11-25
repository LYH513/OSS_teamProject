import React from 'react';
import styled from 'styled-components';
import HomeSearch from '../Components/Home_Components/HomeSearch';
import SearchBar from '../Components/Home_Components/SearchBar';
import TitleImage from '../Components/Home_Components/TItleImage';

// Home_Components의 컴포넌트들을 여기 불러오면 됨. 화면에 띄울 페이지
function HomePage() {
  return (
    <Div>
      <Title>나만의 흑백 요리사</Title>
      <Spacing>
        <HomeSearch />
        <SearchBar />
        <TitleImage />
      </Spacing>
    </Div>
  );
}

export default HomePage;

// 스타일 컴포넌트
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  width: 435.92px;
  height: 65px;
  flex-direction: column;
  flex-shrink: 0;

  color: #000;
  text-align: center;
  font-family: Arial;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px; /* 120.37% */
  letter-spacing: 1.08px;
`;

const Spacing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px; /* 간격을 40px로 설정 */
  width: 100%; /* 컴포넌트들이 컨테이너에 맞춰 정렬되도록 설정 */
  align-items: center; /* 컴포넌트 가운데 정렬 */
`;