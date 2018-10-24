<template>
<cube-button @click="showImagePreview">Show ImagePreview</cube-button>

</template>
<script type="text/ecmascript-6">
  export default {
  data() {
    return {
      imgs: [
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg'
      ]
    }
  },
  methods: {
    showImagePreview() {
      this.$createImagePreview({
        imgs: this.imgs
      }).show()
    }
  }
}
</script>
<style>
 
</style>