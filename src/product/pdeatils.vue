<template>
<div>
    <div id="ban2"><xbanner :imgList='img.slice(0,4)' /></div>
    
        <div class="goods-name">
        <h1 class="name" v-text="name"></h1>
        </div>


    <div class="price-date">
        <div class="goods-price">
            <h2 class="current-price">¥{{price}}</h2>
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
<div class="size-info  page-block">
                <h2 class="title">
                    尺码信息
                    <span class="en-title">SIZE INFO</span>
                </h2>
                
                <div class="detail">
                    <div class="detail-swiper swiper-container-horizontal" id="size-swiper-container">
                        <div class="swiper-wrapper">
                            
                            <div class="swiper-slide swiper-slide-active">
                                
                                <div class="cell">吊牌尺码</div>
                                
                                <div class="cell">M</div>
                                
                                <div class="cell">L</div>
                                
                            </div>
                            
                            <div class="swiper-slide swiper-slide-next">
                                
                                <div class="cell">肩宽</div>
                                
                                <div class="cell">39</div>
                                
                                <div class="cell">44</div>
                                
                            </div>
                            
                            <div class="swiper-slide">
                                
                                <div class="cell">胸围</div>
                                
                                <div class="cell">92</div>
                                
                                <div class="cell">102</div>
                                
                            </div>
                            
                            <div class="swiper-slide">
                                
                                <div class="cell">袖长</div>
                                
                                <div class="cell">20</div>
                                
                                <div class="cell">21</div>
                                
                            </div>
                            
                            <div class="swiper-slide">
                                
                                <div class="cell">前衣长</div>
                                
                                <div class="cell">64</div>
                                
                                <div class="cell">69</div>
                                
                            </div>
                            
                            <div class="swiper-slide">
                                
                                <div class="cell">后衣长</div>
                                
                                <div class="cell">64</div>
                                
                                <div class="cell">69</div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <p class="tips" style="display: block;">提示：左滑查看完整表格信息</p>
                </div>
                
            </div>
            <div class="measurement-method  page-block">
                <h2 class="title">
                    测量方式
                    <span class="en-title">MEASUREMENT METHOD</span>
                </h2>
                <div class="detail" style="width:100%">
                    <img class="img" src="//static.yohobuy.com/images/1.jpg" alt="">
                </div>
            </div>
            <div class="product-detail page-block">
                <h2 class="title">
                    商品详情
                    <span class="en-title">DETAILS</span>
                </h2>
                <div class="pro-detail">
                    
                    <p></p><p style="text-align: center;"><img class="lazy" src="//img12.static.yhbimg.com/goodsimg/2017/07/12/15/02f841f8c42e1f3c778818d7947972543e.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp" data-original="//img12.static.yhbimg.com/goodsimg/2017/07/12/15/02f841f8c42e1f3c778818d7947972543e.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp" _src="//img12.static.yhbimg.com/goodsimg/2017/07/12/15/02f841f8c42e1f3c778818d7947972543e.jpg?imageMogr2/thumbnail/750x/quality/80/interlace/1"></p><p>KAWS是当代重要艺术家之一，工作生活在纽约布鲁克林，他的艺术和设计作品影响力广泛，以多样形式呈现，包括绘画、壁画、大型雕塑、街头艺术、图像和产品设计。KAWS作品曾在亚特兰大高等艺术博物馆、布鲁克林博物馆和英国约克郡雕塑公园展出，目前KAWS20年主题调研展将从美国沃斯堡现代美术馆巡展至上海余德耀美术馆，此次展览隆重推出BFF公仔T恤、BFF公仔环保袋、BFF公仔雨伞、“始于终点”黑白两色T恤、“始于终点”环保袋等衍生产品。</p><p v-for="(a,index) in img" :key="index"><img class="lazy" :src="a" :data-original="a" _src="//img12.static.yhbimg.com/goodsimg/2017/07/12/15/023197bfcd6b683d31de7e6b6d221e6fb1.jpg?imageMogr2/thumbnail/750x/quality/80/interlace/1" style=""></p>

                    
                </div>
            </div>
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
                <div class="thumb-img" v-for="(a,index) in img.slice(0,1)" :key="index">
                    <cube-button @click="showImagePreview" class="gallery"><img class="thumb" :src="a"></cube-button>
                </div>
                <div class="text-info">
                    <p class="price">
                        <span class="sale-price">¥{{price}}</span>
                        <span class="market-price">¥759</span> 
                    </p>
                    <input v-if="actived ===''" class="not-choose" v-model="Color" disabled="disabled">
                    <span style="display:block" v-if="actived !==''">已选:<input style="width:100px" v-if="actived !==''" class="not-choose" v-model="Color" disabled="disabled"></span>
                    <input v-if="actived2 ===''" class="not-choose" v-model="Size" disabled="disabled">
                    <span style="display:block" v-if="actived2 !==''">已选:<input style="width:100px" v-if="actived2 !==''" class="not-choose" v-model="Size" disabled="disabled"></span>
                    <p class="choosed-info"></p>
                    <p class="size-info hide"></p>
                    <p class="size-rec hide"></p>
                </div>
            </div>
            <div class="chose-items">
                    <div class="block-list">
                        <span class="name">颜色</span>
                        <ul class="size-row clearfix">
                            <li v-for="(c,index) in spec.color" :key="index" @click="active(c,index)" class="block" :class="actived === index?'chosed':''" data-prop-id="color" data-value-id="1049386">{{c}}</li>
                        </ul>
                    </div>
                    <div class="block-list">
                        <span class="name">尺码</span>
                        <ul class="size-row clearfix">
                            <li v-for="(b,index2) in spec.size" :key="index2" @click="chosed2(b,index2)" class="block" :class="actived2 === index2?'chosed':''"  data-prop-id="size" data-value-id="199">{{b}}</li>
                        </ul>
                    </div>
                <div class="num">
                    <span class="name">数量</span>
                    <div class="clearfix">
                        <a @click="time" class="btn btn-minus " href="javascript:void(0);">
                            <span class="iconfont "></span>
                        </a>
                        <input id="good-num" class="good-num disabled" type="text" v-model="num" disabled="true">
                            <a class="btn btn-plus" href="javascript:void(0);">
                                <span @click="plus" class="iconfont "></span>
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


