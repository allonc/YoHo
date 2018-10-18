<template>
    <div>
        <xheader />
        <xsearch />
        <xbanner />
        <xcontent />
        <xgallery />
        <xfooter />
    </div>
        
</template>
<script>
import xheader from '../components/xheader.vue';
import xcontent from '../components/xcontent.vue';
import xsearch from '../components/xsearch.vue';
import xfooter from '../components/xfooter.vue';
import xgallery from '../components/xgallery.vue';
import xbanner from '../components/xbanner.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        xheader,
        xsearch,
        xfooter,
        xcontent,
        xgallery,
        xbanner
    }
    
}
</script>
<style>

</style>
