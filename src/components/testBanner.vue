<template>
   <cube-button @click="showActionSheet">加入购物车</cube-button>
</template>
<script>


export default {
  methods: {
    showActionSheet() {
      this.$createActionSheet({
        title: '我是标题~~~',
        data: [
          {
            content: '<em>align - center</em>',
            class: 'cube-foo'
          },
          {
            content: 'align - left',
            align: 'left'
          },
          {
            content: 'align - right',
            align: 'right'
          }
        ],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            time: 1000
          }).show()
        }
      }).show()
    }
  }

}
</script>
<style>

</style>
