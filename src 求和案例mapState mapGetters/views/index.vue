<template>
    <div class="hello">
        <div class="home_wrap">
            <div class="headers">
              <div class="header_bar">
                <div class="header_li">
                    欢迎来到这个世界哈哈哈哈哈
                </div>
                <div class="heder_right">
                    <div style="margin-right:50px">
                        <span @click="login()" style="cursor: pointer;">登录</span>
                        <span>/</span>
                        <span @click="register()" style="cursor: pointer;">注册</span>
                    </div>
                     <div class="heder_li_li" style="margin-right:50px">
                        <span style="cursor: pointer;">购物车(0)</span>
                    </div>
                    <div class="heder_li_li">
                        <span style="cursor: pointer;">读者圈</span>
                    </div>
                </div>
              </div>
              <div class="headerLoginSearch">
                <div class="header_logo_search_con">
                    <div class="header_logo">
                        <img src="/static/img/logo2.45ac031.png" alt="" class="header_Logimg">
                        <img src="/static/img/hy.48cf6db.png" alt="" class="heder_logo_logon">
                    </div>
                     <div class="header_Search">
                        <div class="header_Search_box" style="position: relative;">
                             <el-select v-model="value" placeholder="请选择" class="header_search_box_type">
                                <el-option class="header_search_box_type_name"
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <input type="text" placeholder="请输入查询点击/搜索展现" class="header_search_input">
                            <div class="header_btn_box">
                              <img src="/static/img/search.png" alt="">
                              <span>搜索</span>

                            </div>
                        </div>
                        <div class="header_btn_box_text">高级搜索</div>

                    </div>

                </div>
               
              </div>
              <div class="header_nav">
                <div class="header_nav_con">
                  <ul>
                    <li>首页</li>
                    <li>产品介绍</li>
                    <li>内容展示</li>
                    <li>工厂介绍哦</li>
                    <li>数字教材</li>
                    <li>天津文化中心图书管</li>
                    <li>心里资讯平台</li>
                    <li>职业考试</li>
                  </ul>
                </div>

              </div>
            </div>
            <div class="home_banner">
              <div class="banner_box">
                   <swiper :options="swiperOptions">
                    <swiper-slide v-for="(item,index) in slides" :key="index"> 
                      <img :src="item.src" alt="" class="banner_box_img">
                    </swiper-slide>
              
                    <!-- 更多幻灯片 -->
                     
                  </swiper>
                  <div class="swiper-button-prev" ></div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-pagination" slot="pagination"></div>
                  
              </div>

            </div>
            <div class="home_con">
              <div class="home_content">
                <div class="con_text">
                  <div class="special_feature">
                    <div class="special_feature_top">
                      <div class="special_feature_top_left">
                        专题
                      </div>
                      <div class="special_feature_top_right">
                        <div class="special_feature_top_right_txt">查看全部</div>
                        <img src="../../static/img/right.png" alt="">
                      </div>

                    </div>
                    <div class="spccial_con">
                      <div class="special_feature_btn_left" @click="switchGroup(-1)">
                        <img src="../../static/img/left.png" alt="" >
                      </div>
                      <div class="special_feature_center" >
                          <div class="special_feature_center_li" v-for="(item, index) in currentDataList" :key="index"  v-if="item.title && item.imageUrl && item.resourceCount">
                            <div class="book-img">
                              <img :src="item.imageUrl" alt="book-cover">
                            </div>
                            <div class="book-title">{{ item.title }}</div>
                            <div class="book-resource">{{ item.resourceCount }}个资源</div>
                          </div>
                      </div>
                      <div class="special_feature_btn_left"   @click="switchGroup(1)">
                        <img src="../../static/img/rightbtn.png" alt="" >
                      </div>
                    </div>
                  </div>
                  <div class="hot_area">
                    <div class="hot_area_top">
                      <div class="hot_area_top_li" v-for="(item,index) in tabList" :key="index" :class="{active:currentTab === index}" @click="switchTab(index)">
                        {{ item.title }}
                      </div>
                    </div>
                    <div class="hot_area_con">
                      <div class="hot_area_news">
                        <li class="hot_area_li" v-for="(item,index) in currentTabContent"  :key="index">
                          <!-- <h3 style="display: inline-block">.</h3> -->
                       <span class="hot_area_li_span">.</span>{{ item.text }}
                         </li>
                      </div>
                      <div class="hot_area_btn">查看全部</div>

                    </div>
                      

                  </div>
                </div>
                <div class="book_con"> 
                <div class="book_area">
                  <div class="book_area_top">
                    <div class="book_area_left">
                      <div class="book_area_left_title">图书</div>
                      <div class="book_area_top_tab">
                        <div class="boook_area_top_tab_li">纸书</div>
                        <div class="book_area_top_tab_li" style="margin-right: 14px;">|  </div>
                        <div class="book_area_top_tab_li">电子书 </div>
                      </div>
                    </div>
                    <div class="book_area_right">
                      <div class="book_area_right_text">查看全部</div>
                      <img src="../../static/img/right.png" alt="">

                    </div>
                  </div>
                  <div class="book_area_con">
                    <div class="book_area_con_li"  v-for="(item,index) in bookList" :key="index">
                      <div class="book_area_con_li_img">
                        <img :src="item.imageUrl" alt="">
                      </div>
                      <div class="book_area_con_li_title">{{ item.title }}</div>
                      <div class="book_area_con_li_author">{{ item.author }}</div>
                      <div class="book_area_con_li_price">{{ item.price }}</div>

                    </div>


                  </div>

                </div>
                <div class="ranking_list">
                  <div class="ranking_list_top">排行榜</div>
                  <div class="ranking_list_top_tab">
                    <div class="ranking_list_top_tab_li" v-for="(item,index) in rankingList" :key="index"  :class="{ active: activeTab === index }"  @click="handleTabClick(index)">
                      {{ item }}
                    </div>
                  </div>
                  <div class="rankingList_con">
                     <li v-for="item in currentRankList" 
                      :key="item.id"
                      class="rank-item"
                      @mouseenter="hoverItemId = item.id"
                      @mouseleave="hoverItemId = item.id">
                      <div class="rankingList_tag"
                      :class="item.id===1 ? 'rankingList_bg1' :
                            item.id===2? 'rankingList_bg2':
                            item.id===3? 'rankingList_bg3':''">
                      {{ item.id}}.</div>
                    <!-- 只有当前hover的项显示图片 -->
                      <div v-if="hoverItemId === item.id" class="item-img">
                        <img :src="item.img" alt="商品图">
                      </div>
                      <div class="item-info">
                        <div class="item-name" :class="hoverItemId === item.id? 'item_title' : 'item-name'">{{ item.name }}</div>
                        <div class="item-price" :class="hoverItemId === item.id? 'item_price' : 'item-price'">¥{{ item.price }}</div>
                      </div>
                    </li>
                  </div>
                </div>
                </div>


              </div>
            </div>

        </div>
    </div>
    
  
