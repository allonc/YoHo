import Vue from 'vue'
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
import Swiper from 'swiper';

import '../node_modules/swiper/dist/css/swiper.css'
import Wechat from './containers/wechat.vue';
import Friend from './containers/friend.vue';
import Contacts from './containers/contacts.vue';
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
const routes = [ {
  path: '/wechat',
  component: Wechat
}, {
  path: '/friend',
  component: Friend
}, {
  path: '/contacts',
  component: Contacts
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
  swiper,
  render: h => h(App)
}).$mount('#app')
