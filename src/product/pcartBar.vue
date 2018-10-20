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
        <a id="addtoCart" class="addto-cart add-to-cart-url"><cube-button @click="showActionSheet" class="addto-cart add-to-cart-url">加入购物车</cube-button></a>
    </span>
    <input type="hidden" id="limitCodeUrl" name="limitCodeUrl" value="">
    <input type="hidden" id="limitProductPay" name="limitProductPay" value="">
</div>

</template>
<script>
export default {
  methods: {
    showActionSheet() {
      this.$createActionSheet({
        title: '我是标题~~~',
        data: [
          {
            content: '<em>align - center</em>',
            class: 'cube-foo'
          },
          {
            content: 'align - left',
            align: 'left'
          },
          {
            content: 'align - right',
            align: 'right'
          }
        ],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            time: 1000
          }).show()
        }
      }).show()
    }
  }

}
</script>
<style>
/* cube-button{background-color: #eb0313;
    color: #fff;
    font-size: .8rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    width: 6.5rem;} */
</style>

