<template>
  <div>二级页面
    {{name}}

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      name: ''
    }
  },
  computed:{
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  onShow(){
    this.name = this.userInfo.name
  },
}
</script>
