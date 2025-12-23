<template>
<div class="content">
  <category  title="美食">
    <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
  </category>
  <category title="游戏">
    <ul>
        <li v-for=" g in games" :key="index">
          {{ g }}
        </li>
    </ul>
  </category>
  <category title="电影">
    <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
  
  </category>
</div>    
</template>
<script>
import category from './components/category.vue'

export default{
  name:"App",
  components:{category},
  data(){
    return{
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  }
}
</script>

<style>
 .content{
    /* width: 30.3%; */
    display: flex;
    justify-content: space-around;
  }

</style>
