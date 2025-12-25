//引入Vue
import Vue from 'vue'
//引入App
import App from './App'
//引入vue-router插件
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import  './views/index.css'
////应用插件
Vue.use(VueRouter)
//关闭Vue的生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
