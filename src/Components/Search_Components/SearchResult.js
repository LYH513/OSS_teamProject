import React, { useState } from "react";
import styled from "styled-components";

function SearchPage() {
  const testimg =
    "//t1.kakaocdn.net/thumb/T800x0.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F368D31A4F0094C43BDD961FD30762120";
  const tmparr = Array.from({ length: 50 }, (_, index) => index + 1); // 총 50개 데이터 예시

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 16; // 한 페이지에 보여줄 아이템 개수
  const totalPages = Math.ceil(tmparr.length / itemsPerPage); // 총 페이지 수

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 현재 페이지에 해당하는 데이터 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = tmparr.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Div>
      <ContentsDiv>
        <TitleDiv>흑과 백, 대조의 미학</TitleDiv>
        <SubDiv>2024년, 흑과 백의 세계에서 미식의 정점을 경험하세요.</SubDiv>
        <RowDiv>
          {currentData.map((item) => (
            <div key={item}>
              <ImageContainer>
                <StyledImage src={testimg} alt="이미지 설명" />
              </ImageContainer>
              <ImageName>레스토랑 {item}</ImageName>
            </div>
          ))}
        </RowDiv>
        
        <PaginationContainer>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              {/* 이전 버튼 */}
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                >
                  Previous
                </a>
              </li>
              {/* 페이지 번호 */}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <li
                    className={`page-item ${
                      page === currentPage ? "active" : ""
                    }`}
                    key={page}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                    >
                      {page}
                    </a>
                  </li>
                )
              )}
              {/* 다음 버튼 */}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) handlePageChange(currentPage + 1);
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </PaginationContainer>
      </ContentsDiv>
    </Div>
  );
}

export default SearchPage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 1136px;
  height: 100vh;
`;

const TitleDiv = styled.div`
  color: #000;
  font-family: Arial;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  margin-bottom: 8px;
`;

const SubDiv = styled.div`
  color: #333;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 16px;
  /* justify-content: center; */
  margin-bottom: 32px;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 272px;
  height: 272px;
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 5px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const ImageName = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const PaginationContainer = styled.div`
  margin-top: auto;
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }
  .page-item {
    margin: 0 5px;
  }
  .page-item.disabled .page-link {
    color: #ddd;
    pointer-events: none;
  }
  .page-item.active .page-link {
    background-color: black;
    color: white;
    border-color: #007bff;
  }
  .page-link {
    /* color: #007bff; */
    color: #000;
    text-decoration: none;
    padding: 6px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
  .page-link:hover {
    background-color: #e9ecef;
  }
`;
