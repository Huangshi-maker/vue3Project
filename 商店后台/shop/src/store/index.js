import { createStore } from 'vuex'

import number from "./state/numstate"
import uInfo from "./state/userinfostate"



export default createStore({
  //数据比较多，分模板
  modules: {
    number,
    uInfo

  }
})
