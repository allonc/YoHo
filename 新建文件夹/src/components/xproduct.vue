<template>
    <div>
        <pheader />
        <div class="good-detail-page yoho-page">
        <pdeatils />
        <pcartBar />
        </div>
    </div>
</template>
<script>
import pheader from '../product/pheader.vue';
import pdeatils from '../product/pdeatils.vue';
import pcartBar from '../product/pcartBar.vue';
export default {
    components:{
        pheader,
        pdeatils,
        pcartBar
    }
}
</script>
<style>

</style>
