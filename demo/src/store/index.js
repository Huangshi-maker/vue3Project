import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: (localStorage.getItem("loginData")) && JSON.parse(localStorage.getItem("loginData")) || {}
  },

  getters: {
  },
  mutations: {
    setUserinfo(state, uinfo) {
      state.userInfo = uinfo

    }
  },
  actions: {
  },
  modules: {
  },

})

