import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { searchData, searchKeyword } from "../../Recoil/Atom";
import KakaoSearch from "./KakaoSearch";
import LinkPreview from "./LinkPreview";

function SearchPage() {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);
  const [kakoData, setKakaoData] = useRecoilState(searchData);
  
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 15; // 한 페이지에 보여줄 아이템 개수
  const [totalPageCount, setTotalPageCount] = useState(1);
  const totalPages = Math.min(Math.ceil(totalPageCount / itemsPerPage), 3) // 총 페이지 수

  // const [placeUrls, setPlaceUrls] = useState([]); // place_url 배열 저장

  const testimg =
  "//t1.kakaocdn.net/thumb/T800x0.q50/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F368D31A4F0094C43BDD961FD30762120";

  useEffect(()=>{
    console.log("확인",keyword )
    const fetchData = async () => {
      if (keyword) { // keyword가 있을 경우에만 API 호출
        try {
          const data = await KakaoSearch(keyword, currentPage); 
          console.log("데이터 오는지 확인", data.documents)
          setKakaoData(data.documents); // 검색된 데이터를 Recoil 상태에 저장
          setTotalPageCount( data.meta.total_count)

        } catch (error) {
          console.error("검색 에러:", error); // 에러 처리
        }
      }
    };

    fetchData();
  },[keyword, currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Div>
      <ContentsDiv>
        <TitleDiv>흑과 백, 대조의 미학</TitleDiv>
        <SubDiv>2024년, 흑과 백의 세계에서 미식의 정점을 경험하세요.</SubDiv>
        <RowDiv>
          {kakoData && kakoData.map((item, index) => (
            <div key={item.id}>
              <ImageContainer>
              {item ? (
                    <LinkPreview
                      url={item.place_url}
                    />
                  ) : (
                    <StyledImage src={testimg} alt="이미지 설명" />
                  )}
              </ImageContainer>
              <ImageName>{item.place_name.length > 10 ? `${item.place_name.slice(0, 10)}...` : item.place_name}</ImageName>

            </div>
          ))}
        </RowDiv>
        
        {kakoData.length>0 &&
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
        </PaginationContainer>}
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

const TitleDiv = styled.span`
  color: #000;
  font-family: Arial;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  margin-bottom: 8px;
  margin-left: 110px;
`;

const SubDiv = styled.span`
  color: #333;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
  margin-left: 110px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 50px;
  /* justify-content: center; */
  margin-bottom: 32px;
  width: 100%;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 272px;
  /* height: 272px; */
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 5px;
  cursor: pointer;
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
    background-color: black;
  }
`;
