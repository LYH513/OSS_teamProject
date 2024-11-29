import React from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap({selectkakaoData}) {
  return (
    <>
{     selectkakaoData&& 
      <Map
        center={{ lat: selectkakaoData.y, lng: selectkakaoData.x }}
        style={{ width: '100%', height: '100%' }}
        level={3}
      >
        {/* 마커 추가 */}
        <MapMarker position={{ lat:selectkakaoData.y, lng: selectkakaoData.x  }}>
          </MapMarker>
      </Map> }
    </> 
  );
}

export default KakaoMap;