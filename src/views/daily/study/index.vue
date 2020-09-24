<template>
	<div class="gd-study-main">
		<navBar titles="学习概要" @onclickLeft="onClickLeft"></navBar>
		<div class="gd-study-row">
			<div class="gd-study-row-left">
				<p>距离考试还剩</p>
				<p><span>5</span>天</p>

			</div>
			<div class="gd-study-row-right">
				祝你考试成绩优秀！
			</div>
		</div>
		<div class="gd-study-row gd-study-row-b">
			<van-row>
				<van-col span="12">
					<img src="../../../assets/icon-study-002.png" alt="">
					<div class="gd-study-hm">
						<p>剩余</p>
						<h3>10</h3>
						<p>单元包/个</p>
					</div>
				</van-col>
				<van-col span="12">
					<img src="../../../assets/icon-study-001.png" alt="">
					<div class="gd-study-hm">
						<p class="gd-study-color">今日</p>
						<h3>10</h3>
						<p>单元包/个</p>
					</div>
				</van-col>
			</van-row>
		</div>
		<div class="gd-study-row gd-study-row-c">
			<p>今日完成情况</p>
			<van-progress pivot-text="" color="#609CF1" stroke-width="8" :percentage="25" />
		</div>
		<div class="gd-study-bom" @click="handleLearn">进入学习</div>
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

			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			handleLearn(){
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
	.gd-study-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-study-row {
			display: flex;
			justify-content: space-between;
			margin: 0.9375rem 0.9375rem;
		}

		.gd-study-row-left {
			p:nth-of-type(1) {
				color: #666666;
				font-size: 12px;
			}

			p:nth-of-type(2) {
				color: #464646;
				font-size: 16px;
				text-align: left;
				display: flex;
				align-items: center;
				margin-top: 0.3125rem;

				span {
					color: #609CF1;
					font-size: 25px;
					display: block;
					font-weight: bold;
				}
			}
		}

		.gd-study-row-right {
			font-size: 0.9375rem;
			color: rgba(70, 70, 70, 1);
			margin-top: 1.5625rem;
		}

		.gd-study-row-b {
			.van-row {
				width: 100%;
			}

			.van-col {
				width: 47%;
				height: 7.1875rem;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 3px 10px 0px rgba(4, 0, 0, 0.12);
				border-radius: 0.625rem;
				margin-right: 1.25rem;
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				padding: 0.9375rem 0.9375rem;

				&:last-of-type {
					margin-right: 0px;
				}

				img {
					width: 2.375rem;
					height: 2.375rem;
					display: block;
				}
			}

			.gd-study-hm {
				p:nth-of-type(1) {
					font-size: 0.75rem;
					color: #609CF1;
					text-align: right;
				}

				h3 {
					font-size: 35px;
					font-weight: bold;
					text-align: right;
					margin: 0.325rem 0px;
				}

				p:nth-of-type(2) {
					font-size: 0.75rem;
					color: #666666;
					text-align: right;
				}

				.gd-study-color {
					color: #FF7800;
				}
			}
		}

		.van-progress {
			width: 100%;
		}

		.gd-study-row-c {
			flex-direction: column;

			p {
				text-align: left;
				margin-bottom: 0.625rem;
				font-size: 0.8125rem;
			}
		}

		.gd-study-bom {
			height: 3rem;
			line-height: 3rem;
			background: rgba(96, 156, 241, 1);
			font-size: 0.8125rem;
			color: #fff;
			position: fixed;
			bottom: 0px;
			width: 100%;
		}
	}
</style>
