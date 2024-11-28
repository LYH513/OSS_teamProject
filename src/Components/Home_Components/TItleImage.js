import React from 'react';

function TitleImage() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '80%',
          maxWidth: '1200px',
        }}
      >
        {/* 왼쪽 타이틀 박스 */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#d9d9d9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          타이틀 사진
        </div>

        {/* 오른쪽 간지나는 글 박스 */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              margin: '0',
              marginBottom: '20px',
            }}
          >
            간지나는 글
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              margin: '0',
              marginBottom: '20px',
            }}
          >
            진짜 간지나는 글 설명하는 중
            <br />
            진짜 간지나는 글 설명하는 중
          </p>
          <small
            style={{
              fontSize: '0.9rem',
              color: '#888',
            }}
          >
            흑 / 백 기준
          </small>
        </div>
      </div>
    </div>
  );
}

export default TitleImage;
