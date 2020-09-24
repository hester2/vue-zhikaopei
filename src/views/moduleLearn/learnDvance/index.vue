<template>
	<div class="gd-dvance-main">
		<navBar titles="" @onclickLeft="onClickLeft"></navBar>
		<div class="gd-dvance-card">
			<div class="gd-dvance-top">
				<img v-if="progress==true" src="../../../assets/bg-dvance-001.png" alt="">
				<img v-if="progress==false" src="../../../assets/bg-dvance-backward.png" alt="">
				<p>{{dvance}}</p>
			</div>
			<van-row>
				<van-col span="8">
					<h3>76</h3>
					<p>累计学习</p>
					<p>天数</p>
				</van-col>
				<van-col span="8">
					<h3>30</h3>
					<p>累计学习</p>
					<p>天数</p>
				</van-col>
				<van-col span="8">
					<h3>6</h3>
					<p>累计学习</p>
					<p>天数</p>
				</van-col>
			</van-row>
			<div class="gd-dvance-btn">
				<van-button type="info" @click="handleContinue">继续学习</van-button>
				<van-button type="info">切换课程</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import navBar from '@/components/header/index.vue'
	export default {
		components:{
			navBar
		},
		data() {
			return {
				progress: true,
				dvance:'进度超前了'
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			//继续学习
			handleContinue(){
				this.$router.push('/daily/dailySide')
			}
		},
		mounted() {
			//设置背景单一样式
			document.querySelector("body").setAttribute("style", "background-color: #F9FCFE; overflow-x: hidden;");
		},
		beforeDestroy() {
			document.querySelector("body").removeAttribute("style");
		}
	}
</script>

<style lang="less">
	.gd-dvance-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.van-nav-bar .van-icon {
			color: #333;
		}

		.gd-dvance-card {
			margin: 0.9375rem 0.9375rem;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0.1875rem 0.875rem 0px rgba(3, 0, 0, 0.09);
			border-radius: 0.625rem;
			box-sizing: border-box;
			padding: 1.25rem 1.25rem;
		}

		.gd-dvance-top {
			height: 16.71875rem;

			img {
				width: 10rem;
				height: 11.6875rem;
			}

			p {
				font-weight: bold;
			}
		}

		.van-row {
			.van-col {
				h3 {
					font-size: 1.1875rem;
					color: #333333;
					margin-bottom: 0.375rem;
				}

				p:nth-of-type(1) {
					font-size: 0.875rem;
					color: #333333;
				}

				p:nth-of-type(2) {
					font-size: 0.75rem;
					color: #999999;
				}
			}
		}

		.gd-dvance-btn {
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 1.25rem 1.875rem;

			.van-button {
				width: 8.375rem;
				height: 2.5rem;
				background: linear-gradient(90deg, rgba(117, 175, 255, 1), rgba(94, 154, 240, 1));
				box-shadow: 0px 0.1875rem 0.5rem 0px rgba(69, 140, 238, 0.45);
				border-radius: 1.25rem;
				border: none;
			}

			.van-button:nth-of-type(1) {
				margin-right: 1.25rem;
			}

			.van-button:nth-of-type(2) {
				background: linear-gradient(90deg, rgba(255, 165, 86, 1), rgba(255, 120, 0, 1));
				box-shadow: 0px 3px 8px 0px rgba(255, 120, 0, 0.45);
			}
		}
	}
</style>
