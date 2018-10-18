<template>
	<div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(a,index) in arr" :key="index" class="swiper-slide"><img :src="a.url" alt="banner轮播图"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination">
        <div class="pagination-inner swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "../../node_modules/swiper/dist/css/swiper.css";
export default {
  data() {
    return {
		arr:[{
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
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
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