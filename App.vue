<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {  
				text: '全局对象'  
				// js中使用： getApp().globalData
		}
	}
</script>

<style>
	@import './static/style/index.scss';
</style>
