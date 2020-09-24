<template>
	<div class="gd-tion-main">
		<van-nav-bar title="学习情况" left-text="" right-text=""  left-arrow @click-left="onClickLeft" @click-right="" />
		<div class="gd-tion-clock">
			<h3>第一章 总论</h3>
			<p>打卡成功，将电亮单元(学习包)</p>
			<div class="gd-tion-card">
                 <p v-for="item in 30">{{item}}</p>
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
	.gd-tion-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-tion-clock {
			margin: 1.25rem 0.9375rem;
			height: 19.375rem;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 3px 14px 0px rgba(3, 0, 0, 0.09);
			border-radius: 0.625rem;
			box-sizing: border-box;
			padding: 0.9375rem 0.9375rem;

			h3 {
				font-size: 0.9375rem;
				color: rgba(0, 0, 0, 1);
				line-height: 1.375rem;
				text-align: left;
			}

			p {
				font-size: 0.8125rem;
				color: rgba(51, 51, 51, 1);
				line-height: 1.375rem;
				text-align: left;
				margin-top: 0.625rem;
			}

			.gd-tion-card {
				display: flex;
				display: -webkit-flex;
				justify-content: flex-start;
				flex-direction: row;
				flex-wrap: wrap;
				border-top:1px solid rgba(246,246,246,1); 
				margin-top: 0.625rem;
				p{
					width: 2.125rem;
					height: 2.125rem;
					line-height: 2.125rem;
					border-radius: 50%;
					text-align: center;
					&:first-of-type{
						margin-left:2.125rem ;
					}
					
					&:nth-of-type(1){
						background-color:#5A8DF1 ;
						color: #fff;
					}
				}
			}
		}
	}
</style>
