import Vue from 'vue'
//vuex is a stated management pattern + library (like redux)
import Vuex from 'vuex'

//Vuex is a plugin so we have to use this syntax:
Vue.use(Vuex)

//In order to create the instance of Vuex:
//Inside Store we can do whatever we want
export default new Vuex.Store({
  //state is the data of our app
  state: {
    counter: 0,
    appName: 'COUNTER'
  },
  //mutations are used to alter the state
  mutations: {
    increment(state, qty) {
      state.counter += qty;
    },
    decrement(state, qty) {
      state.counter -= qty;
    }
  },
  //actions are used to make asynchronous queries to servers
  actions: {
  },
  modules: {
  }
})
