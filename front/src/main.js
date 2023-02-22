import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "@/router/index";
import HighchartsVue from "highcharts-vue";

import "./style.css";

const store = createStore({
  state() {
    return {
      sectionList: [],
      index: 0,
    };
  },
  mutations: {
    setSectionList(state, data) {
      state.sectionList = data;
    },
    setIndex(state, sequence) {
      state.index = sequence - 1;
    },
  },
  getters: {
    getSection(state) {
      return state.sectionList[state.index];
    },
    getTitle(_, getters) {
      return getters.getSection.title;
    },
    getTotalAsset(_, getters) {
      return getters.getSection.totalRating.totalAsset;
    },
    getTotalEvaluationRate(_, getters) {
      return getters.getSection.totalRating.totalEvaluationRate;
    },
    getTotalEvaluationAmount(_, getters) {
      return getters.getSection.totalRating.totalEvaluationAmount;
    },
    getHoldingList(_, getters) {
      return getters.getSection.holdingList;
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(HighchartsVue);
app.use(store);
app.mount("#app");

// app.config.globalProperties.connection = new WebSocket("ws://localhost:8081/");
