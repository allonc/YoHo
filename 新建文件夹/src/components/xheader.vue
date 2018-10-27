<template>
   <div id="home-header" class="home-header clearfix">
    <div id="browser-header">
        <span class="nav-btn iconfont icon-icon_caigoushuliang"></span>
        <span class="logo"></span>
        <span class="search-btn iconfont icon-icon_paizhao"><a href="//search.m.yohobuy.com/search"></a></span>
    </div>
    <div id="wechat-header" class="hide">
        <span class="nav-btn iconfont"></span>
        <div class="search-input">
            <a href="//search.m.yohobuy.com/search">
                <i class="search-icon iconfont"></i>
                <p>DC下单8折 2件7折</p>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        
    }
    
};
</script>


<style scoped>
 .home-header {
    background-image: -webkit-linear-gradient(#323232,#414141);
    background-image: linear-gradient(#323232,#414141);
    height: 2.25rem;
    line-height: 2.25rem;
    overflow: hidden;
    position: relative;
}
.home-header .nav-btn {
    bottom: 0;
    left: 0;
    margin: 0 .75rem;
    position: absolute;
    text-align: center;
    top: 0;
    width: 1rem;
    z-index: 2;
}
.home-header .logo {
    background: url(//cdn.yoho.cn/yohobuywap-node/img/yohologo02.4b84a9fb7d.png) no-repeat 50%;
    background-size: 100%;
    display: block;
    height: 2.175rem;
    margin: 0 auto;
    width: 5.2rem;
}
.home-header .search-btn {
    height: 2.25rem;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 2.25rem;
}
.home-header .logo.animate {
    background: url(//cdn.yoho.cn/yohobuywap-node/img/yohologo01.fdc1bf372e.png) no-repeat 50%;
    background-size: 100%;
}
.iconfont{
    color: antiquewhite;
    font-size: 1.25rem /* 20/16 */
}
</style>

