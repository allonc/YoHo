<template>
    <header id="yoho-header" class="yoho-header boys">
    <a href="javascript:history.go(-1);" class="iconfont nav-back"></a>
    <span @click="toggle" class="iconfont nav-home new-nav-home"></span>
    <p class="nav-title">商品详情</p>
    <div class="homebuttom boys" v-show="bool">
        <div class="ul-arr"></div>
        <ul>
            <li>
                <a href="#/">
                    <i class="iconfont"></i>
                    <span>首页</span>
                </a>
            </li>
            <li>
                <a href="//m.yohobuy.com/cate">
                    <i class="iconfont"></i>
                    <span>分类</span>
                </a>
            </li>
            <li>
                <a href="//m.yohobuy.com/cart/index/index" rel="nofollow">
                    <i class="iconfont"></i>
                    <span>购物车</span>
                </a>
            </li>
            <li>
                <a href="//m.yohobuy.com/home" rel="nofollow">
                    <i class="iconfont"></i>
                    <span>我的</span>
                </a>
            </li>
        </ul>
    </div>
</header>
</template>
<script>
export default {
    data(){
        return{
            bool:false
        }
    },
    methods:{
        toggle(){
            console.log(2)
            this.bool = !this.bool
        }
    }
    
}
</script>
<style>

</style>
