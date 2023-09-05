import { atom } from "recoil";

export const popupState = atom({
    key: 'popupState',
    default: {
        isShown: false,
        title: "",
        backdrop: "",
        voteAverage: "",
        overview: ""
    }
})