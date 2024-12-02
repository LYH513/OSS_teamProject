import React from 'react';
import styled from 'styled-components';
import chefImage from '../Assets/Img/human1.webp'; // 요리사 이미지를 가져옵니다.

function Mypage() {
  return (
    <PageContainer>
      <ProfileContainer>
        <ProfileImage>
          <Image src={chefImage} alt="요리사 이미지" />
        </ProfileImage>
        <ProfileInfo>
          <UserName>JIWON</UserName>
        </ProfileInfo>
        <StatsContainer>
          <StatBox>
            <StatTitle>Black Restaurant</StatTitle>
            <StatValue>0</StatValue>
          </StatBox>
          <StatBox>
            <StatTitle>White Restaurant</StatTitle>
            <StatValue>0</StatValue>
          </StatBox>
        </StatsContainer>
      </ProfileContainer>

      <ReviewContainer>
        <ReviewBox>
          <RestaurantName>레스토랑 이름</RestaurantName>
          <ReviewContent>
            <ImagePlaceholder />
            <ReviewText>
              <ReviewTitle>리뷰 제목</ReviewTitle>
              <ReviewRating>리뷰 별점</ReviewRating>
              <ReviewPreview>리뷰 내용 미리보기</ReviewPreview>
            </ReviewText>
            <ActionButtons>
              <EditButton>수정</EditButton>
              <DeleteButton>삭제</DeleteButton>
            </ActionButtons>
          </ReviewContent>
        </ReviewBox>

        <ReviewBox>
          <RestaurantName>레스토랑 이름</RestaurantName>
          <ReviewContent>
            <ImagePlaceholder />
            <ReviewText>
              <ReviewTitle>리뷰 제목</ReviewTitle>
              <ReviewRating>리뷰 별점</ReviewRating>
              <ReviewPreview>리뷰 내용 미리보기</ReviewPreview>
            </ReviewText>
            <ActionButtons>
              <EditButton>수정</EditButton>
              <DeleteButton>삭제</DeleteButton>
            </ActionButtons>
          </ReviewContent>
        </ReviewBox>

        <ReviewBox>
          <RestaurantName>레스토랑 이름</RestaurantName>
          <ReviewContent>
            <ImagePlaceholder />
            <ReviewText>
              <ReviewTitle>리뷰 제목</ReviewTitle>
              <ReviewRating>리뷰 별점</ReviewRating>
              <ReviewPreview>리뷰 내용 미리보기</ReviewPreview>
            </ReviewText>
            <ActionButtons>
              <EditButton>수정</EditButton>
              <DeleteButton>삭제</DeleteButton>
            </ActionButtons>
          </ReviewContent>
        </ReviewBox>

        <ReviewBox>
          <RestaurantName>레스토랑 이름</RestaurantName>
          <ReviewContent>
            <ImagePlaceholder />
            <ReviewText>
              <ReviewTitle>리뷰 제목</ReviewTitle>
              <ReviewRating>리뷰 별점</ReviewRating>
              <ReviewPreview>리뷰 내용 미리보기</ReviewPreview>
            </ReviewText>
            <ActionButtons>
              <EditButton>수정</EditButton>
              <DeleteButton>삭제</DeleteButton>
            </ActionButtons>
          </ReviewContent>
        </ReviewBox>

        <ReviewBox>
          <RestaurantName>레스토랑 이름</RestaurantName>
          <ReviewContent>
            <ImagePlaceholder />
            <ReviewText>
              <ReviewTitle>리뷰 제목</ReviewTitle>
              <ReviewRating>리뷰 별점</ReviewRating>
              <ReviewPreview>리뷰 내용 미리보기</ReviewPreview>
            </ReviewText>
            <ActionButtons>
              <EditButton>수정</EditButton>
              <DeleteButton>삭제</DeleteButton>
            </ActionButtons>
          </ReviewContent>
        </ReviewBox>
      </ReviewContainer>
    </PageContainer>
  );
}

export default Mypage;

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
  padding: 10px 15px; /* 내부 여백 조정 */
  border-radius: 5px;
  background: #f9f9f9;
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
  background: black; /* 이미지 배경 */
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
