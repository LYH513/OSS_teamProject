import {atom} from 'recoil';

export const myInfo = atom({
    key : 'myInfo',
    default: "",
    
    effects: [
        ({setSelf, onSet}) => {
            const saveSessionData =sessionStorage.getItem("sessionData");
            if(saveSessionData){
                setSelf(JSON.parse(saveSessionData));
            }

            onSet((newValue, _, isReset) =>{
                isReset
                ? sessionStorage.removeItem("sessionData")
                : sessionStorage.setItem("sessionData", JSON.stringify(newValue));
            })
        }
    ]
});