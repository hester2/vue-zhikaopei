<template>
	<div class="gd-parsing-main">
		<van-nav-bar title="题目解析" left-text="" right-text="" :border="false" left-arrow @click-left="onClickLeft"
		 @click-right="" />
		<div class="gd-parsing-card">
			<div style="display: flex;position: relative;align-items: center;">
				<van-circle v-model="currentRate" :rate="30" size="80px" :speed="100" layer-color="#D9EBFF" :stroke-width="80"
				 :color="gradientColor" :text="text" />
				<p class="gd-parsing-fied">正确率</p>
				<div class="gd-parsing-right">
					<p>136****9999</p>
					<p>你的排名第<span>32</span>位</p>
					<p>您的用时：15分钟(总时长：30分钟)</p>
				</div>
			</div>
		</div>
		<div class="gd-parsing-card">
			<p class="gd-parsing-p">单选题</p>
			<div class="gd-parsing-p-row">
				<p class="is_tive">1</p>
				<p>2</p>
				<p class="is_tive_red">3</p>
				<p>4</p>
				<p>5</p>
				<p>6</p>
				<p>7</p>
			</div>
			<p class="gd-parsing-p">多选题</p>
			<div class="gd-parsing-p-row">
				<p class="is_tive">1</p>
				<p>2</p>
				<p class="is_tive_red">3</p>
				<p>4</p>
				<p>5</p>
				<p>6</p>
				<p>7</p>
			</div>
			<p class="gd-parsing-p">判断题</p>
			<div class="gd-parsing-p-row">
				<p class="is_tive">1</p>
				<p>2</p>
				<p class="is_tive_red">3</p>
				<p>4</p>
				<p>5</p>
				<p>6</p>
				<p>7</p>
			</div>
			<div class="gd-parsing-p-ml">
				<p><span></span>正确</p>
				<p><span></span>错误</p>
				<p><span></span>未做</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			text() {
				return this.currentRate.toFixed(0) + '%';
			},
		},
		data() {
			return {
				currentRate: 0,
				gradientColor: {
					'0%': '#609CF1',
					'100%': '#609CF1',
				},
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			}
		},
	}
</script>

<style lang="less">
	.gd-parsing-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-parsing-card {
			margin: 0.9375rem 0.9375rem;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 3px 14px 0px rgba(3, 0, 0, 0.09);
			border-radius: 0.625rem;
			box-sizing: border-box;
			padding: 0.9375rem 0.9375rem;
		}

		.van-circle__text {
			margin-top: -10px;
		}

		.gd-parsing-fied {
			position: absolute;
			top: 40px;
			font-size: 12px;
			left: 1.25rem;
		}

		.gd-parsing-right {
			margin-left: 0.625rem;

			p:nth-of-type(1) {
				color: #333;
				font-size: 14px;
			}

			p:nth-of-type(2) {
				span {
					color: #FF7800;
				}
			}

			p {
				font-size: 12px;
				color: #666666;
				line-height: 1.25rem;
				text-align: left;
			}
		}

		.gd-parsing-p {
			height: 2.5rem;
			line-height: 2.5rem;
			border-bottom: 1px solid rgba(245, 245, 245, 1);
			font-size: 0.875rem;
			text-align: left;
		}

		.gd-parsing-p-row {
			display: flex;
			display: -webkit-flex;
			justify-content: flex-start;
			flex-direction: row;
			flex-wrap: wrap;
			margin-top: 1.25rem;

			p {
				width: 2.75rem;
				height: 2.75rem;
				line-height: 2.75rem;
				margin-right: 1.4375rem;
				text-align: center;
				background-color: #999999;
				border-radius: 50%;
				color: #fff;
				margin-bottom: 15px;

				&:nth-child(5n+5) {
					margin-right: 0px;
				}
			}
		}

		.is_tive {
			background-color: #609CF1 !important;
		}

		.is_tive_red {
			background-color: #F65D5D !important;
		}

		.gd-parsing-p-ml {
			display: flex;
			justify-content: flex-end;

			p {
				display: flex;
				align-items: center;
				font-size: 0.75rem;

				span:nth-of-type(1) {
					width: 0.5rem;
					height: 0.5rem;
					background: rgba(96, 156, 241, 1);
					display: block;
					margin-left: 0.625rem;
					margin-right: 0.625rem;
				}
			}
			p:nth-of-type(2){
				span{
					background:rgba(246,93,93,1);
				}
			}
			p:nth-of-type(3){
				span{
					background:rgba(153,153,153,1);
				}
			}
		}
	}
</style>
