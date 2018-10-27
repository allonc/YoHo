<template>
    <div class="hot-single">
        <div class="floor-header-more">
            <h2>
                人气推荐
            </h2>
                <a class="more-btn iconfont" href="https://m.yohobuy.com/product/newsale/hotrank?gender=1,3&amp;title=人气推荐" rel="nofollow"></a>
        </div>

    <div class="banner-list single-one">
    <a href="https://m.yohobuy.com/product/newsale/hotrank?gender=1,3">
        <img src="//img11.static.yhbimg.com/yhb-img01/2017/08/04/10/015f31dc40baa31dee9f602f1a84a6ae5f.jpg?imageView2/2/w/640/h/200/q/90" alt="">
    </a>
</div>
    <div class="hot-single-goods-list" style="background-image: url()">
        <ul>
            <li class="hot-single-goods" v-for="(a,index) in arr" :key="index">
                <a href="//m.yohobuy.com/product/51516654.html">
                <img :src="a.original_img" alt="goods" class="goods-pic">
                <div class="goods-info">
                    <h3 class="price">¥{{a.goods_price}}</h3>
                    <p class="view-num">155人</p>
                    <p class="view-status">正在浏览</p>
                </div>
                </a>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  methods: {
    getNews: function() {
      const axios = require("axios");
      var self = this;
      axios
        .get("https://new.hibuys.cn/api/goods/index")
        .then(function(response) {
          // handle success
          console.log(response.data);
          var datalist = response.data.data.data;
          self.arr = datalist;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    }
  },
  mounted() {
    this.getNews();
  }
}
</script>
<style>

</style>

