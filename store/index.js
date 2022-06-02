import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userInfo: {
        name: '郭东嘻嘻嘻',
        age: 18
      }
    },
    mutations: {},
    actions: {}
})
export default store