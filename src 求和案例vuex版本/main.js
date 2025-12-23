// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // 引入 Element UI 核心库
import 'element-ui/lib/theme-chalk/index.css' // 引入样式文件
import  './views/index.css'
// import vueResource from 'vue-resource' //引入vueResouce  这样所有vc实例身上都有了$https 
//引入store
import store from './store/index'//引入store
Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})
