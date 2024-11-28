import React from 'react';

function SearchBar() {
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
        placeholder="Search.."
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
