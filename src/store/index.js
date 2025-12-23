//该文件用于创建Vuexs中最为核心的store
import Vue from 'vue'

import Vuex from "vuex" //引入Vuex
//应于vue插件
Vue.use(Vuex)
//求和管理相关配置
const countOptions = {
  namespaced:true,
  actions:{
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
  },
  mutations:{
    JIA(state,value){
    // console.log('mutations中的JIA被调用了',state,value)
    state.sum += value
    },
    JIAN(state,value){
      // console.log('mutations中的JIAN被调用了',state,value)
      state.sum -= value
    },
  },
  state:{
    sum:0,//求和
    school:'谷谷',
    subject:'前端',
  },
  getters:{
    bigSum(state){
    return state.sum*10
    }

  }
}
//人员管理相关配置
const personOptions = {
  namespaced:true,
  actions:{},
  mutations:{
  ADD_PERSION(state,value){
    state.personList.unshift(value)

  }
  },
  state:{
    personList:[
    {id:'001',name:'张丹'}
    ]
  },
  getters:{

  }
}


//创建store并导出store 
export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})

