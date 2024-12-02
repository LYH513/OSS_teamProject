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

export const selectReview = atom({
  key:"selectReview",
  default: {
    postId: "",
    rating: 0,
    group: "",
    visitDate: "",
    menu: "",
    review: "",
    title: "",
    companion: "",
    x: "",
    y: "",
    id: "",
    userId: ""
  },

  effects: [
    ({setSelf, onSet}) => {
        const saveSessionData =sessionStorage.getItem("selectReviewSession");
        if(saveSessionData){
            setSelf(JSON.parse(saveSessionData));
        }

        onSet((newValue, _, isReset) =>{
            isReset
            ? sessionStorage.removeItem("selectReviewSession")
            : sessionStorage.setItem("selectReviewSession", JSON.stringify(newValue));
        })
    }
]
});

export const item = atom({
  key : 'item',
  default: "",
  
  effects: [
      ({setSelf, onSet}) => {
          const saveSessionData =sessionStorage.getItem("selectPostSession");
          if(saveSessionData){
              setSelf(JSON.parse(saveSessionData));
          }

          onSet((newValue, _, isReset) =>{
              isReset
              ? sessionStorage.removeItem("selectPostSession")
              : sessionStorage.setItem("selectPostSession", JSON.stringify(newValue));
          })
      }
  ]
});