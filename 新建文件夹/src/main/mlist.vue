<template>
<div>
    <msearch/>
    <xmain/>
    <xfooterTab/>
</div>
</template>
<script>
import msearch from './msearch.vue';
import xmain from './xmain.vue';
import xfooterTab from '../components/xfooterTab.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        msearch,
        xmain,
        xfooterTab
    }
}
</script>
<style>

</style>
