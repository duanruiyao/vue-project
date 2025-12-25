<template>
<div>
  <!-- <div>消息编号是：{{ $route.params.id }}</div>
  <div>消息标题是：{{ $route.params.title }}</div> -->
  <div>消息编号是：{{ id }}</div>
  <div>消息标题是：{{ title }}</div>
</div>
</template>

<script>
export default {
  name:'Detail',
  //此处用props接收了params参数
  props:['id','title'],
  computed:{
    // id(){
    //   return this.$route.query.id
    // },
    // title(){
    //   return this.$route.title.id
    // }
  }

}
</script>

<style>

</style>