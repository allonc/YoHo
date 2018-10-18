<template>
  <div>
    <xheader />
    <xbanner />
    <xwrapper />
    <xspace />
    <xhotList />
    <xbanner2 />
    <xhotBrand />
    <xnewUser />
    <xhotsingle />
    <xfooterTab />
    <router-view></router-view>
  </div>
</template>

<script>
import xheader from './components/xheader.vue';
import xsearch from './components/xsearch.vue';
import xfooter from './components/xfooter.vue';
import xgallery from './components/xgallery.vue';
import xbanner from './components/xbanner.vue';
import xwrapper from './components/xwrapper.vue';
import xspace from './components/xspace.vue';
import xhotList from './components/xhotList.vue';
import xbanner2 from './components/xbanner2.vue';
import xhotBrand from './components/xhotBrand.vue';
import xnewUser from './components/xnewUser.vue';
import xhotsingle from './components/xhotSingle.vue';
import xfooterTab from './components/xfooterTab.vue';

export default {
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
    xfooterTab
  }
}
</script>

<style>

</style>
