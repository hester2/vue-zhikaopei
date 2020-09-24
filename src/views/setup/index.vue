<template>
	<div class="gd-setup-main">
		<div class="gd-setup-top">
			<div class="gd-setup-row" v-if="loginUp==true">
				<img src="../../assets/bg-setup-avtar.png" alt="">
				<p>
					<span>点击登录</span>
					<span>登录可查看更多信息</span>
				</p>
				<p>
					<van-icon name="arrow" />
					<span v-if="loginUp==false">剩余三天体验期</span>
				</p>
			</div>
		</div>
		<div class="gd-setup-ml">
			<div class="gd-setup-col">
				<ul>
					<li>
						<p><img src="../../assets/bg-setup-003.png" alt="">学习进度</p>
						<p>
							<van-icon name="arrow" />
						</p>
					</li>
					<li>
						<p><img src="../../assets/bg-setup-004.png" alt="">学习记录</p>
						<p>
							<van-icon name="arrow" />
						</p>
					</li>
				</ul>
			</div>
			<div class="gd-setup-col gd-setup-col-b">
				<ul>
					<li>
						<p><img src="../../assets/bg-setup-005.png" alt="">每周结算</p>
						<p>
							<van-icon name="arrow" />
						</p>
					</li>
				</ul>
			</div>
			<div class="gd-setup-col gd-setup-col-h">
				<li>
					<p><img src="../../assets/bg-setup-006.png" alt="">我的收藏</p>
					<p>
						<van-icon name="arrow" />
					</p>
				</li>
				<li>
					<p><img src="../../assets/bg-setup-007.png" alt="">我的错题</p>
					<p>
						<van-icon name="arrow" />
					</p>
				</li>
				<li>
					<p><img src="../../assets/bg-setup-008.png" alt="">我的答疑</p>
					<p>
						<van-icon name="arrow" />
					</p>
				</li>
			</div>
			<div class="gd-setup-col gd-setup-col-b">
				<li>
					<p><img src="../../assets/bg-setup-009.png" alt="">意见反馈</p>
					<p>
						<van-icon name="arrow" />
					</p>
				</li>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loginUp: true
			}
		},
		mounted() {
			//设置背景单一样式
			document.querySelector("body").setAttribute("style",
				"background:#F9FCFE; overflow-x: hidden;");
		},
		beforeDestroy() {
			document.querySelector("body").removeAttribute("style");
		}
	}
</script>

<style lang="less">
	.gd-setup-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #F9FCFE;
		overflow-x: hidden;

		.gd-setup-top {
			height: 11.875rem;
			background: url(../../assets/bg-setup-002.png);
			display: flex;
			align-items: center;
			box-sizing: border-box;
			padding: 0.625rem 0.9375rem;

			.gd-setup-row {
				width: 100%;
				display: flex;
				justify-content: center;

				img {
					width: 5rem;
					height: 5rem;
					flex: 2;
				}

				p:nth-of-type(1) {
					display: flex;
					flex-direction: column;
					height: 5rem;
					justify-content: center;
					margin-left: 0.9375rem;
					flex: 5;

					span:nth-of-type(1) {
						font-size: 18px;
						color: #fff;
						text-align: left;
					}

					span:nth-of-type(2) {
						font-size: 12px;
						color: #fff;
						text-align: left;
						margin-top: 0.3125rem;
					}
				}

				p:nth-of-type(2) {
					display: flex;
					align-items: center;
					flex: 1;

					span {
						font-size: 12px;
						color: #fff;
						display: block;
						background: linear-gradient(90deg, rgba(255, 202, 75, 1), rgba(255, 150, 37, 1));
						border-radius: 13px;
						width: 6.75rem;
					}

					.van-icon-arrow::before {
						color: #fff;
						font-size: 0.75rem;
					}
				}
			}
		}

		.gd-setup-ml {
			margin: 0.625rem 0.9375rem;
			margin-top: -2.5rem;

			.gd-setup-col {
				height: 6.25rem;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 3px 14px 0px rgba(3, 0, 0, 0.09);
				border-radius: 0.625rem;
				box-sizing: border-box;
				padding: 0px 0.9375rem;
				margin-bottom: 0.9375rem;

				li {
					height: 3.0625rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: 1px solid rgba(245, 245, 245, 1);

					&:last-of-type {
						border: none;
					}

					p:nth-of-type(1) {
						flex: 8;
						text-align: left;
						display: flex;
						align-items: center;
						color: rgba(102, 102, 102, 1);
						font-size: 12px;

						img {
							width: 1.0625rem;
							height: 1.03125rem;
							margin-right: 0.625rem;
						}
					}

					p:nth-of-type(2) {
						flex: 4;
						text-align: right;

						.van-icon-arrow::before {
							font-size: 13px;
							color: #666666;
						}
					}
				}
			}

			.gd-setup-col-b {
				height: 3.125rem;
			}

			.gd-setup-col-h {
				height: 9.25rem;
			}
		}
	}
</style>
