<template>
<div class="contaion">
  <!-- 展示列表用户 -->
  <div v-show="info.users.length" class="content" v-for="user in info.users" :key="info.user.login"> 
    <a href="info.user.html_url" class="jumpto">
      <img :src="info.user.avatar_url" alt="">
    </a>
    <p class="content-text">{{ user.login}}</p>
  </div>
  <!-- 展示欢迎词 -->
  <h3 v-show="info.isFirst">欢迎你来到这个页面</h3>
  <!-- 展示加载中 -->
  <h1 v-show="info.isLoading">加载中</h1>
  <!-- 展示错误信息 -->
  <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>

</div>
</template>
<script>
export default{
  name:'list',
  data(){
    return{
      info:{
        users:[],
        isFirst:true,
        isLoading:false,
        errMsg:'',
      }

    }
  },
  mounted(){
    //dataObj 作为一个对象给所有数据接收
    this.$bus.$on('updataList',(users,dataObj)=>{
      console.log('我是list组件，收到了数据',users)
      // this.users = users
      // this.info = dataObj
      //通过字面量的形式进行对比 info和dataObj 重名的属性以dataObj为准没有的以info为准 这样的话search里边传递数据时isFirst不用一直写
      this.info = {...this.info,...this.dataObj}
      // this.isFirst = false
      // this.isLoading = true

    })
  }
}
</script>
<style>
  .contaion{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap
  }
  .content{
    width: 33.3%;
    height: 200px;
    /* display: flex; */
  }
  .content img{
    width: 80px;
    height:70px;
  }
  .content-text{
    width: 80px;
    height: 20px;
    display: inline-block;
    display: flex;
  }
  .jumpto{
    width: 80px;
    height:70px;
    display: inline-block;
    display: flex;
  }
</style>