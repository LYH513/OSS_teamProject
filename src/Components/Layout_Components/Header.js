import React, { useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Assets/Img/logo.png"
import icon from "../../Assets/Img/SVG.svg"

function Header(){
  const [searchValue, setSearchValue] = useState(""); // 검색 값 상태 추가
  const searchInputRef = useRef(null); 
  const navigate = useNavigate(); 
  const location = useLocation(); // 현재 경로 가져오기

  const handleTitleClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // SearchInput에 포커스
    }
  };

  const handleLogoClick = () => {
    navigate("/"); // /login으로 이동
  };

  const handleMyPageClick = () => {
    navigate("/mypage"); // /login으로 이동
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchValue(searchInputRef.current.value); // 입력 값을 상태에 저장
      console.log("검색 값:", searchInputRef.current.value); // 디버그용
    }
  };

  const isHomePage = location.pathname === "/";

  return(
    <Div>
      <HeaderDiv>
        <TitleDiv onClick={handleLogoClick}>
          <Logo src={logo} alt="로고 이미지"/>
          <TitleName>BWRestaurant</TitleName>
        </TitleDiv>
        {!isHomePage &&    
        <SearchDiv onClick={handleTitleClick}> 
            <img src={icon} alt="검색 아이콘"></img>
            <SearchInput 
              type="text" 
              placeholder="검색" 
              ref={searchInputRef}
              onKeyDown ={handleKeyPress} ></SearchInput>
          </SearchDiv>}
        <BtnDiv>
          <MyBtn onClick={handleMyPageClick}>마이페이지</MyBtn>
          <LoginBtn>로그인</LoginBtn>
        </BtnDiv>
      </HeaderDiv>
      <Outlet/>
    </Div>
  )
}

export default Header;

const Div = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* height: 100vh; */
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
  width: 40px;
  border-radius: 10px;
  cursor: pointer;
`
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
  cursor: pointer;
`

const SearchDiv =styled.div`
  display: flex;
  width: 473.08px;
  height: 48px;
  /* padding: 6px 18px; */
  /* justify-content: space-around; */
  align-items: center;
  flex-shrink: 0;

  border-radius: 100px;
  border: 2px solid #E0E0E0;
  background: #FFF;
  gap:8px;

  &>img{
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
  &:hover{
    cursor: pointer;
  }
`;

const BtnDiv =styled.span`
  display: flex;
  /* justify-content: center; */
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
  /* width: 80px; */
  padding: 10px 15.8px 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #000;

  color: #FFF;
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
`;