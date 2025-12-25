<template>
  <div id="app">
    <div class="todo-main">
      <MyHeader :addTodo="addTodo" />
      <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
      <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'
import { Header } from 'element-ui';
import { diff } from 'semver';

export default {
  name: 'App',
  components:{MyHeader,MyList,MyFooter},
   data(){
        return{
          //由于todos是Header组件和List组件都在用所以放在app中(状态提升)
          // [
          //   {id:'001',title:'抽烟',done:true},
          //   {id:'002',title:'喝酒',done:true},
          //   {id:'003',title:'烫头',done:false},

          //   ]  
          // 使用浏览器的localStorage实现数据持久化，避免页面刷新导致数据丢失
            todos:JSON.parse(localStorage.getItem('todos'))||[]       
        }
    },
    methods:{
      //添加一个todo
      addTodo(todoObj){
        this.todos.unshift(todoObj)
        console.log('我是app组件我接收到了数据',todoObj)
      },
      //勾选或者取消勾选
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.done = !todo.done
        })
      },
      //删除一个todo
      deleteTodo(id){
        this.todos = this.todos.filter((todo)=>{
          return todo.id !== id
        })
      },
      //全选todo
      checkAllTodo(done){
        this.todos.forEach((todo)=>{
          return todo.done = done
        })
      },
      //清除选中的todo
      clearAllTodo(todo){
      this.todos=  this.todos.filter((todo)=>{
          return !todo.done
        })
      }
    },
    watch:{
      todos:{
        handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
        },
        
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
