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

</style>