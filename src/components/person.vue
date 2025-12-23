<template>
  <div>
    <h1>要添加人</h1>
    <h3 style="color:red">count组件求和为:{{ sum }}</h3>
    <input type="text" v-model="name"> <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
  

</template>

<script>
import { nanoid } from 'nanoid';

  export {nanoid} from 'nanoid'
export default {
  name:'person',
  data(){
    return{
      name:''
    }
  },
  computed:{
    personList(){
      return this.$store.state.personList
    },
    sum(){
      return this.$store.state.sum

    }
  },
  methods:{
    add(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('ADD_PERSION',personObj)
      this.name = ''
    }
  }


}
</script>

<style>

</style>