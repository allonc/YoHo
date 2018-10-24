<template>
  <cube-slide ref="slide" :data="imgList" >
  <cube-slide-item v-for="(item, index) in imgList" :key="index">
      <img :src="item">
  </cube-slide-item>
    <template slot="dots" slot-scope="props" v-show="showDot">
    <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in imgList" :key="index">{{index + 1}}</span>
  </template>
</cube-slide>
</template>
<script>

export default {
  data() {
    return {
      
    }
  },
  props:{
    imgList:{
      type:Array,
      default:() =>{
        return[]
      }
    },
    showDot:{
      type:Boolean,
      defalult:true
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  },
  mounted(){
    this.$nextTick(function () {
      this.$refs.slide.refresh()
    })
  }
}
</script>
<style scoped>
.cube-slide{
  height: 7.8rem /* 156/16 */
}
.cube-slide-dots{
  bottom: 2rem!important;
}
.my-dot{
  height:12px!important;
  width: 12px!important;
  border-radius: 50%!important;
  background: #fff!important;
  opacity: 0.5;
}
.my-dot.active{
  background: #fff!important;
  opacity: 1;
}
</style>