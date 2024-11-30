import React from 'react';
import { useRecoilState } from 'recoil';
import { searchKeyword } from '../../Recoil/Atom';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      // 키워드가 비어있지 않으면, Recoil 상태에 저장 후 검색 페이지로 이동
      setKeyword(keyword);
      navigate(`/search`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && keyword.trim() !== "") {
      handleSearch();
    }
  };

  const handleInputChange = (e) => {
    setKeyword(e.target.value); // 입력 필드 변경 시 상태 업데이트
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '796px',
        height: '56px',
        margin: '20px auto',
      }}
    >
      <input
        type="text"
        placeholder="레스토랑 이름을 입력하세요"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} 
        style={{
          width: '100%',
          height: '100%',
          padding: '0 20px', // 높이와 맞추기 위해 위아래 padding 제거
          borderRadius: '28px', // 높이의 절반으로 둥글게 설정
          border: '1px solid #ddd',
          boxSizing: 'border-box',
          fontSize: '16px', // 입력 필드의 텍스트 크기
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          width: '100px', // 버튼 가로 크기
          height: '48px', // 버튼 세로 크기
          backgroundColor: '#000000', // 버튼 배경색을 검정색으로 변경
          color: 'white', // 텍스트 색상은 흰색 유지
          border: 'none',
          borderRadius: '24px', // 버튼 높이의 절반으로 둥글게 설정
          cursor: 'pointer',
          zIndex: 1,
          fontSize: '16px', // 버튼 텍스트 크기
        }}
      >
        검색
      </button>
    </div>
  );
}

export default SearchBar;
