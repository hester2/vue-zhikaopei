<template>
	<div class="gd-process-main">
		<van-nav-bar title="学习进度" left-text="" right-text="" left-arrow @click-left="onClickLeft" @click-right="" />
		<div class="gd-process-tab">
			<van-tabs v-model="active">
				<van-tab title="会计基础">
					<div class="gd-process-card">
						<h3>第一章 总论</h3>
						<div class="gd-process-per">重要等级
							<van-rate v-model="value" :size="10" color="#ffd21e" void-icon="star" void-color="#eee" />
						</div>
						<div class="gd-process-per">我的进度<van-progress pivot-text="" color="#5A8DF1" :percentage="25" /></div>
						<p class="gd-process-per">本章共117个单元</p>
						<div class="gd-process-pes" @click="handleDetail">点击查看详情</div>
					</div>
					<div class="gd-process-card">
						<h3>第二章 会计法律制度</h3>
						<div class="gd-process-per">重要等级
							<van-rate v-model="value" :size="10" color="#ffd21e" void-icon="star" void-color="#eee" />
						</div>
						<div class="gd-process-per">我的进度<van-progress pivot-text="" color="#5A8DF1" :percentage="25" /></div>
						<p class="gd-process-per">本章共117个单元</p>
						<div class="gd-process-pes">点击查看详情</div>
					</div>
				</van-tab>
				<van-tab title="经济法">内容 2</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				value: 3,
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			handleDetail(){
				this.$router.push('/setup/learnSituation')
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
	.gd-process-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-process-tab {
			box-sizing: border-box;
			padding: 0px 0.9375rem;

			.van-tabs__nav {
				background-color: transparent;
			}

			.van-hairline--top-bottom::after,
			.van-hairline-unset--top-bottom::after {
				border: none
			}

			.van-tabs__line {
				background-color: #5A8DF1;
				width: 24px !important;
			}

			.van-tabs__nav--line {
				width: 50%;

			}

			.van-tab--active {
				font-size: 0.9375rem;
				color: rgba(51, 51, 51, 1);
			}

			.gd-process-card {
				width: 100%;
				height: 11.0rem;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 3px 14px 0px rgba(3, 0, 0, 0.09);
				border-radius: 0.625rem;
				box-sizing: border-box;
				padding: 0.625rem 1.25rem;
				margin-top: 1.25rem;
				h3{
					font-size:0.875rem ;
					font-weight: bold;
					text-align: left;
					margin-bottom: 0.9375rem;
				}
				p{
					font-size: 0.75rem;
					text-align: left;
				}
			}
			.gd-process-per{
				display: flex;
				align-items: center;
				font-size: 0.75rem;
				color: #333333;
				margin-top:0.625rem;
				.van-rate{
					margin-left: 0.625rem;
				}
				.van-progress{
					width:80%;
					margin-left: 0.625rem;
				}
			}
			.gd-process-pes{
				border-top: 1px solid rgba(237,237,237,1);
				text-align: center;
				color:#5A8DF1 ;
				line-height: 2.75rem;
				font-size: 13px;
				margin-top: 1.25rem;
			}
		}
	}
</style>
