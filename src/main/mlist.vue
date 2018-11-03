<template>
<div>
    <msearch/>
    <mainTab/>
    <router-view></router-view>
    <xfooterTab/>
</div>
</template>
<script>
import msearch from './msearch.vue';
import xmain from './xmain.vue';
import xfooterTab from '../components/xfooterTab.vue';
import mainTab from './mainTab.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        msearch,
        xmain,
        xfooterTab,
        mainTab
    }
}
</script>
<style>

</style>
