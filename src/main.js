import Vue from 'vue'
import App from './App'
import router from 'routes'

new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
