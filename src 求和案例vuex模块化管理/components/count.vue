<template>
  <div class="cont">
    <!-- <h1>当前求和为{{he}}</h1>
    <h3>当前求和的10倍为{{bigSum }}</h3>
    <h3>我在{{xuexiao}}学习,学习的是{{ xueke }}</h3> -->
    <h1>当前求和为{{sum}}</h1>
    <h3>当前求和的10倍为{{bigSum }}</h3>
    <h3>我在{{school}}学习,学习的是{{ subject }}</h3>
    <h3 style="color:red">person组件的总人数为{{ personList.length }}</h3>

    <select v-model.number="n">
      <!-- 此处：value =1 加：为js表达式 后边就为数字1 2 3   <option :value="1">1</option> -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="deincrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数时再加</button>
    <button @click="incrementWait(n)">等一等在加</button>
  </div>
</template>

<script>
import { mapState ,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  name:'count',
  data(){
    return{
      n:1,//用户选择的数字
      
    }
  },
  //靠程序员亲自去写的计算属性
  computed:{
    //借助mapState生成的计算属性,从state中读取数据。(数组写法)
    ...mapState('countAbout',['sum','school','subject','personList']),
    ...mapState('personAbout',['personList']),


    //借助mapGetters生成的计算属性,从getters中读取数据。(数组写法)
    // ...mapGetters(['bigSum'])
    ...mapGetters('countAbout',['bigSum'])


  },
  methods:{
  
    //借助mapMutations生成的对应方法,方法中会调用commit去联系mutations。(对象写法)
    ...mapMutations('countAbout',{increment:'JIA',deincrement:'JIAN'}),
    
    //借助mapActions生成的对应方法,方法中会调用dispatch去联系actions。(对象写法)
    ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

  },
  mounted(){
    // const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
  }
}
</script>

<style>

</style>