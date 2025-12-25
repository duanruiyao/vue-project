// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//引入组件
import index from '../views/index.vue'
//引入About组件
import About from '../pages/About.vue'
//引入Home组件
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'




//创建并暴露一个路由器
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
      name:'guanyu',
      path: '/About',
      component: About
    },
    {
      path: '/Home',
      component: Home,
      children:[
        {
         //子级路由不要加/ 错误写法/news
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
              {
                name:'xiangqing',
              //子级路由不要加/ 错误写法/news
                path:'detail',
                component:Detail
              },
          ]
        }
      ]
    }
  ]
})
