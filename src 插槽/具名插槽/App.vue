<template>
<div class="content">
  <category  title="美食">
    <img  slot="center"  src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    <a  slot="footer" href="http://www.atguigu.com">哈哈哈哈</a>
  </category>
  <category title="游戏">
    <ul slot="center" >
        <li v-for="(g,index) in games" :key="index">
          {{ g }}
        </li>
    </ul>
    <div class="foot" slot="footer">
      <a  href="http://www.atguigu.com">游戏大网</a>
      <a  href="http://www.atguigu.com" >游戏垫付</a>
    </div>
  </category>
  <category title="电影">
    <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
    <template v-slot:footer>
      <a  href="http://www.atguigu.com">游戏大网</a>
      <a  href="http://www.atguigu.com">游戏大网</a>
      <a  href="http://www.atguigu.com">游戏大网</a>
      <h3>欢迎来玩游戏</h3>
    </template>
  
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
 .content {
    width: 900px;
    display: flex;
    justify-content: space-around;
  }
.content img{
  width: 100px;
  height: 80px;
}
</style>
