<template>
    <div class="main-wrap" :class="isHide?'edit':''" id="main-wrap" >
        <header id="yoho-header" class="yoho-header boys">
            <a href="javascript:history.go(-1)" class="iconfont nav-back"></a>
            <p class="nav-title">购物车</p>
            <span class="nav-btn" @click="isShow()">
            </span>
        </header>
        <div class="shopping-cart-page yoho-page ">
            <div class="cart-box">    
                <div class="cart-nav clearfix more">
                     <div class="nav-item active" id="common-cart-nav" data-type="ordinary">
                         <span>普通商品({{totalNum}})</span>
                     </div>
                    <button class="btn-edit"></button>
                </div>
   
                <div class="cart-content normal-good active">
                        <div class="normal-box">
                            <div v-for="(a,index) in arr" :key="index" class="cart-brand box good-pools-data">
                                <div class="good-list">
                                    <div class="good-item is-checked" data-promotion="" data-id="1589096" data-skn="51358054" data-mnum="1"  data-activityid="" data-poolbatchno="">
                                        <div class="opt">
                                            <i class="iconfont chk select" :class="a.checked?'checked':''" @click="singlePick(a)"></i>
                                            <i class="iconfont chk edit" :class="a.checked?'checked':''" @click="singlePick(a)"></i>
                                        </div>
                                        <div class="good-new-info">
                                            <a href="javascript:;" class="img-a">
                                                <div class="img">
                                                    <img class="thumb lazy" :src="a.Img" style="display: block;">
                                                </div>
                                            </a>
                                            <div class="info">
                                                <div class="fixed-height">
                                                    <div class="intro intro-name">
                                                        <div class="name-row">
                                                            <div class="name">
                                                                <a href="javascript:;">{{a.name}}</a>
                                                            </div>
                                                        </div>
                                                        <p class="color-size-row"><span class="color">颜色：{{a.Color}}</span><span class="size">尺码：{{a.Size}}</span></p>
                                                    </div>
                                                    <div class="intro intro-edit">
                                                        <div class="edit-box">
                                                            <div class="num-opt">
                                                                <a href="javascript:;" class="btn btn-opt-minus disabled"><span class="iconfont" @click="addPrice(a,false)"></span></a>
                                                                <input type="text" class="good-num" disabled="true" v-model="a.Num">
                                                                <a href="javascript:;" class="btn btn-opt-plus"><span class="iconfont"  @click="addPrice(a,true)"></span></a>
                                                            </div>
                                                            <div class="edit-size-info  edit-size-info-notop ">
                                                                <div class="txt">
                                                                    {{a.Color}} 尺码:{{a.Size}}
                                                                </div>
                                                                <div class="down">
                                                                    <i class="iconfont"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="count">x{{a.Num}}</div>
                                                </div>
                                                <div class="bottom">
                                                    <div class="price">
                                                        <span class="market-price">{{a.price*a.Num | moneyFormat(a.price*a.Num)}}</span>    
                                                    </div>
                                                    <div class="tags">

                                                    </div>
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="all-gift-box box">
                            <div class="gift-item advanceBuy">
                                <div class="flag">
                                    <i class="iconfont price-gift"></i>
                                </div>
                                <div class="content">
                                    <div class="info">全场加价购</div>
                                    <div class="opt to-gift ">
                                        <a href="javascript:;">去换购</a><i class="iconfont to-arrow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="total box">
                            <div class="price-compute">
                                <p>总计={{totalPrice | moneyFormat(totalPrice)}}商品金额¥{{totalPrice | moneyFormat(totalPrice)}}</p>
                            </div>
                        </div>
                        <div class="cart-footer">
                            <div class="check-all">
                            <i  class="iconfont chk select btnInput" :class="isClear?'checked':''" @click="checkedAll(isClear)"></i>
                    
                            <i class="iconfont chk edit" :class="isClear?'checked':''" @click="checkedAll(isClear)"></i>
                            <p>全选</p>
                        </div>
                        <div class="opts edit">
                            <button class="btn btn-gray btn-fav">移入<br>收藏夹</button>
                            <button class="btn btn-red btn-del" @click="delEnter">删除</button>
                        </div>
                        <div class="opts bill ">
                            <div class="total">
                                <p class="price">总计:{{totalPrice | moneyFormat(totalPrice)}}&nbsp;&nbsp;({{totalNum}}件)</p>
                                <p class="intro">不含运费</p>
                            </div>
                            <button class="btn btn-red btn-balance">结算</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        <div id="dialog-wrapper" class="dialog-wrapper" v-show="delenter">
            <div class="dialog-box " style="top: 50%; margin-top: -54px;">
                <div class="dialog-content">您确定要从购物车中删除吗？</div>
                <div class="dialog-footer">
                    <span class="dialog-left-btn tap-hightlight" @click="delenter = false">取消</span>
                    <span class="dialog-right-btn tap-hightlight">确定</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isClear: false,
      delClear:false,
      name: [],
      arr: [],
      actived: "",
      totalPrice: 0,
      totalNum: 0 * 1,
      isHide: false,
      delenter:false,
      delShop:[]
    };
  },
  methods: {
    checkedAll(flag) {
      this.isClear = !flag;

      //遍历商品数据
      this.arr.forEach((value, index) => {
        if (typeof value.checked === "undefined") {
          this.$set(value, "checked", !flag);
        } else {
          value.checked = !flag;
        }
      });
      this.getAllprice();
    },
    delAll(flag){
        this.delClear = !flag;
        this.delShop.forEach((value,index)=>{
          if (typeof value.checked === "undefined") {
          this.$set(value, "checked", !flag);
        } else {
          value.checked = !flag;
        }   
        });
    },
    //计算商品的总价格
    getAllprice() {
      let total = 0;
      let totalNum = 0;
      //遍历商品
      this.arr.forEach((value, index) => {
        //判断商品是否被选中
        if (value.checked) {
          total += value.price * value.Num;
          totalNum += value.Num;
        }
      });
      this.totalPrice = total;
      this.totalNum = totalNum;
    },
    singlePick(item) {
      if (typeof item.checked === "undefined") {
        this.$set(item, "checked", true);
      } else {
        item.checked = !item.checked;
      }

      this.getAllprice();
      this.pickAll();
    },
    delPick(del){
        if (typeof del.checked === "undefined") {
        this.$set(del, "checked", true);
      } else {
        del.checked = !del.checked;
      }
    },
    //判断是否全选
    pickAll() {
      let bool = true;
      this.arr.forEach((value, index) => {
        if (!value.checked) {
          bool = false;
        }
      });
      this.isClear = bool;
    },
    delAllpick(){
        let bool = true;
      this.delShop.forEach((value, index) => {
        if (!value.checked) {
          bool = false;
        }
      });
      this.delClear = bool;
    },
    isShow() {
      this.isHide = !this.isHide;
    },
    addPrice(n, flag) {
      if (flag) {
        n.Num += 1;
      } else {
        if (n.Num <= 1) {
          n.Num = 1;
          return;
        }
        n.Num -= 1;
      }
      this.getAllprice();
    },
    delEnter(){
        this.delenter = !this.delenter
    }
  },
  mounted() {
    var self = this;
    $.ajax({
      type: "GET",
      url: "http://localhost:9999/getcar",
      async: true,
      success: function(data) {
        console.log(data);
        self.arr = data;
        self.delShop = data;
        console.log(self.arr);
      }
    });
  },
  filters: {
    moneyFormat(money) {
      return "￥" + money.toFixed(2);
    }
  }
};
</script>
<style scoped>
.nav-item {
  text-align: center !important;
  padding: 50px 0 !important;
  font-size: 30px !important;
}
.dialog-wrapper {
    background: rgba(0,0,0,.5);
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
}
</style>