</template>

<script>
import { loginIn  } from './index.js';
import { swiper, swiperSlide  } from "vue-awesome-swiper";
import '../../node_modules/swiper/css/swiper.css'
import '../../node_modules/swiper/css/swiper.min.css'

export default {
   components: {
    swiper,     // 组件名是小写
    swiperSlide // 组件名是小写
  },
    name:"IndexPage",
    data(){
        return{
             options: [{
          value: '选项1',
          label: '黄金'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        swiperOptions:{
          loop: true,
            autoplay: {
            delay: 3000, // 自动切换时间间隔
            disableOnInteraction: true // 用户操作后是否继续自动切换
          },
            navigation: {
              nextEl: '.swiper-button-next', // 下一个按钮的选择器
              prevEl: '.swiper-button-prev'  // 上一个按钮的选择器
            },

          pagination: {
          el: '.swiper-pagination'  // 指定分页器容器
          },

        },
        slides:[
          {
            id:1,
            src:'../../static/img/rBUQDGiAQ2WAaae6AAFYYn0ObkQ281.png' 
          },
          {
            id:2,
            src:'../../static/img/rBUQDGitHmaAO8KCAACmwVGHO0Y946.png'
          },

        ],
        allData:[
          {
            "imageUrl": "../../static/img/li1.png",
            "title": "一级建造师一次通关hhhhhhhh",
            "resourceCount": 6
          },
          {
            "imageUrl": "../../static/img/li2.png",
            "title": "建筑施工手册（第六版）",
            "resourceCount": 6
          },
          {
            "imageUrl": "../../static/img/li3.jpg",
            "title": "北京中轴线专题书单",
            "resourceCount": 14
          },
          {
            "imageUrl": "../../static/img/li4.png",
            "title": "2025年版注册城乡规划师",
            "resourceCount": 5
          },
          {
            "imageUrl": "../../static/img/li5.png",
            "title": "2025年版注册建筑师",
            "resourceCount": 8
          },
          {
            "imageUrl": "../../static/img/li6.png",
            "title": "监理工程师学习丛书",
            "resourceCount": 2
          },
           {
            "imageUrl": "../../static/img/li7.jpg",
            "title": "监理工程师学习丛书",
            "resourceCount": 3
          }, 
          {
            "imageUrl": "../../static/img/li8.png",
            "title": "监理工程师学习丛书",
            "resourceCount": 11
          }
        ],
        currentStartIndex: 0, // 当前显示组的起始索引
        showCount: 4 ,// 每页显示4个
        currentTab: 0, // 当前激活的Tab索引（默认选中“最新动态”）

        tabList:[
           {
          title: "最新动态",
          content: [
            {
              text: "2025房地产估价师职业资格考试备考指南",
            } ,   
            {
              text: "我社3种图书获评第二十四届输出版引进版优秀图书",
            }  ,      
            {
              text:"中国人事考试网发布！2025年一建考试报名时间确定hhhhhhhhhhh",
            }  ,
            {
              text: "重磅推荐 | 2025年版全国一级建造师建筑工程管",
            } ,
            {text: "多年再版 名师品质 | 《二级注册结构工程师专业考"} 
          ]
        },
        {
          title: "报考资讯",
          content: [
            {
              text:"2025一建考试报考条件调整通知",
            },
             {
              text:"2025造价工程师报名材料提前准备清单",
            },
             {
             text: "2025监理工程师考试报考流程指" }
            ]
        },
        {
          title: "标准公告",
          content: [
            {text:"2025年职业资格考试教材修订标准公告"},
            {text:"2025年度考试考场纪律标准通知"}
            
            
          ]
        }
        ],
        bookList:[
          {
            "imageUrl": "../../static/img/45631.jpg",
            "title": "【2026年版】建设工程施工管理重点难点专项突破（含增值服务）二建 二级建造师",
            "author":"全国二级建造师执业资格考试专项突破编写委员会 编写",
            "price": 37.7
          },
            {
            "imageUrl": "../../static/img/904885.jpg",
            "title": "【2026年版】建设工程施工管理重点难点专项突破（含增值服务）二建 二级建造师",
            "author":"全国二级建造师执业资格考试专项突破编写委员会 编写",
            "price": 37.7
          },
            {
            "imageUrl": "../../static/img/904886.jpg",
            "title": "【2026年版】建设工程施工管理重点难点专项突破（含增值服务）二建 二级建造师",
            "author":"全国二级建造师执业资格考试专项突破编写委员会 编写",
            "price": 37.7
          },
            {
            "imageUrl": "../../static/img/904887.jpg",
            "title": "【2026年版】建设工程施工管理重点难点专项突破（含增值服务）二建 二级建造师",
            "author":"全国二级建造师执业资格考试专项突破编写委员会 编写",
            "price": 37.7
          },
          {
            "imageUrl": "../../static/img/45631.jpg",
            "title": "【2026年版】建设工程施工管理重点难点专项突破（含增值服务）二建 二级建造师",
            "author":"全国二级建造师执业资格考试专项突破编写委员会 编写",
            "price": 37.7
          },
            {
            "imageUrl": "../../static/img/904885.jpg",
            "title": "【2026年版】建设工程施工管理重点难点专项突破（含增值服务）二建 二级建造师",
            "author":"全国二级建造师执业资格考试专项突破编写委员会 编写",
            "price": 37.7
          },
            {
            "imageUrl": "../../static/img/904886.jpg",
            "title": "【2026年版】建设工程施工管理重点难点专项突破（含增值服务）二建 二级建造师",
            "author":"全国二级建造师执业资格考试专项突破编写委员会 编写",
            "price": 37.7
          },
            {
            "imageUrl": "../../static/img/904887.jpg",
            "title": "【2026年版】建设工程施工管理重点难点专项突破（含增值服务）二建 二级建造师",
            "author":"全国二级建造师执业资格考试专项突破编写委员会 编写",
            "price": 37.7
          },
        

        ],
        rankingList:["畅销榜", "阅读榜", "新品榜"],
        activeTab: 2, // 对应示例中默认显示“新品榜”
      // 各Tab对应的排行榜数据（模拟数据）
        rankData: {
          0: [ // 畅销榜
            { id: 1, name: "商品A", price: 50, img: "../../static/img/44048.jpg" },
            { id: 2, name: "商品B", price: 60, img: "../../static/img/45631.jpg" },
            { id: 3, name: "商品C", price: 70, img: "../../static/img/45704.jpg" }
          ],
          1: [ // 阅读榜
            { id: 1, name: "书籍X", price: 30, img: "../../static/img/44048.jpg" },
            { id: 2, name: "书籍Y", price: 40, img: "../../static/img/45631.jpg" }
          ],
          2: [ // 新品榜（对应示例数据）
            { id: 1, name: "SJT 10-2025 建筑防水构造图集", price: 89.1, img: "../../static/img/44048.jpg" },
            { id: 2, name: "房屋建筑工程施工安全管理资料标准化指南", price: 108, img: "../../static/img/45631.jpg" },
            { id: 3, name: "虚构与真实——基于文本创作的儿童友好城市空...", price: 88.2, img: "../../static/img/44048.jpg" },
            { id: 4, name: "新城规划的理论与实践——田园城市思想的世纪...", price: 77.4, img: "../../static/img/45631.jpg" },
            { id: 5, name: "EPC工程项目管理：理论、创新与成功实践", price: 70.2, img: "../../static/img/45631.jpg" }
          ]
        },
      // 当前悬浮的项ID（默认显示第一个项的图片）
      hoverItemId: 1// 对应新品榜第一个项的id
      }
    },
     computed: {
    // 当前显示的4条数据
    currentDataList() {
       const list = [];
      // 从currentStartIndex开始，取showCount个数据（循环）
      for (let i = 0; i < this.showCount; i++) {
        // 取余实现循环：(当前起始索引 + i) % 总数据长度
        const realIndex = (this.currentStartIndex + i) % this.allData.length;
        list.push(this.allData[realIndex]);
      }
      return list;
    },
      currentTabContent() {
      return this.tabList[this.currentTab].content;
    },
     currentRankList() {
      return this.rankData[this.activeTab];
    }

  },
    methods: {
    login(){
        loginIn()
        
    },
    register(){
        console.log('请注册')
    },
     // 切换组：direction为1（右）或-1（左）
    switchGroup(direction) {
      // 右切换：起始索引+showCount；左切换：起始索引-showCount
      let newIndex = this.currentStartIndex + direction * this.showCount;
      // 处理循环边界（保证索引始终在0~allData.length-1范围内）
      const total = this.allData.length;
      // 左切换到负数时，补总长度；右切换超出时，取余
      newIndex = (newIndex % total + total) % total;
      this.currentStartIndex = newIndex;
    },
     // 切换Tab的方法
    switchTab(index) {
      this.currentTab = index;
    },
    handleTabClick(index) {
      this.activeTab = index;
      // // 切换Tab后，默认显示新Tab列表的第一个项的图片
      // for(let i=0; i<this.currentRankList.length;i++){
      //   this.hoverItemId = this.currentRankList[i].id;
      // }
      
    }
  
  }

}

</script>

<style>
@import './index.css';


</style>