import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import chefImage from '../../Assets/Img/human1.webp';
import { deleteReviewAPI, getAllReviewDataAPI, getMyUserAPI } from '../../API/AxiosAPI';
import { myInfo } from '../../Recoil/UserInfo';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { selectReview } from '../../Recoil/Atom';

function My() {
  const [info, setInfo] = useRecoilState(myInfo);
  const [selecReview, setSelecReview] = useRecoilState(selectReview);

  const [myReview, setMyReview] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [blackCount, setBlackCount] = useState(0);
  const [whiteCount, setWhiteCount] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("전체"); // 필터 상태
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const getReviewAll = async () => {
    try {
      if (info) {
        // getAllReviewDataAPI에서 응답이 없으면 빈 배열을 반환하도록 처리
        const response = await getAllReviewDataAPI(info);
    
        // response가 유효하지 않으면 빈 배열로 설정
        const reviews = response && Array.isArray(response) ? response : []; 
    
        // 상태 업데이트
        setMyReview(reviews); // 리뷰 데이터를 상태에 저장
        setFilteredReviews(reviews); // 초기 전체 리뷰 설정
    
        // 그룹별로 필터링
        const blackReviews = reviews.filter((item) => item.group === "흑");
        const whiteReviews = reviews.filter((item) => item.group === "백");
    
        // 카운트 상태 업데이트
        setBlackCount(blackReviews.length);
        setWhiteCount(whiteReviews.length);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // console.log("리뷰를 찾을 수 없습니다. (404 에러)");
        setMyReview([]);
        setFilteredReviews([]);
        setBlackCount(0);
        setWhiteCount(0);
      } 
      else{
      console.error("Error fetching reviews:", error);
      }

    }    
  };

  const getMyName = async () => {
    try {
      const response = await getMyUserAPI(info);
      setName(response.name);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReviewData = async (reviewID) => {
    try {
      const response = await deleteReviewAPI(info, reviewID);
      console.log(response);
      await getReviewAll();
      setSelectedFilter("전체"); // 필터 상태를 "전체"로 변경
    } catch (error) {
      // 404 에러는 처리하지 않음
      if (error.response && error.response.status !== 404) {
        console.error("기타 오류 발생:", error);
      }
    }
  };

  const handleFilter = (filter) => {

    if (selectedFilter === filter) {
      // 같은 필터를 다시 클릭하면 전체 리뷰로 복원
      setFilteredReviews(myReview);
      setSelectedFilter("전체");
    } else {
      // 선택된 필터에 따라 리뷰 필터링
      const filtered = myReview.filter((item) => item.group === filter);
      setFilteredReviews(filtered);
      setSelectedFilter(filter);
    }

  };

  const onClickEdit = (item) =>{
    setSelecReview({
      postId: item.postId,
      rating: item.rating,
      group: item.group,
      visitDate: item.visitDate,
      menu: item.menu,
      review: item.review,
      title: item.title,
      companion: item.companion,
      x: item.x,
      y: item.y,
      id: item.id,
      userId: item.userId,
      place_name: item.place_name
    })
    console.log("데이터 값 확인중", item)
    navigate(`/review/${item.id}/edit`);

  }

  useEffect(() => {
    if (info) {
      getReviewAll();
      getMyName();
    }
  }, [info]);

  return (
    <PageContainer>
      <ProfileContainer>
        <ProfileImage>
          <Image src={chefImage} alt="요리사 이미지" />
        </ProfileImage>
        <ProfileInfo>
          <UserName>{name}</UserName>
        </ProfileInfo>
        <StatsContainer>
          <StatBox 
            onClick={() => handleFilter("흑")}
            active={selectedFilter === "흑"}
            >
            <StatTitle>Black Restaurant</StatTitle>
            <StatValue>{blackCount}</StatValue>
          </StatBox>
          <StatBox 
            onClick={() => handleFilter("백")}
            active={selectedFilter === "백"}>
            <StatTitle>White Restaurant</StatTitle>
            <StatValue>{whiteCount}</StatValue>
          </StatBox>
        </StatsContainer>
      </ProfileContainer>

      {filteredReviews &&
        filteredReviews.length > 0 &&
        filteredReviews.map((item) => {
          return (
            <ReviewContainer key={item.id}>
              <ReviewBox>
                <RestaurantName>{item.place_name}</RestaurantName>
                <ReviewContent>
                  <ImagePlaceholder group={item.group} />
                  <ReviewText>
                    <ReviewTitle>{item.title}</ReviewTitle>
                    <ReviewRating>별점: {item.rating}</ReviewRating>
                    <ReviewPreview>{item.review}</ReviewPreview>
                  </ReviewText>
                  <ActionButtons>
                    <EditButton onClick={()=>onClickEdit(item)}>수정</EditButton>
                    <DeleteButton onClick={() => deleteReviewData(item.id)}>삭제</DeleteButton>
                  </ActionButtons>
                </ReviewContent>
              </ReviewBox>
            </ReviewContainer>
          );
        })}
    </PageContainer>
  );
}

export default My;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1136px; /* 헤더와 동일한 너비 */
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden; /* 이미지가 영역을 넘어가지 않도록 설정 */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 0%; /* 이미지를 최상단으로 이동하여 상단 부분이 보이도록 조정 */
  border-radius: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px; /* 이미지를 UserName과 가깝게 배치 */
`;

const UserName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center; /* 컨테이너 중앙 정렬 */
  align-items: center;
  gap: 20px; /* 통계 컴포넌트 간의 간격 설정 */
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  background: ${({ active }) => (active ? "#000" : "#f9f9f9")}; /* 활성화된 필터 색상 변경 */
  color: ${({ active }) => (active ? "#fff" : "#666")}; /* 활성화된 필터 텍스트 색상 변경 */
  cursor: pointer;
  transition: all 0.3s ease; /* 부드러운 애니메이션 */
  box-shadow: ${({ active }) => (active ? "0px 4px 6px rgba(0, 0, 0, 0.2)" : "none")};

  &:hover {
    background: ${({ active }) => (active ? "#333" : "#ececec")};
  }
`;

const StatTitle = styled.span`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
  text-align: center;
`;

const StatValue = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #666;
`;

/* 리뷰 박스 스타일 */
const ReviewContainer = styled.div`
  width: 1136px; /* 헤더와 동일한 너비 */
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px; /* 리뷰 박스 간의 간격 */
`;

const ReviewBox = styled.div`
  background: #e0e0e0;
  padding: 20px;
  border-radius: 10px;
`;

const RestaurantName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReviewContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 수직축 중앙 정렬 */
`;

const ImagePlaceholder = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ group }) => (group === "흑" ? "black" : "white")}; /* 이미지 배경 */
  border-radius: 10px;
`;

const ReviewText = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

const ReviewTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

const ReviewRating = styled.p`
  font-size: 14px;
  margin: 0 0 5px 0;
`;

const ReviewPreview = styled.p`
  font-size: 14px;
  color: #666;
`;

const ActionButtons = styled.div`
  display: flex; /* 버튼을 수평으로 정렬 */
  gap: 10px; /* 버튼 간의 간격 */
  align-items: center; /* 수직 중앙 정렬 */
`;

const EditButton = styled.button`
  background: black;
  color: white;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;