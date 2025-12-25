<template>
  <div>
    <h1>要添加人</h1>
    <h3 style="color:red">count组件求和为:{{ sum }}</h3>
    <h3>列表中第一个人的名字是{{ firstPersonName }}</h3>
    <input type="text" v-model="name"> <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonSever">添加一个随机人</button>

    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
  

</template>

<script>
import { nanoid } from 'nanoid';

export default {
  name:'person',
  data(){
    return{
      name:''
    }
  },
  computed:{
    personList(){
      return this.$store.state.personAbout.personList
    },
    sum(){
      return this.$store.state.countAbout.sum
    },
    firstPersonName(){
      //读取对象里边的一个属性可以使用['']方括号加字符串
      return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods:{
    add(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('personAbout/ADD_PERSION',personObj)
      this.name = ''
    },
    addWang(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.dispatch('personAbout/addpersonWang',personObj)
      this.name = ''
    },
    addPersonSever(){
      this.$store.dispatch('personAbout/addPersonSever')

    }
  }


}
</script>

<style>

</style>