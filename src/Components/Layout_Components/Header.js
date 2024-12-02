import React, { useState, useRef, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../Assets/Img/logo.png';
import icon from '../../Assets/Img/SVG.svg';
import { useRecoilState } from 'recoil';
import { searchData, searchKeyword } from '../../Recoil/Atom';
<<<<<<< HEAD
import { getUsersAPI, postLoginAPI } from '../../API/AxiosAPI';
import { myInfo } from '../../Recoil/UserInfo';
=======
import { getUsersAPI } from '../../API/AxiosAPI';
>>>>>>> ebf8b55 (API: mockAPi 로그인 연결 중)

function Header() {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);
  const [kakoData, setKakaoData] = useRecoilState(searchData);
  //사용자가 입력한 로그인 데이터
  const [loginData, setLoginData] = useState({
    name: "",
    password: ""
  })
  //로그인 됐을 때 id 저장
  const [info, setInfo] = useRecoilState(myInfo);
  const [isSignUp, setIsSignUp] = useState(false);

  //서버에 있는 로그인 데이터
  const [loginAll, setLoginAll] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기

  const handleTitleClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // SearchInput에 포커스
    }
  };

  useEffect(()=>{

    // '/review/숫자' 경로 정규 표현식
    const reviewPathRegex = /^\/review\/\d+$/;

    console.log("위치", location)
    if(!info && !reviewPathRegex.test(location.pathname) ){
      navigate("/")
    }

  },[info]) 

  //모달이 열렸을 때 스크롤 상태 설정
  useEffect(() => {
    if (isModalOpen) {
      // 스크롤 금지
      document.body.style.overflow = 'hidden';
    } else {
      // 스크롤 허용
      document.body.style.overflow = '';
    }

    // cleanup 함수로 스타일 원복
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleLogoClick = () => {
    navigate('/'); // /로 이동
  };

  const handleMyPageClick = () => {
    navigate('/mypage'); // /mypage로 이동
  };

  const getUsersData = async() =>{
    const response = await getUsersAPI();
<<<<<<< HEAD
    setLoginAll(response);
=======
>>>>>>> ebf8b55 (API: mockAPi 로그인 연결 중)
    console.log("유저 데이터 가져옴",response);
  };

  const handleLoginClick = () => {
<<<<<<< HEAD
    if(!info){
      setIsModalOpen(true); // 모달 열기
      getUsersData();
    }
    else{
      sessionStorage.removeItem('sessionData');
      setInfo("");
    }

=======
    setIsModalOpen(true); // 모달 열기
    getUsersData();
>>>>>>> ebf8b55 (API: mockAPi 로그인 연결 중)
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    // console.log("아이디 있음?" , info)
  };

  //헤더 검색
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setKeyword(searchInputRef.current.value.trim());
<<<<<<< HEAD
      console.log('검색 값:', searchInputRef.current.value); // 디버그용
      if (location.pathname !== '/search') {
        navigate('/search');
      }
=======
      console.log("검색 값:", searchInputRef.current.value); // 디버그용
      if(location.pathname !== "/search"){
        navigate('/search');
      }

>>>>>>> 5e64384 (add: 디테일, 리뷰 페이지 추가)
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      // 모달 배경을 클릭한 경우에만 닫기 동작 수행
      closeModal();
    }
  };

  const handleLoignInput = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }

  //로그인이 일치하는지 확인
  const clickLoginButton = () => {
    console.log("입력된 값 확인", loginData);
    const matchedUser = loginAll.find(
      (item) => item.name === loginData.name && item.password === loginData.password
    );
  
    if (matchedUser) {
      console.log("로그인 성공", matchedUser.id);
      setInfo(matchedUser.id); // 로그인 성공 시 사용자 정보 저장
      closeModal();
    } else if (loginData.name.trim() && loginData.password.trim()) {
      console.log("로그인 실패, 회원가입 진행");
      setIsSignUp(true); // 회원가입 모드로 전환
    }
  };

  //회원가입 진행
  const handleSignUp = async () => {
    if (loginData.name.trim() && loginData.password.trim()) {
      console.log("회원가입 진행 중", loginData);
  
      // 서버에 회원가입 데이터 전송 (API 호출 필요)
      try {
        const response = await postLoginAPI(loginData); // `addUserAPI`는 서버와 통신하는 함수
        console.log("회원가입 완료", response);
        setInfo(response.id);
        setIsSignUp(false);
        closeModal();
      } catch (error) {
        console.error("회원가입 실패", error);
      }
    }
  };
  
  

  const isHomePage = location.pathname === '/';

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
              onKeyDown={handleKeyPress}
            />
          </SearchDiv>
        )}
        <BtnDiv>
          {info &&
          <MyBtn onClick={handleMyPageClick}>마이페이지</MyBtn>}
        {
        !info?   
        (<LoginBtn onClick={handleLoginClick}>로그인</LoginBtn>):
        (<LoginBtn onClick={handleLoginClick}>로그아웃</LoginBtn>)}
        </BtnDiv>
      </HeaderDiv>
      {isModalOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalLogo src={logo} alt="로고 이미지" />
            <ModalTitle>
              {isSignUp ? "Join BWRestaurant and start your journey!" : "Sign in to unlock the best of BWRestaurant"}
            </ModalTitle>

            <InputField 
              type="text" 
              placeholder="닉네임" 
              name='name' 
              onChange={handleLoignInput} 
              value={loginData.name}/>
            <InputField 
              type="password" 
              placeholder="비밀번호" 
              name='password' 
              onChange={handleLoignInput} 
              value={loginData.password}/>
            <LoginButton onClick={isSignUp ? handleSignUp : clickLoginButton}>
              {isSignUp ? "회원가입" : "로그인"}
            </LoginButton>

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