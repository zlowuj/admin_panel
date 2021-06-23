import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userList: [],
    ifRegister: false,
  },
  mutations: {
    userList(state, data) {
      state.userList = data;
    },
    changeRegister(state) {
      if(state.ifRegister) {
        state.ifRegister = false;
      } else {
        state.ifRegister = true;
      }
      
      console.log(state.ifRegister)
    },
  },

  getters: {
    userList: (state) => {
      return state.userList;
    }, 
    ifRegister: (state) => {
      return state.ifRegister;
    },
  },
  actions: {
    updateName({ commit }) {
      commit("updateName", "Guest");
    },
  },
});