</div>


	

	


</template>
<script>
import xbanner from '../components/xbanner.vue';
const positions = ['bottom']
let cur = 0
const COMPONENT_NAME = 'cube-extend-popup'
export default {
  data() {
    return {
      name: COMPONENT_NAME,
      props: {
       content: {
        type: String
        }
      },
      arr: [],
      imgs: '',
      img: [],
      name: '',
      price: '',
      position: 'bottom',
      Color:'请选择颜色、尺码',
      Size:'',
      bool:true,
      bool2:true,
      spec:[],
      page:0,
      actived2:'',
      num:'1',
      actived:'',
      id:''
    };
  },
  components:{
      xbanner
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
          console.log(response.data.data);
          var datalist = response.data.data;
          var imglist = response.data.data.goods_content;
          self.arr = datalist;
          self.img = imglist;
          var goodsName = response.data.data.goods_name;
          self.name = goodsName;
          var goodsPrice = response.data.data.price_ladder.price;
          self.price = goodsPrice;
          self.spec = response.data.data.spec
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
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
    chosed(c){
        if(c.chosed == true){
            this.spec.forEach((c) => {
                this.$set(c,'chosed',false);
                this.Color = '请选择颜色'
            })
            return
        }
        this.spec.forEach((c) =>{
            this.$set(c,'chosed',false)
        })
            this.$set(c,'chosed',true)
        // this.page = index;
        // this.bool = !this.bool;
        
        this.Color = '已选:' + c.color_name
    },
    chosed2(b,index2){
        if(this.actived2 === index2){
            this.actived2 = '';
            this.Size = '请选择码数';
            return
        }
            this.actived2 = index2;
            this.Size =  b
    },
    active(c,index){
        if(this.actived === index){
            this.actived = '';
            this.Color = '请选择颜色';
            return
        }
            this.actived = index;
            this.Color = c 
    },
    show() {
        this.$refs.popup.show()
      },
    hide() {
        this.$refs.popup.hide()
        this.$emit('hide')
    },
    plus(){
        this.num ++
    },
    time(){
        if(this.num>1){
            this.num --
        } 
    },
    showImagePreview() {
      this.$createImagePreview({
        imgs: this.img.slice(0,4)
      }).show()
    },
    addCar(){
        if(this.actived === ''){
            alert('请选择颜色')
            return
        }else if(this.actived2 === ''){
            alert('请选择码数')
            return
        }
        location.href = '#/xbuyCar';
        $.ajax({
            type:"GET",
            url:"http://localhost:9999/addcar",
            async:true,
            data:{
                id:this.id,
                name:this.name,
                price:this.price,
                color:this.Color,
                size:this.Size,
                num:this.num,
                img:this.img.slice(0,1)
                
            },
            success(){
                console.log('加入成功!')
            }
        })
    }
  },
  mounted() {
    var id = this.$route.query.id;
    this.getDeatils(id);
    this.id = id
    
  }
};
</script>
<style>
.chose-panel .main {
    background: #fff;
    bottom: 0;
    height: 800px!important;
    left: 0;
    padding-bottom: 2.5rem;
    position: absolute;
    right: 0;
    color: black;
}
.cube-btn{
  line-height: 1.9!important;
  background:red
}
.gallery{
    padding: 0!important;
}
#ban2 .cube-slide{
  height: 11.8rem /* 156/16 */
}
#ban2 .cube-slide-dots{
  bottom: 1rem!important;
}
#ban2 .my-dot{
  height:12px!important;
  width: 12px!important;
  border-radius: 50%!important;
  background: #fff!important;
  opacity: 0.5;
  margin:0 10px
}
#ban2 .my-dot.active{
  background: #fff!important;
  opacity: 1;
}
</style>

