<template>
<div>
    <xheader />
    <div id="banner1">
    <xbanner :imgList='items' />
    </div>
    <xwrapper />
    <xspace />
    <xhotList />
    <xbanner2 />
    <xhotBrand />
    <xnewUser />
    <xhotsingle />
    <xgoodslist />
    <xfooter />
    <xfooterTab />
</div>
</template>
<script>
import xheader from "./xheader.vue";
import xsearch from "./xsearch.vue";
import xfooter from "./xfooter.vue";
import xgallery from "./xgallery.vue";
import xbanner from "./xbanner.vue";
import xwrapper from "./xwrapper.vue";
import xspace from "./xspace.vue";
import xhotList from "./xhotList.vue";
import xbanner2 from "./xbanner2.vue";
import xhotBrand from "./xhotBrand.vue";
import xnewUser from "./xnewUser.vue";
import xhotsingle from "./xhotSingle.vue";
import xfooterTab from "./xfooterTab.vue";
import xgoodslist from "./xgoodslist.vue";

export default {
  data() {
    return {
      items: [
        "//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/01e72c431b7f8598023a8d1c12d665c78f.jpg?imageView2/2/w/640/h/240/q/60",
        "//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/01b59c5962f6ad8f3c0b1b4b6896c0a634.jpg?imageView2/2/w/640/h/240/q/60",
        "//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/013000fc8be84463ccea21abbf5e806c69.jpg?imageView2/2/w/640/h/240/q/60",
        "//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/01d4d0693d82c494ec5a79dcff2a9f592e.jpg?imageView2/2/w/640/h/240/q/60",
        "//img10.static.yhbimg.com/yhb-img01/2018/10/15/17/01731adf62c6978359ce935b8a2603ae0c.jpg?imageView2/2/w/640/h/240/q/60",
        "//img10.static.yhbimg.com/yhb-img01/2018/10/15/17/018dfc0da4fb08b14990808358d6c9ee7b.jpg?imageView2/2/w/640/h/240/q/60",
        "//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/013806293806ac493d5c1a11bff3472ca0.jpg?imageView2/2/w/640/h/240/q/60",
        "//img11.static.yhbimg.com/yhb-img01/2018/10/15/17/018bc61c91718b68e7636f952a46cacf3c.jpg?imageView2/2/w/640/h/240/q/60"
      ]
    };
  },
  components: {
    xheader,
    xsearch,
    xfooter,
    xgallery,
    xbanner,
    xwrapper,
    xspace,
    xhotList,
    xbanner2,
    xhotBrand,
    xnewUser,
    xhotsingle,
    xfooterTab,
    xgoodslist
  }
};
</script>
<style>
 #banner1 .cube-slide{
  height: 7.8rem /* 156/16 */
}
#banner1 .cube-slide-dots{
  bottom: 1rem!important;
}
#banner1 .my-dot{
  height:12px!important;
  width: 12px!important;
  border-radius: 50%!important;
  background: #fff!important;
  opacity: 0.5;
}
#banner1 .my-dot.active{
  background: #fff!important;
  opacity: 1;
}
</style>
