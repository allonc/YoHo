<template>
    <div class="weui-tabbar">
                <a @click="green(index)" v-for="(a,index) in arr" :key="index" href="javascript:;" class="weui-tabbar__item" :class="{'weui-bar__item_on':page===index}">
                    <span style="display: inline-block;position: relative;">
                        <img :src="img" alt="" class="weui-tabbar__icon">
                        <span v-show="a.bage>0" class="weui-badge" style="position: absolute;top: -2px;right: -13px;" v-text="a.bage"></span>
                        <span v-show="a.isShowDot>0" class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
                    </span>
                    <p class="weui-tabbar__label" v-text="a.title"></p>
                </a>
            </div>
</template>
<script>
export default {
    data(){
        return{
            img:require("../assets/icon_tabbar.png"),
            page:0,
            arr:[{
                title:"微信",
                bage:8,
                isShowDot:false
            },{
                title:"通讯录",
                bage:0,
                isShowDot:false
            },{
                title:"发现",
                bage:0,
                isShowDot:true
            },{
                title:"我",
                bage:0,
                isShowDot:false
            }]
        }
    },
    methods:{
        green(index){
            this.page = index;
            switch(index){
                case 0 :
                location.href="#/wechat";
                break;
                case 1 :
                location.href="#/contacts";
                break;
                case 2 :
                location.href="#/friend";
                break;
            }
        }
    }
}
</script>
<style>
    .weui-tabbar{
        position: fixed!important;
        bottom: 0;
        left: 0;
    }
</style>
