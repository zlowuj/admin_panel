import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userList: [],
    trainigs: [],
    ifRegister: false,
    ifTrainings: false,
  },
  mutations: {
    userList(state, data) {
      state.userList = data;
    },
    trainigs(state, data) {
      state.trainigs = data;
    },
    changeRegister(state) {
      if(state.ifRegister) {
        state.ifRegister = false;
      } else {
        state.ifRegister = true;
      }
    },
    changeTrainings(state) {
      if(state.ifTrainings) {
        state.ifTrainings = false;
      } else {
        state.ifTrainings = true;
      }
      console.log(state.ifTrainings)
    },
  },

  getters: {
    userList: (state) => {
      return state.userList;
    }, 
    trainigs: (state) => {
      return state.trainigs;
    }, 
    ifRegister: (state) => {
      return state.ifRegister;
    },
    ifTrainings: (state) => {
      return state.ifTrainings;
    },
  },
  actions: {
    updateName({ commit }) {
      commit("updateName", "Guest");
    },
  },
});
