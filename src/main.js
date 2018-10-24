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
import './css/4.css'

import axios from 'axios'
import Qs from 'qs'
//QS是axios库中带的，不需要我们再npm安装一个
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
import '../node_modules/swiper/dist/css/swiper.css'
import xindex from './components/xindex.vue';
import test from './components/testBanner.vue';
import Product from './components/xproduct.vue';
import xbuyCar from './components/xbuyCar.vue';
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
  path: '/test',
  component: test
}, {
  path: '/product',
  component: Product
},{
  path: '/xbuyCar',
  component: xbuyCar
}
]



const router = new VueRouter({
  routes // short for `routes: routes`
})
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
