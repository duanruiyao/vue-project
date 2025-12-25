import axios from "axios"
import { nanoid } from "nanoid"

//人员管理相关配置 const personOptions = 
export default {
  namespaced:true,
  actions:{
    addpersonWang(context,value){
      if(name.value.indexOf('王')===0){
        context.commit('ADD_PERSION',value)
      }else{
        alert('添加的人人必须姓王')
      }
    },
    addPersonSever(context){
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response=>{
          context.commit('ADD_PERSION',{id:nanoid(),name:response.data})
        },
        error =>{
          alert(error.message)
        }
      )
    }
  },
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
    firstPersonName(state){
      return state.personList[0].name
    }
  }
}