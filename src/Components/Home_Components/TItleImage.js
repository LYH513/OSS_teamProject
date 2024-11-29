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
        marginBottom: '40px', // 간격을 더 넓게 설정
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '806px', // 가로 고정
          height: '356px', // 세로 고정
          maxWidth: '100%',
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
            padding: '20px', // 위아래 및 왼쪽 여백
            marginLeft: '20px', // 왼쪽 여백 추가
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
            padding: '20px', // 내부 여백
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'black', // 추가된 흑백 배경을 명확히 표현

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

function TitleImage2() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px',
        backgroundColor: 'black',
        color: 'white',
        marginBottom: '40px', // 간격을 더 넓게 설정
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse', // 순서 반전
          width: '806px', // 가로 고정
          height: '356px', // 세로 고정
          maxWidth: '100%',
        }}
      >
        {/* 오른쪽 타이틀 박스 */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#d9d9d9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px', // 위아래 및 오른쪽 여백
            marginRight: '20px', // 오른쪽 여백 추가
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          타이틀 사진
        </div>

        {/* 왼쪽 간지나는 글 박스 */}
        <div
          style={{
            flex: 1,
            padding: '20px', // 내부 여백
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'black',
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

function TitleImage3() {
  return <TitleImage />;
}

function App() {
  return (
    <div>
      <TitleImage />
      <TitleImage2 />
      <TitleImage3 />
    </div>
  );
}

export default App;
