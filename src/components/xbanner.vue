<template>
  <cube-slide ref="slide" :data="items" @change="changePage">
  <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
    <a>
      <img :src="item.url">
    </a>
  </cube-slide-item>
    <template slot="dots" slot-scope="props">
    <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in items" :key="index">{{index + 1}}</span>
  </template>
</cube-slide>
</template>
<script>

export default {
  data() {
    return {
      items:[{
			url:"//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/01e72c431b7f8598023a8d1c12d665c78f.jpg?imageView2/2/w/640/h/240/q/60"
		},{
			url:"//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/01b59c5962f6ad8f3c0b1b4b6896c0a634.jpg?imageView2/2/w/640/h/240/q/60"
		},{
			url:"//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/013000fc8be84463ccea21abbf5e806c69.jpg?imageView2/2/w/640/h/240/q/60"
		},{
			url:"//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/01d4d0693d82c494ec5a79dcff2a9f592e.jpg?imageView2/2/w/640/h/240/q/60"
		},{
			url:"//img10.static.yhbimg.com/yhb-img01/2018/10/15/17/01731adf62c6978359ce935b8a2603ae0c.jpg?imageView2/2/w/640/h/240/q/60"
		},{
			url:"//img10.static.yhbimg.com/yhb-img01/2018/10/15/17/018dfc0da4fb08b14990808358d6c9ee7b.jpg?imageView2/2/w/640/h/240/q/60"
		},{
			url:"//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/013806293806ac493d5c1a11bff3472ca0.jpg?imageView2/2/w/640/h/240/q/60"
		},{
			url:"//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/018bc61c91718b68e7636f952a46cacf3c.jpg?imageView2/2/w/640/h/240/q/60"
		}]
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
<style>
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