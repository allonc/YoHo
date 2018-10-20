<template>
<div>
    <div class="banner-container">
        <div class="tag-container">
        </div>
        <div class="banner-top">
    <div class="banner-swiper swiper-container swiper-container-horizontal">
        <ul class="swiper-wrapper">
            <li v-for="(a,index) in img" :key="index" class="swiper-slide swiper-slide-active" style="width: 224px; margin-right: 3px;">
                <a href="javascript:;">
                        <img :src="a" >
                </a>
            </li>
        </ul>
    </div>
    <div class="swiper-pagination">
        <div class="pagination-inner swiper-pagination-clickable swiper-pagination-bullets">
            <span v-for="(a,index) in img" :key="index" class="swiper-pagination-bullet"></span>
        </div>
    </div>

    <div class="my-swiper-button-prev prev-grey swiper-button-disabled"></div>
    <div class="my-swiper-button-next next-grey"></div>
    </div>
    </div>
        <div class="goods-name">
        <h1 class="name"></h1>
    </div>


    <div class="price-date">
        <div class="goods-price">
            <h2 class="current-price">¥3298</h2>
            <h2 class="previous-price"></h2>
        </div>
		<button class="limit-sale data-can-get-limit-code data-bind" id="limit-sale">获取限购码</button>
        <button class="got-limit-sale data-code-empty data-bind">限购码已被抢光</button>
        <button class="got-limit-sale data-got-code data-bind">已获取限购码</button>
    </div>


    <div class="goods-discount" id="goodsDiscount">
        <h2 class="first-item short-text tap-hightlight"><span class="promotion-icon">促</span>满￥799享7.5折<span class="icon-down iconfont dropdown"></span></h2>
        <div class="discount-folder">
            <h2 class="folder-item tap-hightlight"><span class="promotion-icon">促</span>满￥499享8.5折</h2>
        </div>
        <div class="discount-folder">
            <h2 class="folder-item tap-hightlight"><span class="promotion-icon">促</span>全场￥9加价购</h2>
        </div>
        <div class="discount-folder">
            <h2 class="folder-item tap-hightlight"><span class="promotion-icon">促</span>全场任意消费加10元换购YOHO!当期热销新刊</h2>
        </div>

        <div class="feedback-list ">
        <ul id="nav-tab" class="nav-tab clearfix" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
            <li class="comment-nav tap-hightlight focus">商品评价(<span class="comments-num">1</span>)</li>
                <li class="consult-nav tap-hightlight">常见问题</li>
        </ul>
        <div id="feedback-content">
            <div class="comment-content content">
                    <div class="comment-content-main content-main clearfix">
                        <div class="user-info clearfix">
                            <span class="user-name pd-right">
                                阿童妞_888
                            </span>
                        <span class="goods-spec">
                            购买了<b>原色牙</b>
                        </span>
                        <span class="goods-size">/F</span>
                        </div>
                    <p class="detail-content">
                        简直太棒啦，全球限量到手！
                    </p>
                    <span class="comment-time">
                        2018-01-18 21:21:21
                    </span>
                    </div>
                    <a class="comment-content-footer tap-hightlight" href="//m.yohobuy.com/product/detail/comments?product_id=916710" rel="nofollow">
                        查看更多
                        <span class="iconfont"></span>
                    </a>
            </div>
        
            <div class="consult-content content hide">
                    <div class="consult-content-main content-main">
                            <div class="question">
                                <span class="iconfont"></span>
                                <p>
                                    商品都是正品吗?<br>
                                    <span class="time"></span>
                                </p>
                            </div>
        
                            <div class="answer">
                                <span class="iconfont"></span>
                                <p>有货www.yohobuy.com所售的商品均经品牌授权，正品保障，支持专柜验货，与您亲临商场选购的商品一样享受相同的质量保证，请您放心购买。</p>
                            </div>
                            <div class="question">
                                <span class="iconfont"></span>
                                <p>
                                    尺码表上的尺码标准吗？<br>
                                    <span class="time"></span>
                                </p>
                            </div>
        
                            <div class="answer">
                                <span class="iconfont"></span>
                                <p>有货所售商品尺寸均为人工实物测量，可能会存在1-2cm的正常误差范围。</p>
                            </div>
                    </div>
                    <a class="consult-content-footer tap-hightlight" href="//m.yohobuy.com/product/detail/consults?product_id=916710&amp;total=true" rel="nofollow">
                        查看更多
                        <span class="iconfont"></span>
                    </a>
            </div>
        </div></div>
</div>

</div>


	

	


</template>
<script>
import Swiper from "swiper";
import "../../node_modules/swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      arr: [],
      img: "",
      page : 0
    };
  },
  methods: {
    getDeatils: function(id) {
      const axios = require("axios");
      var self = this;
      axios
        .get("https://new.hibuys.cn/api/goods/show", {
          params: {
            id: id
          }
        })
        .then(function(response) {
          // handle success
          console.log(response.data.data.goods_name);
          var datalist = response.data.data;
          var imglist = response.data.data.goods_content;
          self.arr = datalist;
          console.log(imglist);
          self.img = imglist;
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
    var id = this.$route.query.id;
    this.getDeatils(id);
    var swiper = new Swiper(".swiper-container", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    
  }
};
</script>
<style>
</style>
