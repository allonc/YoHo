<template>
     <div class="weui-search-bar" :class="{
		'weui-search-bar_focusing':isSearch
	}" id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input @keyup="setSearchText" type="search" v-model="searchText" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <transition name="fade">
                    <label @click="toggle" v-show="!isSearch" class="weui-search-bar__label" id="searchText">
                        <i class="weui-icon-search"></i>
                        <span>搜索</span>
                    </label>
                </transition>
            </form>
            <transition name="fade">
            <a @click="toggle" v-show="isSearch" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
            </transition>
     </div>
   
</template>



<script>
export default {
  data() {
    return {
      isSearch: false,
      searchText: ""
    };
  },
  methods: {
    toggle() {
      this.isSearch = !this.isSearch;
    },
    setSearchText() {
      //把this.searchText交到vuex的store的state里面，触发actions的setSearchText的函数
      this.$store.dispatch("setSearchText", this.searchText);
    }
  },
  mounted() {
    
  }
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

