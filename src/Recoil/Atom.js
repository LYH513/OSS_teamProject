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
