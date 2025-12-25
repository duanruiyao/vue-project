//求和管理相关配置
// const countOptions = 
export default{
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