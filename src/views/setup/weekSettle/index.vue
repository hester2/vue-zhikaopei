<template>
	<div class="gd-settle-main">
		<van-nav-bar title="" left-text="" right-text="" :border="false" left-arrow @click-left="onClickLeft" @click-right="" />
		<div class="gd-settle-card">
			<ul>
				<li>
					<p><span></span>微课数</p>
					<p>26个</p>
				</li>
				<li>
					<p><span></span>练习数</p>
					<p>26个</p>
				</li>
				<li>
					<p><span></span>点亮数</p>
					<p>26个</p>
				</li>
				<li>
					<p><span></span>学习时长</p>
					<p>26个</p>
				</li>
				<li>
					<p><span></span>学习包</p>
					<p>26个</p>
				</li>
			</ul>
			<van-button type="info">更新学习计划</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			//设置背景单一样式
			document.querySelector("body").setAttribute("style",
				"background: linear-gradient(90deg,rgba(117,175,255,1),rgba(94,154,240,1)); overflow-x: hidden;");
		},
		beforeDestroy() {
			document.querySelector("body").removeAttribute("style");
		}
	}
</script>

<style lang="less">
	.gd-settle-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: linear-gradient(90deg, rgba(117, 175, 255, 1), rgba(94, 154, 240, 1));
		overflow-x: hidden;

		.van-icon-arrow-left::before {
			color: #fff;
		}

		.van-nav-bar {
			background-color: transparent;
		}

		.gd-settle-card {
			margin: 0px 0.9375rem;
			margin-top: 10.9375rem;
			box-sizing: border-box;
			padding: 0.625rem 0.9375rem;
			height: 395px;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 3px 14px 0px rgba(3, 0, 0, 0.09);
			border-radius: 10px;

			li {
				border-bottom: 1px solid rgba(246, 246, 246, 1);
				height: 2.65625rem;
				display: flex;
				justify-content: space-between;
				align-items: center;

				p:nth-of-type(1) {
					font-size: 0.8125rem;
					display: flex;
					align-items: center;

					span {
						width: 0.375rem;
						height: 0.375rem;
						display: block;
						background-color: #609CF1;
						border-radius: 50%;
						margin-right: 0.3125rem;
					}
				}

				p:nth-of-type(2) {
					color: #FF7800;
					font-size: 0.8125rem;
				}
			}
		}

		.van-button {
			width: 12.5rem;
			height: 2.5rem;
			background: linear-gradient(90deg, rgba(117, 175, 255, 1), rgba(94, 154, 240, 1)) !important;
			box-shadow: 0px 3px 8px 0px rgba(69, 140, 238, 0.45);
			border-radius: 1.25rem;
			margin-top: 3.125rem;
			border: none;
		}
	}
</style>
