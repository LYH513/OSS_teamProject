import React, { useState } from 'react';
import styled from 'styled-components';

function ReviewDetailRight({ getReview }) {
  const {
    rating,
    group,
    visitDate,
    menu,
    review,
    title,
    companion,
  } = getReview;

  return (
    <RightSideDiv>
      <Container>
        <Question>귀하의 경험에 대해 평가해주세요.</Question>
        {/* 별점 */}
        <RatingContainer>
          {Array.from({ length: 5 }, (_, idx) => (
            <RatingCircle
              key={idx}
              selected={idx < rating}
            ></RatingCircle>
          ))}
        </RatingContainer>
        <Question>흑인가요? 백인가요?</Question>
        <ButtonGroup>
          <Button
            selected={group === '흑'}
            disabled
          >
            흑
          </Button>
          <Button
            selected={group === '백'}
            disabled
          >
            백
          </Button>
        </ButtonGroup>
        <Question>언제 다녀오셨나요?</Question>
        <DropdownWrapper>
          <Dropdown value={visitDate} disabled>
            <option value="">선택</option>
            <option value="1주">최근 1주</option>
            <option value="1달">최근 1달</option>
            <option value="6개월">6개월 이상</option>
          </Dropdown>
        </DropdownWrapper>
        <Question>누구와 함께 다녀오셨나요?</Question>
        <ButtonGroup>
          {['비즈니스', '커플', '가족', '친구', '단독'].map((type) => (
            <Button
              key={type}
              selected={companion === type}
              disabled
            >
              {type}
            </Button>
          ))}
        </ButtonGroup>
        <Question>어떤 메뉴를 주문하셨나요?</Question>
        <ReviewBox>
          <Input
            placeholder="크림 파스타.."
            value={menu}
            disabled
          />
        </ReviewBox>
        <ReviewBox>
          <Question>리뷰 쓰기</Question>
          <TextArea
            placeholder="이곳은 밤에 가볍게 외출하기에 좋아요..."
            value={review}
            disabled
          />
        </ReviewBox>
        <Question>제목</Question>
        <TitleBox>
          <Input
            placeholder="경험했던 것 중 가장 중요한 정보를 알려주세요"
            value={title}
            disabled
          />
        </TitleBox>
      </Container>
    </RightSideDiv>
  );
}

export default ReviewDetailRight;

// 스타일드 컴포넌트
const RightSideDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e0e0e0;
  width: 665px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;
`;

const Question = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const RatingCircle = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => (props.selected ? 'black' : 'white')};
`;

const DropdownWrapper = styled.div`
  margin-bottom: 20px;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background: ${(props) => (props.selected ? 'black' : '#fff')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const ReviewBox = styled.div`
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const TitleBox = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContinueButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;
