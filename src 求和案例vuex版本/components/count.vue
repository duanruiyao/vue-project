<template>
  <div class="cont">
    <h1>当前求和为{{ $store.state.sum }}</h1>
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
      
    }
  },
  methods:{
    increment(n){
      // this.$store.dispatch('jia',this.n)
      this.$store.commit('JIA',this.n)
      
    },
    deincrement(n){
      // this.$store.dispatch('jian',this.n)
      this.$store.commit('JIAN',this.n)
      
    },
    incrementOdd(n){
      // if(this.$store.state.sum %2){
      //   this.$store.dispatch('jia',this.n)
      // }
      this.$store.dispatch('jiaOdd',this.n)
    },
    incrementWait(){
      // setTimeout(()=>{
      //   this.$store.dispatch('jia',this.n)
      // },500)
      this.$store.dispatch('jiaWait',this.n)
    }
  }
}
</script>

<style>

</style>