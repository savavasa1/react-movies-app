import { makeAutoObservable } from "mobx";

class PopupStore {
  title = "";
  backdrop = "";
  voteAverage = "";
  overview = "";
  isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPopupOpen(title, backdrop, voteAverage, overview) {
    this.title = title;
    this.backdrop = backdrop;
    this.voteAverage = voteAverage;
    this.overview = overview;
    this.isOpen = true;
  }

  setPopupClose() {
    this.isOpen = false;
  }
}

export default new PopupStore();
