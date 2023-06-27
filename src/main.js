import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import i18n from './messages'
import is_have from './utils/haveToken'


Vue.config.productionTip = false



axios.defaults.baseURL = 'https://tpl.sanly.pro/api'
axios.defaults.headers['Accept-Language'] = localStorage.getItem('lang') 
if (is_have()){
  const token = 'Token ' + localStorage.getItem('token')
  axios.defaults.headers['Authorization'] = token
  
}




new Vue({
  router,
  store,
  vuetify,
  axios,
  i18n,
  render: h => h(App)
}).$mount('#app')
