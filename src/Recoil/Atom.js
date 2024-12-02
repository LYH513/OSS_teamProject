import { atom } from 'recoil';

//recoil Atom 관리 파일

export const searchKeyword = atom({
  key: 'searchKeyword',
  default: '',
});

export const searchData = atom({
  key: 'searchData',
  default: [],
});

export const selectRestaurant = atom({
  key: 'selectRestaurant',
  default: {
    address_name: '',
    category_group_code: '',
    category_group_name: '',
    category_name: '',
    distance: '',
    id: '',
    phone: '',
    place_name: '',
    place_url: '',
    road_address_name: '',
    x: '',
    y: '',
  },
});
