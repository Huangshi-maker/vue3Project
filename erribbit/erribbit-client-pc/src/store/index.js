import { createStore } from 'vuex'

// A模块
const moduleA = {
  state:{
    username: 'moduleA'
  },
  getters:{
    newName(state){
      return state.username + '!!!!'
    }
  },
  mutations :{
    updateName (state){
      state.username = 'moduleAAAAA'
    }
  },
  actions:{
    updateName(ctx){
      setTimeout(()=>{
        ctx.commit('updateName')
      },1000)
    }
  }

}


// B模块
const moduleB = {
  namespaced:true,
  state:{
  username: 'moduleB'
},
getters:{
  newName(state){
    return state.username + '!!!!'
  }
},

}


export default createStore({
  modules:{
    moduleA,
    moduleB
  }
})




// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建 createStore（{})

// export default createStore({
//   state: {
//     username: 'zs'
//   },
//   getters: {
//     newname (state) {
//       return state.username + '!!!'
//     }
//   },
//   mutations: {
//     updateName (state) {
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     updateName (ctx) {
//         setTimeout(()=>{
//           ctx.commit('updateName')
//         },1000)
//     }
//   },
//   modules: {
//   }
// })