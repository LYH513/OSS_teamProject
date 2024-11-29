import React, { useState, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../Assets/Img/logo.png';
import icon from '../../Assets/Img/SVG.svg';
import { useRecoilState } from 'recoil';
import { searchData, searchKeyword } from '../../Recoil/Atom';

function Header() {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);
  const [kakoData, setKakaoData] = useRecoilState(searchData);
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기

  const handleTitleClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // SearchInput에 포커스
    }
  };

  const handleLogoClick = () => {
    navigate('/'); // /로 이동
  };

  const handleMyPageClick = () => {
    navigate('/mypage'); // /mypage로 이동
  };

  const handleLoginClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // setSearchValue(searchInputRef.current.value.trim()); // 입력 값을 상태에 저장
      setKeyword(searchInputRef.current.value.trim());
      console.log("검색 값:", searchInputRef.current.value); // 디버그용
    }
  };
  const isHomePage = location.pathname === "/";

  return (
    <Div>
      <HeaderDiv>
        <TitleDiv onClick={handleLogoClick}>
          <Logo src={logo} alt="로고 이미지" />
          <TitleName>BWRestaurant</TitleName>
        </TitleDiv>
        {!isHomePage && (
          <SearchDiv onClick={handleTitleClick}>
            <img src={icon} alt="검색 아이콘"></img>
            <SearchInput
              type="text"
              placeholder="검색"
              ref={searchInputRef}
              onKeyDown ={handleKeyPress} ></SearchInput>
          </SearchDiv>
        )}
        <BtnDiv>
          <MyBtn onClick={handleMyPageClick}>마이페이지</MyBtn>
          <LoginBtn onClick={handleLoginClick}>로그인</LoginBtn>
        </BtnDiv>
      </HeaderDiv>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalLogo src={logo} alt="로고 이미지" />
            <ModalTitle>Sign in to unlock the best of BWRestaurant</ModalTitle>
            <InputField type="text" placeholder="닉네임" />
            <InputField type="password" placeholder="비밀번호" />
            <LoginButton>로그인</LoginButton> {/* 로그인 버튼 추가 */}
          </ModalContent>
        </ModalOverlay>
      )}
      <Outlet />
    </Div>
  );
}

export default Header;

// 모달 관련 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fff;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalLogo = styled.img`
  width: 60px; /* 기존 크기 유지 */
  height: 60px; /* 높이 추가해서 정사각형 유지 */
  border-radius: 50%; /* 둥글게 만들기 */
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: #000;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const LoginButton = styled.button`
  width: 100%; /* 버튼 너비를 입력 필드와 동일하게 설정 */
  padding: 10px;
  margin-top: 15px; /* 비밀번호 필드와의 간격 */
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #333; /* 호버 효과 */
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 1136px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

const TitleDiv = styled.span`
  display: flex;
  height: 39.992px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 40px; /* 기존 크기 유지 */
  height: 40px; /* 높이 추가해서 정사각형 유지 */
  border-radius: 50%; /* 둥글게 만들기 */
  cursor: pointer;
`;

const TitleName = styled.span`
  display: flex;
  color: #000;
  text-align: center;
  font-family: Arial;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px; /* 120.37% */
  letter-spacing: 1.08px;
`;

const SearchDiv = styled.div`
  display: flex;
  width: 473.08px;
  height: 48px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 2px solid #e0e0e0;
  background: #fff;
  gap: 8px;

  & > img {
    margin-left: 18px;
  }
`;

const SearchInput = styled.input`
  display: flex;
  width: 401.08px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  outline: none;

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const BtnDiv = styled.span`
  display: flex;
  align-items: center;
  gap: 23px;
`;

const MyBtn = styled.button`
  display: flex;
  height: 17px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  background-color: transparent;

  color: #000;
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
`;

const LoginBtn = styled.button`
  display: flex;
  padding: 10px 15.8px 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #000;

  color: #fff;
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
`;
