import { atom } from "recoil";

//recoil Atom 관리 파일

//사용예시
export const selectedStudentState = atom({
  key: "selectedStudentState",
  default: [],
});