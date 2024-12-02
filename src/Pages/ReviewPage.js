import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker'; // npm install react-datepicker
import 'react-datepicker/dist/react-datepicker.css';

function ReviewPage() {
  const [rating, setRating] = useState(0); // 평가 상태
  const [hoverRating, setHoverRating] = useState(0); // 호버 상태
  const [selectedDate, setSelectedDate] = useState(null); // 캘린더 상태
  const [selectedPerson, setSelectedPerson] = useState(null); // 동행자 상태
  const ratingLabels = ['최악', '별로', '보통', '좋음', '아주 좋음']; // 평가 텍스트

  const handleRatingClick = (value) => {
    if (rating === value) {
      setRating(0); // 다시 클릭하면 초기화
      setHoverRating(0); // hoverRating도 초기화
    } else {
      setRating(value);
    }
  };

  const handleMouseEnter = (value) => {
    if (rating === 0) {
      // rating이 0일 때만 hoverRating 활성화
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    setHoverRating(0); // hover 상태 초기화
  };

  const handlePersonClick = (person) => {
    if (selectedPerson === person) {
      setSelectedPerson(null); // 다시 클릭하면 선택 해제
    } else {
      setSelectedPerson(person); // 선택
    }
  };

  return (
    <PageContainer>
      <ReviewContainer>
        <LeftSection>
          <Title>방문하신 식당은</Title>
          <Title2>만족스러우셨나요?</Title2>
          <ImageContainer>
            <PlaceholderText>
              레스토랑 이미지
              <br />
              레스토랑명
              <br />
              레스토랑 주소
            </PlaceholderText>
          </ImageContainer>
        </LeftSection>
        <VerticalLine /> {/* 중간 선 추가 */}
        <ReviewDetails>
          <Subtitle>귀하의 경험에 대해 평가해주세요.</Subtitle>
          <RatingContainer>
            {[1, 2, 3, 4, 5].map((value) => (
              <RatingButton
                key={value}
                isSelected={value <= (hoverRating || rating)} // 호버 중이거나 선택된 버튼 활성화
                onClick={() => handleRatingClick(value)}
                onMouseEnter={() => handleMouseEnter(value)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
            {(hoverRating || rating) > 0 && (
              <RatingLabel>
                {ratingLabels[(hoverRating || rating) - 1]}
              </RatingLabel>
            )}
          </RatingContainer>
          <Section>
            <SectionTitle>언제 다녀오셨나요?</SectionTitle>
            <DatePickerWrapper>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="날짜를 선택하세요"
              />
            </DatePickerWrapper>
          </Section>
          <Section>
            <SectionTitle>누구와 함께 가셨나요?</SectionTitle>
            <ButtonContainer>
              {['비지니스', '가족', '친구', '단독'].map((person) => (
                <PersonButton
                  key={person}
                  isSelected={selectedPerson === person}
                  onClick={() => handlePersonClick(person)}
                >
                  {person}
                </PersonButton>
              ))}
            </ButtonContainer>
          </Section>
          <Section>
            <Textarea placeholder="안성재 셰프도 감탄할 정도의 이 식당은..." />
            <CharacterCountWrapper>
              <CharacterCount>0/50 최소 글자수</CharacterCount>
            </CharacterCountWrapper>
          </Section>

          <Section>
            <Input placeholder="조보아씨 잠깐 내려와봐유" />
            <CharacterCountWrapper>
              <CharacterCount>0/120 최대 글자수</CharacterCount>
            </CharacterCountWrapper>
          </Section>
        </ReviewDetails>
      </ReviewContainer>
    </PageContainer>
  );
}

export default ReviewPage;

/* 스타일 컴포넌트 */

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  margin-top: 40px; /* 헤더와의 간격 추가 */
`;

const ReviewContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1136px;
  gap: 40px; /* 간격을 벌림 */
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* 타이틀과 이미지 사이 간격 */
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

const Title2 = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-shrink: 0;
`;

const PlaceholderText = styled.span`
  text-align: center;
  color: #666;
`;

const VerticalLine = styled.div`
  width: 2px; /* 선 너비 */
  background-color: #ddd;
  margin: 0 20px; /* 선과 각 영역 사이의 간격 */
`;

const ReviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px; /* 컴포넌트 간 간격 추가 */
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const RatingButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-color: ${({ isSelected }) => (isSelected ? 'black' : 'white')};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? 'black' : '#d9f7d9')};
  }
`;

const RatingLabel = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: 10px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  width: 100%; /* 부모의 전체 너비를 사용 */
`;

const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DatePickerWrapper = styled.div`
  width: 300px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const PersonButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: ${({ isSelected }) => (isSelected ? 'black' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected
        ? 'black'
        : '#d9d9d9'}; /* 활성화 상태에서는 호버 색상이 변하지 않음 */
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  resize: none; /* 사용자가 크기 조절 불가 */
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
`;

const CharacterCountWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  width: 100%; /* 부모의 전체 너비 사용 */
  margin-top: 5px; /* 상단 여백 추가 */
`;

const CharacterCount = styled.span`
  font-size: 12px;
  color: #999;
`;
