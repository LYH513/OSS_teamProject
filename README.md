# 나만의 흑백 요리사

## 소개
### 2024년 2학기 OSS 수업으로 진행된 프로젝트입니다.
### 나만의 흑백 요리사는 방문한 레스토랑 정보를 저장하고 리뷰를 남길 수 있는 서비스 입니다.

---

## 팀원
### 한동대학교 전산전자공학부 21학번 이유현
### 한동대학교 전산전자공학부 21학번 김지원

---

## 라이브러리

```javascript

+ npm install react-router-dom
+ npm install styled-components
+ npm install axios
+ npm install recoil
+ npm install react-quill
+ npm install react-slick --save
+ npm install slick-carousel --save
+ npm install react-draggable
+ npm install react-kakao-maps-sdk
+ npm install @tanstack/react-query

```

---

## OpenAPI
+ 카카오 로컬
+ 카카오맵

---

## stack

+ HTML
+ CSS
+ JS
+ REACT

--- 

## DB

+ MockAPI

---

## 배포 주소(넷틀리파이)

+ https://bwrestaurant.netlify.app/

---

## 페이지 설명

### Home
+ 서비스에 대한 설명이 담긴 페이지입니다.
<img width="1792" alt="Home" src="https://github.com/user-attachments/assets/19d4ec2a-e51b-4d5c-a2d2-89a52c037b40">

--- 

### Login
+ 로그인 버튼을 누를 시 로그인 모달창이 뜹니다.
<img width="1792" alt="login" src="https://github.com/user-attachments/assets/42393fde-5f42-4951-b33f-dbb94feac1ca">

--- 

### Register
+ 로그인 입력이 실패할 시 회원가입으로 바로 변경됩니다.
+ 회원가입이 완료될 시 로그인이 성공됩니다.
<img width="1792" alt="register" src="https://github.com/user-attachments/assets/d83d03f4-f17b-467a-8828-713c05512cb1">

--- 

### login-home
+ 로그인이 성공한 페이지입니다.
<img width="1792" alt="login-after" src="https://github.com/user-attachments/assets/fc46e5cd-b0df-436d-9273-0bca6e152296">

---

### Search
+ 포항으로 검색했을 때 뜨는 화면입니다.
+ 카카오 로컬 API를 사용하여 검색한 키워드에 대한 음식점 데이터를 불러옵니다.
+ 미리보기 이미지의 경우 불러온 식당점 데이터에 있는 카카오맵 링크에서 제공하는 로컬 이미지를 가져와 이미지 프리뷰로 사용하였습니다.
<img width="1792" alt="search 포항" src="https://github.com/user-attachments/assets/ba5b213a-a4e1-479c-8053-e193bb341c77">

---

### detail
+ 환여횟집을 클릭할 시 보여지는 상세 정보 페이지입니다.
+ 카카오 로컬 데이터에서 받은 위도, 경도 정보를 통해 해당 음식점의 위치를 카카오맵을 사용하여 마커로 표시합니다.
<img width="1792" alt="detail" src="https://github.com/user-attachments/assets/94de08d2-fd6b-4d4d-8c72-c0099fe8e7b1">

---

### review-write
+ 환여횟집에 대한 리뷰 작성 페이지입니다
<img width="1792" alt="review write" src="https://github.com/user-attachments/assets/f7b012a8-34ef-49a3-a9b3-fc2dcfa11f74">

---

### detail
+ 리뷰를 작성한 후 디테일 페이지입니다.
<img width="1792" alt="after review" src="https://github.com/user-attachments/assets/76939679-1a10-4ff4-a91d-fce8188b3a56">

---

### review detail
+ 작성한 리뷰 상세 페이지 입니다.
<img width="1792" alt="review detail" src="https://github.com/user-attachments/assets/dfb4e735-f3e1-40cb-ab0e-15eb13cbfc8a">

---

### mypage
+ 내가 작성한 리뷰를 확인할 수 있는 마이페이지입니다.
+ 리뷰를 작성할 때 선택한 흑/백에 따라 리뷰 필터링이 가능합니다.
+ 수정, 삭제가 가능합니다.
<img width="1792" alt="mypage" src="https://github.com/user-attachments/assets/f43ccc15-9e1a-4969-8f05-ecb2eab07eaf">
