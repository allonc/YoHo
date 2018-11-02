<template>
    <header id="yoho-header" class="yoho-header boys">
    <a href="javascript:history.go(-1);" class="iconfont nav-back"></a>
    <span @click.stop="bool=!bool" class="iconfont nav-home new-nav-home"></span>
    <p class="nav-title">商品详情</p>
    <div class="homebuttom boys" v-show="bool" ref="buttom" >
        <!-- <div class="ul-arr"></div> -->
        <ul>
            <li>
                <a href="#/">
                    <i class="iconfont"></i>
                    <span>首页</span>
                </a>
            </li>
            <li>
                <a>
                    <i class="iconfont"></i>
                    <span>分类</span>
                </a>
            </li>
            <li>
                <a rel="nofollow">
                    <i class="iconfont"></i>
                    <span>购物车</span>
                </a>
            </li>
            <li>
                <a rel="nofollow">
                    <i class="iconfont"></i>
                    <span>我的</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="mask" v-if="bool" @click="bool=false"></div>
</header>
</template>
<script>
export default {
  data() {
    return {
      bool: false
    };
  },
  methods: {
    toggle() {
      this.bool = !this.bool;
    }
  }
  // mounted(){
  //     let that = this
  //     document.addEventListener('click',function(e){

  //     })
  // }
};
</script>
<style scoped>
.mask{
    z-index: 0;
    background: #ccc;
    position: absolute;
    left:0;
    top: 0;
    width: 100%;
    height: 2000px;
    opacity: 0;
}
.hide{
    display: none;
}
</style>
