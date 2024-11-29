import React from 'react';
import { useQuery } from '@tanstack/react-query';

const LinkPreview = ({ url }) => {
  const fallbackImage = 'https://via.placeholder.com/150';

  // Kakao Place API에서 백그라운드 이미지 URL 가져오기
  const fetchBackgroundImage = async (placeUrl) => {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(placeUrl)}`
    );
    const data = await response.json();

    // HTML 내용을 추출하여 배경 이미지 링크 파싱
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');

    // 이미지 URL 추출 (예: `//t1.kakaocdn.net/...`)
    const bgImageUrl = doc.querySelector('meta[property="og:image"]')?.content;

    // URL이 유효한 경우 `https:` 추가
    if (bgImageUrl && !bgImageUrl.startsWith('http')) {
      return `https:${bgImageUrl}`;
    }
    return bgImageUrl || fallbackImage;
  };

  const {
    data: backgroundImage,
    isSuccess,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: [`background-image-${url}`],
    queryFn: () => fetchBackgroundImage(url),
    enabled: !!url, // URL이 제공된 경우에만 실행
  });

  return (
    <div>
      {isFetching && <p>Loading preview...</p>}
      {isError && (        <img
          src={fallbackImage}
          alt="Background Preview"
          style={{ width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px" }}
        />)}
      {isSuccess && (
        <img
          src={backgroundImage}
          alt="Background Preview"
          style={{ width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px" }}
        />
      )}
    </div>
  );
};

export default LinkPreview;
