import React from 'react';
import img from '../../Assets/Img/pocketmon3.webp';
import img1 from '../../Assets/Img/human1.webp';
import img2 from '../../Assets/Img/human2.webp';

function TitleImage({ src }) {
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
          width: '850px', // 가로 고정
          height: '356px', // 세로 고정
          maxWidth: '100%',
        }}
      >
        {/* 왼쪽 타이틀 박스 */}
        <div
          style={{
            flex: 1,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px', // 위아래 및 왼쪽 여백
            marginLeft: '20px', // 왼쪽 여백 추가
          }}
        >
          <img
            src={src}
            alt="타이틀"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </div>

        {/* 오른쪽 간지나는 글 박스 */}
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
            나만의 흑백 요리사
            <br />
            <h5>: 외식 애호가를 위한 맞춤형 리뷰 플랫폼</h5>
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              margin: '0',
              marginBottom: '20px',
            }}
          >
            <h6>
              “나만의 흑백 요리사”는 방문한 레스토랑 정보를 저장하고 리뷰를 남길
              수 있는 플랫폼입니다.
              <br /> 본인이 방문한 레스토랑을 검색하고,
              <br />
              필터링 기능으로 원하는 정보를 쉽게 찾아보세요.
              <br />
              나만의 외식 기록을 간편하게 관리해보세요!
            </h6>
          </p>
          <div>
            <small
              style={{
                fontSize: '0.9rem',
                color: '#888',
              }}
            >
              흑 / 백 기준
            </small>
            <div
              style={{
                display: 'flex',
                marginTop: '10px',
                gap: '10px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                흑: 본인 기준 별로였던 곳
              </div>
              <div
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                백: 본인 기준 좋았던 곳
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleImage2({ src }) {
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
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px', // 위아래 및 오른쪽 여백
            marginRight: '20px', // 오른쪽 여백 추가
          }}
        >
          <img
            src={src}
            alt="타이틀"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
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
            이유현
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              margin: '0',
              marginBottom: '20px',
            }}
          >
            한동대학교 전산전자공학부 21학번
          </p>
          <small
            style={{
              fontSize: '0.9rem',
              color: '#888',
            }}
          >
            사용 가능 언어: React, JS
          </small>
        </div>
      </div>
    </div>
  );
}

function TitleImage3({ src }) {
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
          width: '850px', // 가로 고정
          height: '356px', // 세로 고정
          maxWidth: '100%',
        }}
      >
        {/* 왼쪽 타이틀 박스 */}
        <div
          style={{
            flex: 1,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px', // 위아래 및 왼쪽 여백
            marginLeft: '20px', // 왼쪽 여백 추가
          }}
        >
          <img
            src={src}
            alt="타이틀"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </div>

        {/* 오른쪽 간지나는 글 박스 */}
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
            김지원
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              margin: '0',
              marginBottom: '20px',
            }}
          >
            한동대학교 전산전자공학부 21학번
          </p>
          <div>
            <small
              style={{
                fontSize: '0.9rem',
                color: '#888',
              }}
            >
              사용 가능 언어: Swift, JS
            </small>
            <div
              style={{
                display: 'flex',
                marginTop: '10px',
                gap: '10px',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <TitleImage src={img} />
      <TitleImage2 src={img1} />
      <TitleImage3 src={img2} />
    </div>
  );
}

export default App;
