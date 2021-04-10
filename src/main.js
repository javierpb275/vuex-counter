import Vue from 'vue'
import App from './App.vue'
//We are importing store from index.js
import store from './store'

Vue.config.productionTip = false

//we pass store to the instance of Vue. store = store: store
new Vue({
  store,
  render: h => h(App)//we are rendering the component App
}).$mount('#app')//the element is the one that has id="app"
