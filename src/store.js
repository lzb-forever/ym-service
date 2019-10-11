import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formInline: {}
  },
  mutations: {
    sendUserData(state,formInline){
      state.formInline = formInline
    }
  },
  actions: {

  }
})
