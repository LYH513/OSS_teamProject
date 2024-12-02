import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { selectRestaurant } from '../../Recoil/Atom';
import { postReviewAPI } from '../../API/AxiosAPI'; // API 함수 경로에 맞게 수정
import { myInfo } from '../../Recoil/UserInfo';
import { useNavigate } from 'react-router-dom';

function ReviewRight({selectkakaoData}) {
  // const id = 1; // 임시 아이디
  const [info, setInfo] = useRecoilState(myInfo);
  const [selectRes, setSelectRes] = useRecoilState(selectRestaurant);
  const navigate = useNavigate();
  console.log('선택한 레스토랑', selectRes.id);

  const [rating, setRating] = useState(0); // 별점 상태
  console.log('평가', rating);

  const [group, setGroup] = useState(''); // 흑백 상태
  console.log('상태', group);

  const [visitDate, setVisitDate] = useState(''); // 방문 날짜 상태
  const [menu, setMenu] = useState(''); // 메뉴 상태
  const [review, setReview] = useState(''); // 리뷰 상태
  const [title, setTitle] = useState(''); // 제목 상태
  const [companion, setCompanion] = useState(''); // 동행자 상태

  const handleRating = (idx) => setRating(idx + 1); // 별점 클릭 핸들러
  const handleGroupSelect = (selectedGroup) => setGroup(selectedGroup); // 흑백 선택
  const handleCompanionSelect = (selectedCompanion) =>
    setCompanion(selectedCompanion); // 동행자 선택

  const handleSubmit = async () => {
    // 유효성 검사
    if (!rating || !menu || !review || !title) {
      alert('모든 필드를 입력해주세요!');
      return; // 유효성 검사를 통과하지 못하면 요청을 중단합니다.
    }

    const reviewData = {
      postId: selectRes.id, //게시물 아이디
      rating: rating, 
      group: group,
      visitDate: visitDate,
      menu: menu,
      review: review,
      title: title,
      companion: companion,
      userId: info,
      x: selectkakaoData.x, //게시물 지도 
      y: selectkakaoData.y //게시물 지도
    };

    try {
      const response = await postReviewAPI(info, reviewData);
      console.log('리뷰 등록 성공:', response);
      // alert('리뷰가 성공적으로 등록되었습니다!');
      navigate(`/detail/${response.postId}`)
    } catch (error) {
      console.error('리뷰 등록 실패:', error);
      alert('리뷰 등록 중 오류가 발생했습니다.');
    }
  };

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
            onClick={() => handleGroupSelect('흑')}
            selected={group === '흑'}
          >
            흑
          </Button>
          <Button
            onClick={() => handleGroupSelect('백')}
            selected={group === '백'}
            style={{
              background: group === '백' ? 'black' : 'white',
              color: group === '백' ? 'white' : 'black',
            }}
          >
            백
          </Button>
        </ButtonGroup>
        <Question>언제 다녀오셨나요?</Question>
        <DropdownWrapper>
          <Dropdown onChange={(e) => setVisitDate(e.target.value)}>
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
              onClick={() => handleCompanionSelect(type)}
              selected={companion === type}
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
            onChange={(e) => setMenu(e.target.value)}
          ></Input>
        </ReviewBox>
        <ReviewBox>
          <Question>리뷰 쓰기</Question>
          <TextArea
            placeholder="이곳은 밤에 가볍게 외출하기에 좋아요..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></TextArea>
        </ReviewBox>
        <Question>제목</Question>
        <TitleBox>
          <Input
            placeholder="경험했던 것 중 가장 중요한 정보를 알려주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </TitleBox>
        <ContinueButton onClick={handleSubmit}>확인</ContinueButton>
      </Container>
    </RightSideDiv>
  );
}

export default ReviewRight;

// 스타일드 컴포넌트는 그대로 유지

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
