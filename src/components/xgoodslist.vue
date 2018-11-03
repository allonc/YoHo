<template>
<div class="maybe-like clearfix">
    <p class="title">
        <i class="icon"></i>
        <span>你可能喜欢</span>
    </p>
    <div class="good-info" :key="index" v-for="(a,index) in arr" @click="toDeatils(a.id)">
        <div class="tag-container clearfix">
        </div>
        <div class="good-detail-img">
            <a class="good-thumb">
                    <img class="lazy" :src="a.original_img">
            </a>
            <div class="similar-c">
                <div class="bg"></div>
                <a >找相似</a>
            </div>      
        </div>
        <div class="good-detail-text">
            <div class="name">
                <a v-text="a.goods_name"></a>
            </div>
            <div class="price">
                    <span class="sale-price no-price">¥{{a.goods_price}}</span>
            </div>
            <a class="similar-btn iconfont"></a>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  methods: {
    getNews: function() {
      const axios = require("axios");
      var self = this;
      axios
        .get("https://new.hibuys.cn/api/goods/index")
        .then(function(response) {
          // handle success
          console.log(response.data);
          var datalist = response.data.data.data;
          self.arr = datalist;
          
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
    toDeatils:function(id){
      this.$router.push('/product?id='+id)
    }
  },

  mounted() {
    this.getNews();
  }
};
</script>
<style>
</style>
