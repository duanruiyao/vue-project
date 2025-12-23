<template>
  <div id="app">
    <div class="todo-main">
      <!-- 在父组件app给子组件school绑定atgugu事件 回调getSchoolName写在app这 -->
      <school @atgugu="getSchoolName"/>
      <student :msg="cityName"/>
    </div>
  </div>

</template>

<script>
import school from './components/school'

import student from './components/student'


export default {
  name: 'App',
  components:{school,student},
  data(){
    return{
      xuexiaoming:'',
      cityName:'北京'
    }
  },
  methods:{
    getSchoolName(name){
      console.log('我得到了学校名',name)
      this.xuexiaoming = name
      console.log('xuexiaoming',this.xuexiaoming)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn{
  display: inline-block;
  padding:4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px rgba(255,255 ,255);
  border-radius: 4px;
}
.btn-danger{
  color: #fff;
  background-color:red;
  border:1px solid #bd362f;
}
.btn-edit{
  color: #fff;
  background-color:skyblue;
  border:1px solid #555;
}
.btn-danger:hover{
  color: #fff;
  background-color:red;
  
}
.btn:focus{
  outline: none;
}
.todo-main{
  width: 600px;
  margin: 0 auto;
  border: 1px solid #555;
  padding: 20px ;
}

</style>