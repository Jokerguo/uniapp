<template>
    <view class="content">
        <!-- <i class="iconfont i-a-29shouye1"></i>
        <div :class="['box']">box</div> -->
				<!-- <button open-type="share">分享</button> -->
				<view @click="xxx" class="box">点这里</view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            yyy: false,
        };
    },
    onLoad() {},
    methods: {
			xxx(){
        wx.openEmbeddedMiniProgram({appId:'wxe5f52902cf4de896'})
				// wx.navigateToMiniProgram({appId:'wxb2307128931903fa',envVersion:'develop'})
			},
		},
    onShareAppMessage(from) {
        return {
            title: "嘻嘻阿萨德as",
            path: "/pages/demo2/index",
        };
    },
};
</script>

<style lang="scss" scoped>
.iconfont {
    font-size: 30px;
}
@keyframes scale_out {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
    50% {
        opacity: 0;
        transform: translate(200px, 200px) scale(0);
    }
    100% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
}
.box {
    width: 100px;
    height: 100px;
    padding: 20px;
    /* animation: scale_out 4s; */
}
</style>
