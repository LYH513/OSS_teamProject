import { atom } from "recoil";

//recoil Atom 관리 파일

export const searchKeyword = atom({
  key: "searchKeyword",
  default: "",
});

export const searchData = atom({
  key: "searchData",
  default: [],
});


export const selectRestaurant = atom({
  key: "selectRestaurant",
  default: 
  {
      address_name: "경북 포항시 북구 두호동 190-9",
      category_group_code: "FD6",
      category_group_name: "음식점",
      category_name: "음식점 > 한식 > 해물,생선 > 회",
      distance: "",
      id: "15935749",
      phone: "054-251-8847",
      place_name: "환여횟집",
      place_url: "http://place.map.kakao.com/15935749",
      road_address_name: "경북 포항시 북구 해안로 189-1",
      x: "129.3840265121755",
      y: "36.06436609867218"
    
  }
});