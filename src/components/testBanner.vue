<template>
<div> 
  <cube-popup type="my-popup" :position="position" :mask-closable="true" ref="myPopup4">My Popup Content 4</cube-popup>
  <cube-button @click="showPopup">top/right/bottom/left/center</cube-button>
</div>
</template>
<script>
const positions = ['bottom']
let cur = 0
export default {
  data() {
    return {
      position: 'bottom'
    }
  },
  methods: {
    showPopup() {
      this.position = positions[cur++]
      if (cur === positions.length) {
        cur = 0
      }
      const component = this.$refs.myPopup4
      component.show()
      setTimeout(() => {
        component.hide()
      }, 2000)
    }
  }
}
</script>
<style>
</style>
