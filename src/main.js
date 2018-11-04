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
import xindex from './components/xindex.vue';
import milst from './main/mlist.vue';
import Product from './components/xproduct.vue';
import xbuyCar from './components/xbuyCar.vue';
import test from './components/testBanner.vue';
import psearch from './components/psearch.vue';
import xmain from './main/xmain.vue';
// import 'amfe-flexible'
const store = new Vuex.Store({
	//状态
	state: {
		chanNel: 0,
		tab: 0,
		chanNels: [{
			title: "Boys",
			path: "boys"
		}, {
			title: "Girls",
			path: "girls"
		}, {
			title: "Kids",
			path: "kids"
		}, {
			title: "Liftstyle",
			path: "lifestyle"
		}]
	},
	mutations: {
		setChannel(state, data) {
			state.chanNel = data
		},
		setTab(state, data) {
			state.tab = data
		}
	},
	actions: {
		doChannel(context, data) {
			context.commit('setChannel', data)
		},
		doTab(context, data) {
			context.commit('setTab', data)
		}
	},
	getters: {
		getChannel(state) {
			return state.chanNel
		},
		getChannels(state) {
			return state.chanNels
		},
		getTab(state) {
			return state.tab
		}
	}
	//actions---(commit)--->mutations----->state
})
const routes = [{
		path: '/',
		component: xindex
	}, {
		path: '/mlist',
		component: milst,
		redirect: '/mlist/boys',
		children: [{
			path: 'boys',
			name: 'boys',
			component: xmain
		}, {
			path: 'girls',
			name: 'girls',
			component: xmain
		}, {
			path: 'kids',
			name: 'kids',
			component: xmain
		}, {
			path: 'lifestyle',
			name: 'lifestyle',
			component: xmain
		}]
	}, {
		path: '/product',
		component: Product
	}, {
		path: '/xbuyCar',
		component: xbuyCar
	}, {
		path: '/test',
		component: test
	}, {
		path: '/psearch',
		component: psearch
	}, {
		path: '/mlist',
		redirect: '/mlist/boys'
	} //  碰到#/重定向到#/mlist
]
const router = new VueRouter({
	routes // short for `routes: routes`
})
router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')