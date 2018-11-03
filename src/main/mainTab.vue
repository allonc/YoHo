<template>
    <ul class="category-nav clearfix">
                <li @click="toggleChannel(index)" v-for="(a,index) in channels" :key="index" :class="{active:index===channel}">
                    <span>{{a.title}}</span>
                </li>
                <!-- <li class="" data-channel="girls">
                    <span>Girls</span>
                </li>
                <li class="" data-channel="kids">
                    <span>Kids</span>
                </li>
                <li class="" data-channel="lifestyle">
                    <span>Lifestyle</span>
                </li> -->
        </ul>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        channel(){
            return this.$store.getters.getChannel
        },
        channels(){
            return this.$store.getters.getChannels
        }
    },
    methods:{
        toggleChannel(channel){
            this.$store.dispatch("doChannel",channel);
            this.$router.push({name:this.channels[channel].path})
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
.category-nav li{
    float:left;
    width:25%;
    font-size: 30px;
    text-align: center;
    color: #999;
}
.category-nav li span{
    border-right: 1px solid #ccc;
    width: 100%;
    display: block;
    
}
.category-nav li:last-child span{
    border-right: none;
}
.active{
    color: #000!important
}
</style>
