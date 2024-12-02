import React, { useState } from "react";
import styled from "styled-components";
import { selectRestaurant } from "../../Recoil/Atom";
import { useRecoilState } from "recoil";

function ReviewRight() {
  const id = 1; //임시 아이디

  const [selectRes, setSelectRes] = useRecoilState(selectRestaurant);
  console.log("선택한 레스토랑", selectRes.id)

  const [rating, setRating] = useState(0); // 별점 상태
  const [group, setGroup] = useState(""); // 흑백 상태
  const [visitDate, setVisitDate] = useState(""); // 방문 날짜 상태
  const [menu, setMenu] = useState(""); // 메뉴 상태
  const [review, setReview] = useState(""); // 리뷰 상태
  const [title, setTitle] = useState(""); // 제목 상태
  const [companion, setCompanion] = useState(""); // 동행자 상태

  const handleRating = (idx) => setRating(idx + 1); // 별점 클릭 핸들러
  const handleGroupSelect = (selectedGroup) => setGroup(selectedGroup); // 흑백 선택
  const handleCompanionSelect = (selectedCompanion) => setCompanion(selectedCompanion); // 동행자 선택

  return (
    <RightSideDiv>
      <Container>
        <Question>귀하의 경험에 대해 평가해주세요.</Question>
        {/* 별점 */}
        <RatingContainer>
          {Array.from({ length: 5 }, (_, idx) => (
            <RatingCircle
              key={idx}
              onClick={() => handleRating(idx)}
              selected={idx < rating}
            ></RatingCircle>
          ))}
        </RatingContainer>
        <Question>흑인가요? 백인가요?</Question>
        <ButtonGroup>
          <Button
            onClick={() => handleGroupSelect("흑")}
            selected={group === "흑"}
          >
            흑
          </Button>
          <Button
            onClick={() => handleGroupSelect("백")}
            selected={group === "백"}
            style={{
              background: group === "백" ? "black" : "white",
              color: group === "백" ? "white" : "black",
            }}
          >
            백
          </Button>
        </ButtonGroup>
        {/* 드롭다운 메뉴 */}
        <Question>언제 다녀오셨나요?</Question>
        <DropdownWrapper>
          <Dropdown onChange={(e) => setVisitDate(e.target.value)}>
            <option value="">선택</option>
            <option value="1주">최근 1주</option>
            <option value="1달">최근 1달</option>
            <option value="6개월">6개월 이상</option>
          </Dropdown>
        </DropdownWrapper>
        {/* 동행자 버튼 */}
        <Question>누구와 함께 다녀오셨나요?</Question>
        <ButtonGroup>
          {["비즈니스", "커플", "가족", "친구", "단독"].map((type) => (
            <Button
              key={type}
              onClick={() => handleCompanionSelect(type)}
              selected={companion === type}
            >
              {type}
            </Button>
          ))}
        </ButtonGroup>
        {/* 메뉴 입력 */}
        <Question>어떤 메뉴를 주문하셨나요?</Question>
        <ReviewBox>
          <Input
            placeholder="크림 파스타.."
            value={menu}
            onChange={(e) => setMenu(e.target.value)}
          ></Input>
        </ReviewBox>
        {/* 리뷰 작성 */}
        <ReviewBox>
          <Question>리뷰 쓰기</Question>
          <TextArea
            placeholder="이곳은 밤에 가볍게 외출하기에 좋아요..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></TextArea>
        </ReviewBox>
        {/* 제목 작성 */}
        <Question>제목</Question>
        <TitleBox>
          <Input
            placeholder="경험했던 것 중 가장 중요한 정보를 알려주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </TitleBox>
        {/* 확인 버튼 */}
        <ContinueButton
          onClick={() =>
            console.log({ rating, visitDate, menu, group, companion, review, title })
          }
        >
          확인
        </ContinueButton>
      </Container>
    </RightSideDiv>
  );
}

export default ReviewRight;

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
  background: ${(props) => (props.selected ? "black" : "white")};
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
  background: ${(props) => (props.selected ? "black" : "#fff")};
  color: ${(props) => (props.selected ? "white" : "black")};
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
