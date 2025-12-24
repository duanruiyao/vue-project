// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//引入组件
import index from '../views/index.vue'
//引入About组件
import About from '../components/About.vue'
//引入Home组件
import Home from '../components/Home.vue'



export default new VueRouter({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
      {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Home',
      component: Home
    }
  ]
})
