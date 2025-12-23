<template>
  <div class="cont">
    <h3>{{ title }}分类</h3>
      <!-- 相当于在组件中挖一个坑，等待组件的使用者进行填充 -->
      <!-- 核心功能: 决定组件标签体内内容的具体放置位置，如果不指定位置则不会显示。 -->
      <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
      <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>

  </div>
</template>

<script>
export default {
  name:'category',
  props:['listData','title'],

}
</script>

<style>
.cont{
  /* width: 300px; */
  background: rgb(185, 214, 241);
}
h3{
  background: orange;
  text-align: center;
}
video{
  width:100%
}
</style>