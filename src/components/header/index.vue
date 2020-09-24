<template>
	<div>
		<van-nav-bar :title="titles" left-text="" :right-text="rightText" :border="false" :left-arrow="leftArrow" @click-left="onClickLeft"
		 @click-right="onClickRight" />
	</div>
</template>

<script>
	export default {
		name: 'navBar',
		props: {
			titles: String,
			rightText:String,
			leftArrow: {
				type:Boolean,
				default:true
			}
		},
		data() {
			return { 
			}
		},
		methods: {
			onClickLeft(sortObj) {
				this.$emit('onclickLeft', sortObj)
			},
			onClickRight(sortObj){
				this.$emit('onclickRight', sortObj)
			}
		}
	}
</script>

<style>
</style>
