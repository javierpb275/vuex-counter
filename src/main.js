import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)//we are rendering the component App
}).$mount('#app')//the element is the one that has id="app"
