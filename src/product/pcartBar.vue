<template>
    <div class="cart-bar" style="display: block;">
        <input type="hidden" id="remove-cart-count" value="1">
    <a class="new-foot-ico" href="//m.yohobuy.com/cart/index/index" rel="nofollow">
        <div class="num-incart iconfont">
            <span class="num-tag hide"></span>
            
        </div>
        <div class="tip">购物车</div>
    </a>
    <a class="new-foot-ico store" href="/shop/apportfolio-1294.html">
        <div class="iconfont"></div>
        <div class="tip">品牌店铺</div>
    </a>
    <a href="javascript:;" class="new-foot-ico fav like-btn-c">
        <div id="likeBtn" class="favorite iconfont "></div>
        <div class="tip opa">收藏</div>
    </a>
    <span class="btn-c">
        <!-- <a id="addtoCart" href="javascript:;" class="addto-cart add-to-cart-url">加入购物车</a> -->
        <a id="addtoCart" class="addto-cart add-to-cart-url">
          <cube-popup type="my-popup" :position="position" :mask-closable="true" ref="myPopup4">
            <div class="chose-panel">
            <div class="main" id="main">
        <div class="close iconfont" @click="toggle"></div>
        <div class="infos ">
            <div class="basic-info">
                <div class="thumb-img">
                    <img class="thumb" src="//img13.static.yhbimg.com/goodsimg/2018/04/19/17/0230189d102aa212cec0a6347468eb1110.jpg?imageMogr2/thumbnail/300x395/background/d2hpdGU=/position/center/quality/80">
                </div>
                <div class="text-info">
                    <p class="price">
                        <span class="sale-price">¥599</span>
                        <span class="market-price">¥759</span> 
                    </p>
                    <p class="not-choose">请选择颜色、尺码</p>
                    <p class="choosed-info hide"></p>
                    <p class="size-info hide"></p>
                    <p class="size-rec hide"></p>
                </div>
            </div>
            <div class="chose-items">
                    <div class="block-list">
                        <span class="name">颜色</span>
                        <ul class="size-row clearfix">
                            <li class="block chosed" data-prop-id="color" data-value-id="1049386">白色</li>
                        </ul>
                    </div>
                    <div class="block-list">
                        <span class="name">尺码</span>
                        <ul class="size-row clearfix">
                            <li class="block chosed" data-prop-id="size" data-value-id="199">F</li>
                        </ul>
                    </div>
                <div class="num">
                    <span class="name">数量</span>
                    <div class="clearfix">
                        <a class="btn btn-minus " href="javascript:void(0);">
                            <span class="iconfont "></span>
                        </a>
                        <input id="good-num" class="good-num disabled" type="text" value="1" disabled="true">
                            <a class="btn btn-plus" href="javascript:void(0);">
                                <span class="iconfont "></span>
                            </a>
                    </div>
                    <span class="left-num"></span>
                    <input id="left-num" type="hidden" value="0">
                    <input id="limitNum" type="hidden" value="">
                </div>
            </div>
        </div>
        <div class="btn-wrap">
                <button id="chose-btn-buynow" class="btn btn-sure-buynow">立即购买</button>
                <button @click="addCar" id="chose-btn-sure" class="btn btn-sure-addtocart">加入购物车</button>
        </div>
    </div>
    </div>
          </cube-popup>
          <cube-button @click="showPopup">加入购物车</cube-button>
        </a>
    </span>
    <input type="hidden" id="limitCodeUrl" name="limitCodeUrl" value="">
    <input type="hidden" id="limitProductPay" name="limitProductPay" value="">
</div>


</template>
<script>
const positions = ['bottom']
let cur = 0
export default {
  data() {
    return {
      position: 'bottom',
      bool:true
    }
  },
  methods: {
    showPopup() {
      this.position = positions[cur++]
      if (cur === positions.length) {
        cur = 0
      }
      const component = this.$refs.myPopup4
      component.show()
      // setTimeout(() => {
      //   component.hide()
      // }, 2000)
    },
    toggle(){
      const component = this.$refs.myPopup4
        component.hide()
    },
    addCar(){
      console.log(11)
    }
  }
}
</script>
<style>

</style>

