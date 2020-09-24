<template>
	<div class="gd-complete-main">
		<div class="gd-complete-top"></div>
		<div class="gd-complete-card">
			<p class="gd-complete-title"><span></span>少壮不努力，老大难娶妻</p>
			<van-row>
				<van-col span="8">
					<h3>76</h3>
					<p>累计打卡</p>
					<p>天数</p>
				</van-col>
				<van-col span="8">
					<h3>76</h3>
					<p>累计打卡</p>
					<p>天数</p>
				</van-col>
				<van-col span="8">
					<h3>76</h3>
					<p>累计打卡</p>
					<p>天数</p>
				</van-col>
			</van-row>
			<div class="gd-comlete-vant">
				<van-button type="info" @click="handleContinue">继续学习</van-button>
				<van-button type="info">切换课程</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleContinue(){
				this.$router.push('/daily/dailySide')
			}
		},
	}
</script>

<style lang="less">
	.gd-complete-main {
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-complete-top {
			height: 16.5rem;
			background: url(../../../assets/bg-complete-001.png);
			background-size: 100% 100%;
		}

		.gd-complete-card {
			margin: 0px 0.9375rem;
			margin-top: -1.875rem;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0.1875rem 0.875rem 0px rgba(3, 0, 0, 0.09);
			border-radius: 0.625rem;
			box-sizing: border-box;
			padding: 1.25rem 0.9375rem;

			.gd-complete-title {
				font-size: 0.9375rem;
				color: #333333;
				display: flex;
				align-items: center;

				span {
					display: block;
					width: 0.25rem;
					height: 1rem;
					background: rgba(96, 156, 241, 1);
					border-radius: 0.125rem;
					margin-right: 0.625rem;
				}
			}

			.van-row {
				margin-top: 2.5rem;
			}

			.van-col {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				h3 {
					font-size: 1.125rem;
					color: #333;
					margin-bottom: 0.3125rem;
				}

				p:nth-of-type(1) {
					font-size: 0.8125rem;
					color: rgba(51, 51, 51, 1);
					margin-bottom: 0.1875rem;
				}

				p:nth-of-type(2) {
					font-size: 0.75rem;
					color: rgba(153, 153, 153, 1);
				}
			}
		}
		
		.gd-comlete-vant{
			box-sizing: border-box;
			padding: 0px 1.5625rem;
			display: flex;
			justify-content: space-between;
			margin-top: 1.875rem;
		}
		.van-button{
			width:134px;
			height: 2.3rem;
			line-height: 2.3rem;
			border-radius: 1.25rem;
			border: none;
		}

		.van-button:nth-of-type(1) {
			background: linear-gradient(90deg, rgba(117, 175, 255, 1), rgba(94, 154, 240, 1));
			box-shadow: 0px 3px 8px 0px rgba(69, 140, 238, 0.45);
			margin-right: 0.9375rem;
		}

		.van-button:nth-of-type(2) {
			background: linear-gradient(90deg, rgba(255, 165, 86, 1), rgba(255, 120, 0, 1)) !important;
			box-shadow: 0px 3px 8px 0px rgba(255, 120, 0, 0.45);
		}
	}
</style>
