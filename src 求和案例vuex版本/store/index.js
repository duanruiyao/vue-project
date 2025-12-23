//该文件用于创建Vuexs中最为核心的store
import Vue from 'vue'

import Vuex from "vuex" //引入Vuex
//应于vue插件
Vue.use(Vuex)
//准备actions 用于响应组件中的动作
const actions = {
  //此处没有逻辑处理无需再actions里边调用commit 可直接再count.vue里边commit
  // jia(context,value){
  //   console.log('actions中的jia被调用了',context,value)
  //   context.commit('JIA',value)
  // },
  // jian(context,value){
  //   // console.log('actions中的jian被调用了',context,value)
  //   context.commit('JIAN',value)
  // },
  jiaOdd(context,value){
    if(context.state.sum %2 ){
      context.commit('JIA',value)
    }
  },
  jiaWait(context,value){
    setTimeout(()=>{
      context.commit('JIA',value)
    },500)

  }
}
//准备mutations 用于操作数据
const mutations = {
  JIA(state,value){
    // console.log('mutations中的JIA被调用了',state,value)
    state.sum += value
  },
  JIAN(state,value){
    // console.log('mutations中的JIAN被调用了',state,value)
    state.sum -= value
  }

}
//准备state  用于存储数据
const state = {
  sum:0,//求和
}
//创建store并导出store 
export default new Vuex.Store({
  actions,
  mutations,
  state,
})

