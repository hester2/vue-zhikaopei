<template>
	<div class="gd-daily-main">
		<div class="gd-daily-top">
			<van-nav-bar title="学习计划" left-text="" right-text="" :border="false" left-arrow @click-left="onClickLeft"
			 @click-right="" />
		</div>
		<div class="gd-daily-card">
			<div class="gd-daily-card-row" @click="handleBasis">
				<div class="gd-daily-card-top">
					<img src="../../assets/bg-daily-001.png" alt="">
					<div class="gd-daily-p">
						<p>强化阶段 <span></span></p>
						<span>提高题，题海战术</span>
					</div>
				</div>
				<div class="gd-daily-space">
					<p>每日学习量 <span>2</span></p>
					<p>完成时间 2020.12.30</p>
				</div>
			</div>
			<div class="gd-daily-card-row">
				<div class="gd-daily-card-top">
					<img src="../../assets/bg-daily-002.png" alt="">
					<div class="gd-daily-p">
						<p>强化阶段 <span>暂未开启</span></p>
						<span>提高题，题海战术</span>
					</div>
				</div>
				<div class="gd-daily-space">
					<p>每日学习量 <span>暂未设置</span></p>
					<p>完成时间 暂未设置</p>
				</div>
			</div>
			<div class="gd-daily-card-row">
				<div class="gd-daily-card-top">
					<img src="../../assets/bg-daily-002.png" alt="">
					<div class="gd-daily-p">
						<p>冲刺阶段 <span>暂未开启</span></p>
						<span>真题为主，精选精炼</span>
					</div>
				</div>
				<div class="gd-daily-space">
					<p>每日学习量 <span>暂未设置</span></p>
					<p>完成时间 暂未设置</p>
				</div>
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
			handleBasis() {
				this.$router.push({
					path: '/daily/basis'
				});
			},
			onClickLeft(){
				this.$router.go(-1)
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
	.gd-daily-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-daily-top {
			height: 10.625rem;
			background: linear-gradient(90deg, rgba(117, 175, 255, 1), rgba(94, 154, 240, 1));
		}

		.van-nav-bar {
			background-color: transparent;

			.van-nav-bar__title {
				color: #fff;
			}
		}

		.van-nav-bar .van-icon {
			color: #fff;
		}

		.gd-daily-card {
			box-sizing: border-box;
			padding: 0px 0.9375rem;
			margin-top: -6.25rem;
		}

		.gd-daily-card-row {
			width: 100%;
			height: 10.5rem;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 1px 15px 0px rgba(229, 229, 229, 0.92);
			border-radius: 0.6875rem;
			margin-bottom: 1.25rem;
			box-sizing: border-box;
			padding: 0px 0.9375rem;
		}

		.gd-daily-card-top {
			display: flex;
			height: 120px;
			align-items: center;
			border-bottom: 1px dashed rgba(223, 224, 227, 1);

			img {
				width: 4.375rem;
				height: 5.1875rem;
				margin-right: 20px;
			}

			.gd-daily-p {
				display: flex;
				flex-direction: column;
				text-align: left;

				p:nth-of-type(1) {
					font-size: 1.0625rem;
					width: 13.875rem;
					color: rgba(51, 51, 51, 1);
					margin: 10px 0px;
					display: flex;
					justify-content: space-between;

					span {
						display: block;
					}
				}

				span:nth-of-type(2) {
					font-size: 1.0625rem;
					color: rgba(153, 153, 153, 1);
				}
			}
		}

		.gd-daily-space {
			display: flex;
			justify-content: space-between;
			height: 47px;
			align-items: center;

			p:nth-of-type(1) {
				color: #666666;
				font-size: 14px;

				span {
					color: #5F9BF1;
				}
			}

			p:nth-of-type(2) {
				color: #FF7800;
				font-size: 14px;

			}
		}
	}
</style>
