<template>
	<div class="gd-basis-main">
		<van-nav-bar title="基础阶段" left-text="" right-text="" left-arrow @click-left="onClickLeft" @click-right="" />
		<div class="gd-basis-card">
			<div class="gd-basis-row">
				<div class="gd-basis-col">
					<h3>基础阶段</h3>
					<p>基础题型为主</p>
					<p>务实基础</p>
				</div>
				<div class="gd-basis-col">
					<h3>基础阶段</h3>
					<p>基础题型为主</p>
					<p>务实基础</p>
				</div>
				<div class="gd-basis-col"></div>
			</div>
			<div class="gd-basis-step">
				<div class="gd-basis-one">
					<span class="is-tive">1</span>
					<span>基础阶段</span>
					<p class="gd-basis-line"></p>
				</div>
				<div class="gd-basis-one">
					<span>2</span>
					<span>强化阶段</span>
					<p class="gd-basis-line"></p>
				</div>
				<div class="gd-basis-one">
					<span>3</span>
					<span>冲刺阶段</span>
				</div>
			</div>
			<div class="gd-basis-learn-card">
				<p class="gd-basis-learn-p">请选择每日学习时长</p>
				<div class="gd-basis-length">
					<p class="gd-basis-length-left">6小时</p>
					<p class="gd-basis-length-right"><img src="../../../assets/bg-basis-004.png" alt=""></p>
				</div>
				<p>您将于9月1日完成基础阶段学习！</p>
				<p> 每日平均完成6个单元 </p>
				<p>学习时长超过89%的用户</p>
				<van-button type="info">生成学习计划</van-button>
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
			onClickLeft() {
				this.$router.go(-1);
			},
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
	.gd-basis-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.van-hairline--bottom::after {
			border-bottom-width: 0px;
		}

		.gd-basis-card {
			box-sizing: border-box;
			padding: 0.625rem 0.9375rem;

			.gd-basis-row {
				display: flex;
				justify-content: center;
			}

			.gd-basis-col {
				width: 33.33%;
				height: 6.10625rem;
				margin-right: 0.625rem;
				border-radius: 0.75rem;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				box-sizing: border-box;
				padding: 0.625rem 0.625rem;

				h3 {
					color: #fff;
					font-size: 1rem;
				}

				p {
					font-size: 0.8125rem;
					color: #fff;

				}

				p:nth-of-type(1) {
					margin-top: 10px;
				}
			}

			.gd-basis-col:nth-of-type(1) {
				background-image: url(../../../assets/bg-basis-001.png);
				background-size: 100%;
			}

			.gd-basis-col:nth-of-type(2) {
				background-image: url(../../../assets/bg-basis-003.png);
				background-size: 100%;
			}

			.gd-basis-col:nth-of-type(3) {
				background-image: url(../../../assets/bg-basis-002.png);
				background-size: 100%;
				margin-right: 0px;
			}

			.gd-basis-step {
				display: flex;
				justify-content: space-between;
				margin-top: 1.875rem;
			}

			.gd-basis-line {
				width: 7rem;
				position: absolute;
				height: 1px;
				z-index: 9999999;
				background-color: #609CF1;
				top: 9px;
				left: 3.125rem;
			}

			.is-tive {
				background-color: #609CF1;
			}


			.gd-basis-one {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 5rem;
				position: relative;

				span:nth-of-type(1) {
					display: block;
					width: 1.0625rem;
					height: 1.0625rem;
					border-radius: 50%;
					color: #fff;
					border: 1px solid rgba(96, 156, 241, 1);
				}

				span:nth-of-type(2) {
					display: block;
					font-size: 12px;
				}
			}

			.gd-basis-learn-card {
				width: 100%;
				height: 20.3125rem;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 3px 14px 0px rgba(3, 0, 0, 0.09);
				border-radius: 0.625rem;
				margin-top: 1.25rem;
				box-sizing: border-box;
				padding: 0.9375rem 0.9375rem;

				p {
					font-size: 13px;
					color: rgba(51, 51, 51, 1);
					margin-bottom: 5px;
				}
			}

			.gd-basis-learn-p {
				color: rgba(51, 51, 51, 1);
				font-size: 16px;
				text-align: left;
			}

			.gd-basis-length {
				display: flex;
				border: 1px solid rgba(96, 156, 241, 1);
				margin-top: 0.625rem;
				margin-bottom: 25px;
			}

			.gd-basis-length-left {
				width: 100%;
				height: 2.21875rem;
				line-height: 2.21875rem;
				margin-bottom: 0px !important;
				text-align: left;
				box-sizing: border-box;
				padding-left: 1.25rem;
			}

			.gd-basis-length-right {
				width: 2.25rem;
				height: 2.21875rem;
				background-color: #609CF1;
				margin-bottom: 0px !important;
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					width: 0.75rem;
					height: 0.34375rem;
				}
			}

			.van-button {
				width: 12.5rem;
				height: 2.5rem;
				background: linear-gradient(90deg, rgba(117, 175, 255, 1), rgba(94, 154, 240, 1));
				box-shadow: 0px 3px 8px 0px rgba(69, 140, 238, 0.45);
				border-radius: 1.25rem;
				border: none;
				margin-top: 3.125rem;
			}
		}
	}
</style>
