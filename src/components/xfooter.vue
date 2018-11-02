<template>
<div>
<footer id="yoho-footer" class="yoho-footer" :class="bottomType?'bottom':''" style="display: block">
    <p class="op-row"><a href="/signin.html?refer=https://m.yohobuy.com/boys" rel="nofollow">登录</a><span class="sep-line">|</span><a href="/reg.html" rel="nofollow">注册</a>
        <span @click="backTop" class="back-to-top">
            回到顶部
            <i class="iconfont"></i>
        </span>
        <backtoTop />
    <p></p>
    <address class="copyright">
        CopyRight©2007-2018 南京新与力文化传播有限公司
    </address>
    </footer>
</div>
</template>
<script>
import backtoTop from './xBacktoTop.vue'
export default {
  data() {
    return {
      
    }
  },
  props:{
      bottomType:{
          type:String,
          default:()=>{
              return ''
          }
      }
  },
  components:{
      backtoTop
  },
  methods:{
      backTop(){
          document.documentElement.scrollTop = document.body.scrollTop = 0;
      }
  }
};
</script>
<style>

</style>
