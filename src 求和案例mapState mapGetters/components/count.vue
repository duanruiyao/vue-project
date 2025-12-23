<template>
  <div class="cont">
    <!-- <h1>当前求和为{{he}}</h1>
    <h3>当前求和的10倍为{{bigSum }}</h3>
    <h3>我在{{xuexiao}}学习,学习的是{{ xueke }}</h3> -->
    <h1>当前求和为{{sum}}</h1>
    <h3>当前求和的10倍为{{bigSum }}</h3>
    <h3>我在{{school}}学习,学习的是{{ subject }}</h3>

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
import { mapState ,mapGetters} from 'vuex';
export default {
  name:'count',
  data(){
    return{
      n:1,//用户选择的数字
      
    }
  },
  //靠程序员亲自去写的计算属性
  computed:{
    // he(){
    //   return this.$store.state.sum
    // },
    // xuexiao(){
    //   return this.$store.state.school
    // },
    // xueke(){
    //   return this.$store.state.subject
    // },
    //mapState本身就是一个对象 computed属性也是一个对象 写在computed里边需要用...展开运算符
    //借助mapState生成的计算属性,从state中读取数据。(对象写法)
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

    //借助mapState生成的计算属性,从state中读取数据。(数组写法)
    ...mapState(['sum','school','subject']),
    //借助mapGetters生成的计算属性,从getters中读取数据。(对象写法)
    // ...mapGetters({bigSum:'bigSum'})

    //借助mapGetters生成的计算属性,从getters中读取数据。(数组写法)
    ...mapGetters(['bigSum'])

    // bigSum(){
    //   return this.$store.getters.bigSum
    // },

  },
  methods:{
    increment(n){
      this.$store.commit('JIA',this.n)
    },
    deincrement(n){
      this.$store.commit('JIAN',this.n)
    },
    incrementOdd(n){
      this.$store.dispatch('jiaOdd',this.n)
    },
    incrementWait(){
      this.$store.dispatch('jiaWait',this.n)
    }
  },
  mounted(){
    // const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
  }
}
</script>

<style>

</style>