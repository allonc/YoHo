<template>
    <div class="float-top" :class="backtoTop?'hover':''" @click="goTop"></div>
</template>
<script>
export default {
    data(){
        return{
            backtoTop:false,
            scrollTop:''
            
        }
    },
    methods:{
        toTop(){
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(this.scrollTop>2000){
                this.backtoTop = true
            }else if(this.scrollTop<2000){
                this.backtoTop = false
            }
        },
        goTop(){
            window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.toTop);
      }
    //   destroyed(){
    //     window.removeEventListener('scroll', this.toTop)
    //   }


    
}
</script>
<style>

</style>
