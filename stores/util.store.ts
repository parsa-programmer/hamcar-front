import { defineStore } from "pinia";

const defaultState = () => ({
  showBlackBackGround: false,
});

export const UseUtilStore = defineStore("util", {
  state: defaultState,
  actions: {
    ChangeShowBlackBackGround(val: boolean) {
      this.showBlackBackGround = val;
    },
  },
  getters: {
    isMobile() {
      var width = window.innerWidth;
      return width < 768;
    },
  },
});
