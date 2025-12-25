//该文件用于创建Vuexs中最为核心的store
import Vue from 'vue'

import Vuex from "vuex" //引入Vuex
import countOptions from './count'
import personOptions from './person'
//应于vue插件
Vue.use(Vuex)




//创建store并导出store 
export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})

