import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)
import App from './App.vue'
import $ from 'jquery'
window.$ = $;
//微信UI
import "weui";
//引用router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
import './js/rem.js'
import './font_icon/iconfont.css'
import './css/1.css'
import './css/2.css'
import './css/3.css'
import Swiper from 'swiper';

import axios from 'axios'
import Qs from 'qs'
//QS是axios库中带的，不需要我们再npm安装一个
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
import '../node_modules/swiper/dist/css/swiper.css'
import xindex from './components/xindex.vue';
import text from './components/testBanner.vue';
import Product from './components/xproduct.vue';
// import 'amfe-flexible'
const store = new Vuex.Store({
  //状态
  state: {
    searchText: "",
    isShowGallery:false,
    galleryUrl:""
  },
  mutations: {
    changeSearchText(state, data) {
      state.searchText = data
    }
  },
  actions: {
    setSearchText(context, data) {
      context.commit('changeSearchText', data)
    },
  },
  getters: {
    getSearchText(state) {
      return state.searchText
    }
  }
  //actions---(commit)--->mutations----->state
})
const routes = [{
  path: '/',
  component: xindex
},{
  path: '/text',
  component: text
}, {
  path: '/product',
  component: Product
}
]



const router = new VueRouter({
  routes // short for `routes: routes`
})
const swiper = new Swiper ('.swiper-container', {
  direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
new Vue({
  router,
  store,
  Swiper,
  render: h => h(App)
}).$mount('#app')
