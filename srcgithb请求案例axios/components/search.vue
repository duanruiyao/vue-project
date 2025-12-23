<template>
  <section>
    <h3 class="jumbotron-heading">Search github User</h3>
    <input type=" text" v-model="keyword"> 
    <button @click="serachUSers">搜索</button>
  </section>
</template>
<script>
import axios from 'axios'
export default {
    name:'search',
    data(){
      return{
        keyword:''
      }
    },
    methods:{
      serachUSers(){//此处为es6的模板字符串 `https://api.github.com/search/users?q=${this.keyword}`
        //请求前更新List数据 也就是点击按钮时
        // this.$bus.$emit('updataList',false,true,'',[]) 这样写无法知道是谁的值 
        //单独写成对象模式List页面 后边好赋值 {isFirst:false,isLoading:false,errMsg:'',users:[]}
        this.$bus.$emit('updataList',{isFirst:false,isLoading:true,errMsg:'',users:[]})
        axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          response =>{
            // console.log('数据请求成功了',response.data)
            // this.$bus.$emit('getUser',response.data.items)
            // this.$bus.$emit('updataList',false,false,'',response.data.items)
            this.$bus.$emit('updataList',{isLoading:false,errMsg:'',users:response.data.items})

            // this.$bus.$emit('updataList',{isFirst:false,isLoading:false,errMsg:'',users:response.data.items})

          },
          error =>{
            //isFirst:false 值不变不用一直写
            // this.$bus.$emit('updataList',{isFirst:false,isLoading:false,errMsg:error.message,users:[]})
            this.$bus.$emit('updataList',{isLoading:false,errMsg:error.message,users:[]})


          }
        )

      }
    }
    
}
</script>
