<template>
    <div class="main-wrap" id="main-wrap" data-apppath="yohobuy://yohobuy.com/goapp?openby:yohobuy={&quot;action&quot;:&quot;go.shopcart&quot;,&quot;params&quot;:{}}" data-minipath="//m.yohobuy.com/api/wechat/miniapp.jpg?miniapp_type=0&amp;param=%7B%22union_type%22%3A%22%22%7D&amp;miniQrType=0">

                    <header id="yoho-header" class="yoho-header boys">
    <a href="javascript:history.go(-1)" class="iconfont nav-back"></a>
    <p class="nav-title">购物车</p>
    <span class="nav-btn">
             
    </span>
</header>
            <div class="shopping-cart-page yoho-page ">
    <div class="cart-box">    <div class="cart-nav clearfix more">
        <div class="nav-item active" id="common-cart-nav" data-type="ordinary">
            <span>普通商品(1)</span>
        </div>
        <button class="btn-edit"></button>
    </div>
   
    <div class="cart-content normal-good active">
                <a class="tips clearfix" href="/product/boys-new/">
                    <div>
                        购物满¥299.00 已免运费
                    </div>
                    <span class="iconfont free-shipping">&nbsp;</span>
                </a>
            <div class="normal-box">
                <div class="cart-brand box good-pools-data">
                        <div class="good-list">
                                <div class="good-item is-checked" data-promotion="" data-id="1589096" data-skn="51358054" data-mnum="1" data-link="//m.yohobuy.com/product/51358054.html" data-activityid="" data-poolbatchno="">
                                    <div class="opt">
                                            <i class="iconfont chk select checked"></i>
                                        <i class="iconfont chk edit"></i>
                                    </div>
                                    <div class="good-new-info">
                                        <a href="javascript:;" class="img-a">
                                            <div class="img">
                                                <img class="thumb lazy" data-original="//img10.static.yhbimg.com/goodsimg/2016/09/06/15/01d4fa710f6418df1b72fe9fae3eb952af.jpg?imageMogr2/thumbnail/120x160/background/d2hpdGU=/position/center/quality/60/format/webp" alt="" src="//img10.static.yhbimg.com/goodsimg/2016/09/06/15/01d4fa710f6418df1b72fe9fae3eb952af.jpg?imageMogr2/thumbnail/120x160/background/d2hpdGU=/position/center/quality/60/format/webp" style="display: block;">
                                            </div>
                                        </a>
                                        <div class="info">
                                            <div class="fixed-height">
                                                <div class="intro intro-name">
                                                    <div class="name-row">
                                                        <div class="name">
                                                            <a href="javascript:;">NBA x YO'HOOD 休斯敦火箭队迷彩夹棉夹克</a>
                                                        </div>
                                                    </div>
                                                    <p class="color-size-row"><span class="color">颜色:56:KHAKI</span><span class="size">尺码:M</span></p>
                                                </div>
                                                <div class="intro intro-edit">
                                                    <div class="edit-box">
                                                            <div class="num-opt">
                                                                <a href="javascript:;" class="btn btn-opt-minus disabled"><span class="iconfont"></span></a>
                                                                <input type="text" class="good-num" disabled="true" value="1" data-min="1" data-max="3">
                                                                <a href="javascript:;" class="btn btn-opt-plus"><span class="iconfont"></span></a>
                                                            </div>
                                                        <div class="edit-size-info  edit-size-info-notop ">
                                                            <div class="txt">颜色:56:KHAKI 尺码:M</div>
                                                            <div class="down">
                                                                <i class="iconfont"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="count">x1</div>
                                            </div>
                                            <div class="bottom">
                                                <div class="price">
                                                    <span class="market-price">¥774.00</span>
                                                    
                                                    
                                                    
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
                    <p>总计¥774.00=商品金额¥774.00</p>
                </div>
            </div>
            <div class="cart-footer">
                <div class="check-all">
                    <i class="iconfont chk select checked"></i>
                    <i class="iconfont chk edit"></i>
                    <p>全选</p>
                </div>
                <div class="opts edit">
                    <button class="btn btn-gray btn-fav">移入<br>收藏夹</button>
                    <button class="btn btn-red btn-del">删除</button>
                </div>
                <div class="opts bill ">
                    <div class="total">
                        <p class="price">总计:¥774.00&nbsp;&nbsp;(1件)</p>
                        <p class="intro">不含运费</p>
                    </div>
                    <button class="btn btn-red btn-balance">结算</button>
                </div>
            </div>
    </div>
    <input id="cartType" type="hidden" value="ordinary">
</div>
   
    <div id="chose-panel"></div>
<div class="loading-mask hide"><div class="loading"><div></div><div></div><div></div></div></div><div class="chose-panel" data-skn="51358054" style="display: none;">
    <div class="main">
        <div class="close iconfont"></div>
        <div class="infos ">
            <div class="basic-info">
                <div class="thumb-img">
                    <img class="thumb" src="//img10.static.yhbimg.com/goodsimg/2016/09/06/15/01d4fa710f6418df1b72fe9fae3eb952af.jpg?imageMogr2/thumbnail/300x395/background/d2hpdGU=/position/center/quality/80">
                </div>
                <div class="text-info">
                    <p class="price">
                        <span class="sale-price">¥774.00</span>
                        <span class="market-price">¥1290</span> 
                    </p>
                    <p class="not-choose hide">请选择颜色、尺码</p>
                    <p class="choosed-info">已选：56:KHAKI、M</p>
                    <p class="size-info">170/96A 胸围:114cm</p>
                    <p class="size-rec"></p>
                </div>
            </div>
            <div class="chose-items">
                    <div class="block-list">
                        <span class="name">颜色</span>
                        <ul class="size-row clearfix">
                            <li class="block chosed" data-prop-id="color" data-value-id="521948">56:KHAKI</li>
                        </ul>
                    </div>
                    <div class="block-list">
                        <span class="name">尺码</span>
                        <ul class="size-row clearfix">
                            <li class="block zero-stock" data-prop-id="size" data-value-id="207">S</li>
                            <li class="block chosed" data-prop-id="size" data-value-id="203">M</li>
                            <li class="block" data-prop-id="size" data-value-id="201">L</li>
                            <li class="block" data-prop-id="size" data-value-id="211">XL</li>
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
                    <span class="left-num">剩余3件</span>
                    <input id="left-num" type="hidden" value="0">
                    <input id="limitNum" type="hidden" value="">
                </div>
            </div>
        </div>
        <div class="btn-wrap">
                <button id="chose-btn-sure" class="btn btn-sure" style="background-color: rgb(235, 3, 19);">确认</button>
        </div>
    </div>
</div>
<input id="promotionId" type="hidden" value="">
<input id="single" type="hidden" value="">

<input id="promotionId" type="hidden" value="">
<input id="single" type="hidden" value="">
</div>


                        </div>
</template>
<script>
export default {};
</script>
<style scoped>
.nav-item {
  text-align: center !important;
  padding: 50px 0 !important;
  font-size: 30px !important;
}
</style>
