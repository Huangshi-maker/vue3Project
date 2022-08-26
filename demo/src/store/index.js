import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {
      username: '',
      password: '',
      name: '',

    }
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

