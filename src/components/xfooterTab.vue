<template>
    <div class="footer-tab">
    <a v-for="(a,index) in arr" :key="index" @click="routerLink(index,a.path)" :class="channel===index?'tab-item current boys':'tab-item'">
        <p class="iconfont tab-icon">{{a.icon}}</p>
        <p class="tab-name">{{a.title}}</p>
    </a>
    <!-- <a class="tab-item " href="#/xmain">
        <p class="iconfont tab-icon"></p>
        <p class="tab-name">分类</p>
    </a>
    <a class="tab-item " id="guangUrl" href="//m.yohobuy.com/guang">
        <p class="iconfont tab-icon"></p>
        <p class="tab-name">逛</p>
    </a>
    <a class="tab-item " href="#/xbuyCar" rel="nofollow">
        <p class="iconfont tab-icon"></p>
        <p class="tab-name">购物车</p>
    </a>
    <a class="tab-item " href="#/test" rel="nofollow">
        <p class="iconfont tab-icon"></p>
        <p class="tab-name">我的</p>
    </a> -->
</div>
</template>
<script>
export default {
    data(){
        return{
            icon:'',
            arr: [{
					title: "首页",
					icon: '',
					path:'/' 
				}, {
					title: "分类",
					icon: '',
					path: '/mlist'
				}, {
					title: "逛",
					icon: '',
					path: '/xmain'
				}, {
					title: "购物车",
					icon: '',
					path: '/xbuyCar'
				}, {
					title: "我的",
					icon: '',
					path: '/test'
				}]
        }
    },
    methods:{
        routerLink(index,path){
            this.$router.push(path);
            this.$store.dispatch("doTab",index);
        }
    },
    computed:{
        channel(){
            return this.$store.getters.getTab
        }
    }
}
</script>
<style>

</style>

