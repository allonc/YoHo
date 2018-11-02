<template>
    <div class="main-wrap" id="main-wrap" data-apppath="yohobuy://yohobuy.com/goapp?openby:yohobuy={&quot;action&quot;:&quot;go.searchlist&quot;,&quot;params&quot;:{}}" data-minipath="//m.yohobuy.com/api/wechat/miniapp.jpg?miniapp_type=0&amp;param=%7B%22union_type%22%3A%22%22%7D&amp;miniQrType=0">

    <header id="yoho-header" class="yoho-header boys">
        <a href="javascript:history.go(-1);" class="iconfont nav-back"></a>
        <span class="iconfont nav-home new-nav-home"></span>
        <p class="nav-title">搜索</p>
    </header>
        {{searchGoods}}
            <div class="search-page yoho-page">
        <input type="hidden" value="Levi's×米奇联名款预售开启" id="default-terms">
        <div id="search-input" class="search-input">            
            <form id="search-form" action="//search.m.yohobuy.com" method="get">
                <i class="search-icon iconfont"></i>
                <input type="hidden" name="from" value="search">
                <input @keyup="setList" v-model="list" type="text" placeholder="Levi's×米奇联名款预售开启" name="query" data-bp-id="search_page_input_1" class="buriedpoint" autocomplete="off">
                <i class="clear-input iconfont hide" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></i>
                <span id="search" class="search buriedpoint" type="submit" data-bp-id="search_index_one_0">搜索</span>
            </form>
        </div>
        <ul class="search-associate" style="display:block">
            <li v-for="(g,index) in computedGoods" :key="index"><span class="keyword">{{g.goods_name}}</span></li>
        </ul>
            <div class="hot-search-new clearfix">
               
                <div class="new-hot">
                    <div class="hot-title hot-term">热搜</div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">卫衣</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">工装裤</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">VANS</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">棉衣</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">PUMA</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">夹克</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">MADNESS</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">袜子</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">TYAKASHA</a>
                        </div>
                        <div class="hot-term">
                            <a href="javascript:void(0);">STUSSY</a>
                        </div>
                </div>
            </div>
        <div class="search-items clearfix">
            <div class="search-index">
                <div class="search-group history-search hide" style="display: none;">
                    <div class="search-content-title">
                        <h3 class="left">最近搜索</h3>
                        <i id="clear-history" class="iconfont right ico-del hide" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: none;"></i>
                    </div>
                    <div class="search-content">
                        <ul class="history clearfix"></ul>
                    </div>
                </div>
                    <div class="search-group want-search">
                        <h3>猜你想找</h3>
                        <div class="search-content">
                            <ul class="want clearfix">
                                    <li>
                                        <a href="javascript:void(0);">速写CROQUIS</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">夹克</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">卫衣</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">休闲裤</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">休闲/运动鞋</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">T恤</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">MO&amp;Co.</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">Levi's官方旗舰店</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">JNBY</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">HIPANDA</a>
                                    </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
</div>
<xfooter :bottomType='bottomType'/>

                
        </div>
</template>
<script>
import xfooter from './xfooter.vue'
export default {
    data(){
        return{
            bottomType:'5',
            list:'',
            goods:[]
        }
    },
    components:{
        xfooter
    },
    methods:{
        setList(){
            this.$store.dispatch('setlist',this.list)
        }
    },
    computed:{
        searchGoods() {
				console.log(this.$store.getters.getgoods);
                return this.$store.getters.getgoods;
                this.goods = this.$store.getters.getgoods;
			},
        computedGoods() {
			//var self = this;
			var newArr = this.goods.filter(function(a) {
				console.log(a.goods_name.indexOf(this.searchGoods) != -1)
				//真
				console.log(a.goods_name, this.searchGoods)
				return a.goods_name.indexOf(this.searchGoods) != -1
				//return 
			}.bind(this))
			console.log(newArr);
			return newArr
		}
    },
    mounted(){
        
        console.log(this.goods) 
    }
};
</script>
<style scoped>
@import url(../css/search.css);
</style>
