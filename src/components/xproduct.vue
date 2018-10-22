<template>
    <div>
        <pheader />
        <div class="good-detail-page yoho-page">
        <pdeatils />
        <xfooter />
        </div>
    </div>
</template>
<script>
import pheader from '../product/pheader.vue';
import pdeatils from '../product/pdeatils.vue';
import pcartBar from '../product/pcartBar.vue';
import xfooter from './xfooter.vue';
export default {
    components:{
        pheader,
        pdeatils,
        pcartBar,
        xfooter
    }
}
</script>
<style>

</style>
