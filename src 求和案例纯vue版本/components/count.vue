<template>
  <div class="cont">
    <h1>当前求和为{{ sum }}</h1>
    <select v-model.number="n">
      <!-- 此处：value =1 加：为js表达式 后边就为数字1 2 3   <option :value="1">1</option> -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="deincrement">-</button>
    <button @click="incrementOdd">当前求和为奇数时再加</button>
    <button @click="incrementWait">等一等在加</button>
  </div>
</template>

<script>
export default {
  name:'count',
  data(){
    return{
      n:1,//用户选择的数字
      sum:0,//求和
    }
  },
  methods:{
    increment(){
      this.sum += this.n
    },
    deincrement(){
      this.sum -= this.n
    },
    incrementOdd(){
      if(this.sum %2){
        this.sum+= this.n
      }
    },
    incrementWait(){
      setTimeout(()=>{
        this.sum += this.n
      },500)
    }
  }
}
</script>

<style>

</style>