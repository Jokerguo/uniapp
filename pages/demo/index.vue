<template>
  <div>
    <div class="test">测试一</div>
    <button @click="toLink">跳页面</button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data(){
    return{}
  },  
  methods:{
    toLink(){
      uni.navigateTo({url:'/pages/demo2/index'})
    },
  },
  onShow(){
    const data = getApp().globalData
  }
}
</script>

<style lang="scss" scoped>
.test{
  color: $uni-color-primary
}

</style>
