import React, { useState } from 'react';

const LocationSet = () => {
  // 기본값으로 한동대학교 위치 설정
  const [latitude, setLatitude] = useState(36.1037);
  const [longitude, setLongitude] = useState(129.3883);
  const [error, setError] = useState(null);

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude); // 위도 설정
          setLongitude(position.coords.longitude); // 경도 설정
          setError(null); // 이전 에러 상태 초기화
        },
        (err) => {
          setError(err.message); // 에러 처리
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <h1>현재 위치 정보</h1>
      <button onClick={fetchLocation}>현재 위치 가져오기</button>
      {latitude && longitude && (
        <div>
          <p>위도: {latitude}</p>
          <p>경도: {longitude}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LocationSet;
