<template>
	<div class="gd-home-main">
		<div class="gd-home-top">
			<div class="gd-home-le"></div>
			<div class="gd-home-ce">初级会计职称</div>
			<div class="gd-home-rl"><img src="../../assets/icon-home-003.png" @click="handleSetup" alt=""><img src="../../assets/icon-home-002.png"
				 alt="2"></div>
		</div>
		<div class="gd-home-tab">
			<van-tabs v-model="active">
				<van-tab title="会计基础">
					<div class="gd-home-lunbo">
						<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
							<van-swipe-item>1</van-swipe-item>
							<van-swipe-item>2</van-swipe-item>
							<van-swipe-item>3</van-swipe-item>
							<van-swipe-item>4</van-swipe-item>
						</van-swipe>
					</div>
					<div class="gd-home-title">
						<p>
							<span></span>
							<span>学习计划</span>
						</p>
						<p></p>
					</div>
					<div class="gd-home-card">
						<div class="gd-home-card-row">
							<div class="gd-home-el-col">
								<h3>76</h3>
								<p>累计打卡</p>
								<p>天数</p>
							</div>
							<div class="gd-home-el-col">
								<h3>76</h3>
								<p>累计打卡</p>
								<p>天数</p>
							</div>
							<div class="gd-home-el-col">
								<h3>76</h3>
								<p>累计打卡</p>
								<p>天数</p>
							</div>
						</div>
						<van-button type="info" @click="handleDay">每日学习</van-button>
					</div>
					<div class="gd-home-title">
						<p>
							<span></span>
							<span>自主学习</span>
						</p>
						<p>更多</p>
					</div>
					<div class="gd-home-card gd-home-card-pendent">
						<div class="gd-home-pendent-col" @click="handleLearn(0)">
							<img src="../../assets/icon-home-008.png" alt="">
							<p>背诵</p>
						</div>
						<div class="gd-home-pendent-col" @click="handleLearn(1)">
							<img src="../../assets/icon-home-006.png" alt="">
							<p>微课</p>
						</div>
						<div class="gd-home-pendent-col" @click="handleLearn(2)">
							<img src="../../assets/icon-home-007.png" alt="">
							<p>练习</p>
						</div>
						<div class="gd-home-pendent-col" @click="handleLearn(3)">
							<img src="../../assets/icon-home-009.png" alt="">
							<p>真题</p>
						</div>
						<div class="gd-home-pendent-col" @click="handleLearn(4)">
							<img src="../../assets/icon-home-004.png" alt="">
							<p>资料</p>
						</div>
						<div class="gd-home-pendent-col" @click="handleLearn(5)">
							<img src="../../assets/icon-home-010.png" alt="">
							<p>单元</p>
						</div>
					</div>
					<div class="gd-home-title">
						<p>
							<span></span>
							<span>2020名师</span>
						</p>
						<p>
							<router-link to="/home/teacher">更多</router-link>
						</p>
					</div>
					<div class="gd-home-card gd-home-card-famous">
						<img src="../../assets/bg-home_teacher-001.png" alt="11">
						<div style="display: flex;flex-direction: column;width: 220px;">
							<h3>陈先生</h3>
							<p><span>注会</span><span>注税</span></p>
							<p>
								留美学者、教授。拥有二十几年财会教学
								经验，是会计教学界领军级人物。编著的
								“轻松过关”系列图书连续劲销20年。
							</p>
						</div>
					</div>
					<div class="gd-home-title">
						<p>
							<span></span>
							<span>热门考点</span>
						</p>
						<p>更多</p>
					</div>
					<div class="gd-home-site">
						<van-swipe :loop="false" :width="300">
							<van-swipe-item>
								<ul>
									<li>
										<p><img src="../../assets/icon-home-005.png" alt="">为什么会计教学差距这么大</p><img src="../../assets/icon-home-001.png"
										 alt="">
									</li>
									<li>
										<p><img src="../../assets/icon-home-005.png" alt="">为什么会计教学差距这么大</p><img src="../../assets/icon-home-001.png"
										 alt="">
									</li>
									<li>
										<p><img src="../../assets/icon-home-005.png" alt="">为什么会计教学差距这么大</p><img src="../../assets/icon-home-001.png"
										 alt="">
									</li>
								</ul>
							</van-swipe-item>
							<van-swipe-item>
								<li>
									<p><img src="../../assets/icon-home-005.png" alt="">为什么会计教学差距这么大</p><img src="../../assets/icon-home-001.png"
									 alt="">
								</li>
								<li>
									<p><img src="../../assets/icon-home-005.png" alt="">为什么会计教学差距这么大</p><img src="../../assets/icon-home-001.png"
									 alt="">
								</li>
								<li>
									<p><img src="../../assets/icon-home-005.png" alt="">为什么会计教学差距这么大</p><img src="../../assets/icon-home-001.png"
									 alt="">
								</li>
							</van-swipe-item>
							<van-swipe-item>3</van-swipe-item>
							<van-swipe-item>4</van-swipe-item>
						</van-swipe>
					</div>
					<div class="gd-home-title">
						<p>
							<span></span>
							<span>大家都在看</span>
						</p>
						<p>更多</p>
					</div>
					<div class="gd-home-sliding">
						<div class="gd-home-sliding-item" v-for="(item,index) in list" :key="index">
							<div class="gd-home-each-img">
								<img :src="item.img" alt="">
								<p>{{item.title}}</p>
							</div>
						</div>
					</div>
					<div class="gd-home-title">
						<p>
							<span></span>
							<span>学习指南</span>
						</p>
						<p>更多</p>
					</div>
					<div class="gd-home-card gd-home-card-guide">
						<ul>
							<li>
								<p><span></span>【帮助手册】学力检测让你更了解自己？</p>
								<p>7/22</p>
							</li>
							<li>
								<p><span></span>【帮助手册】学力检测让你更了解自己？</p>
								<p>7/22</p>
							</li>
							<li>
								<p><span></span>【帮助手册】学力检测让你更了解自己？</p>
								<p>7/22</p>
							</li>
							<li>
								<p><span></span>【帮助手册】学力检测让你更了解自己？</p>
								<p>7/22</p>
							</li>
						</ul>
					</div>
				</van-tab>
				<van-tab title="经济法">配置管理</van-tab>
			</van-tabs>
		</div>
		<van-popup v-model="show">
			<p>定制学习方案</p>
			<p>欢迎来到秩考培</p>
			<img src="../../assets/bg-home-001.png" alt="">
			<p>开启只能评测，获取个性化学习方案</p>
			<div class="gd-home-next">
				<van-button type="info" @click="handleMeasure">智能测评</van-button>
				<van-button type="info" @click="handleSkip">跳过测评</van-button>
			</div>
		</van-popup>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				show: true,
				list: [{
						id: 0,
						img: require('../../assets/bg-home_watch-001.png'),
						title: '如何快速学会会计'
					},
					{
						id: 1,
						img: require('../../assets/bg-home_watch-002.png'),
						title: '如何快速学会会计'
					},
					{
						id: 2,
						img: require('../../assets/bg-home_watch-003.png'),
						title: '如何快速学会会计'
					},
					{
						id: 3,
						img: require('../../assets/bg-home_watch-003.png'),
						title: '如何快速学会会计'
					}
				]
			};
		},
		methods: {
			handleSetup(){
				this.$router.push('/setup')
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleDay() {
				this.$router.push({
					path: '/daily/study'
				});
			},
			//智能测评
			handleMeasure() {
				this.show = false
				this.$router.push('/intelligentMeasure')
			},
			//跳过测评
			handleSkip() {
				this.$router.push('/home/questionnaire')
			},
			handleLearn(learn_idx) {
				switch (learn_idx) {
					case 0:

						break;
					case 1:
						this.$router.push('/home/chapterSmall')
						break;
					case 2:
						this.$router.push('/home/chapterPractice')
						break;
					case 3:

						break;
					case 4:

						break;
					case 5:
						this.$router.push('/moduleLearn/learnDvance')
						break;
				}
			}
		},
		created() {},
	};
</script>

<style lang="less">
	.gd-home-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-home-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 2.84375rem;
			font-size: 1.125rem;
			font-weight: 400;
			color: rgba(0, 0, 0, 1);
			background-color: #fff;
		}

		.gd-home-le {
			flex: 3;
		}

		.gd-home-ce {
			flex: 6;
		}

		.gd-home-rl {
			flex: 3;

			img {
				margin-right: 0.625rem;
				width: 1.3125rem;
				height: 1.3125rem;
			}
		}

		.gd-home-tab {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			margin-top: 0.625rem;
		}

		.van-tabs--line .van-tabs__wrap {
			display: flex;
			justify-content: center;
		}

		.van-tabs__nav {
			background-color: transparent;
			width: 50%;
		}

		[class*=van-hairline]::after {
			border: none;
		}

		.van-tabs__line {
			background-color: #5A8DF1;
		}

		.my-swipe .van-swipe-item {
			color: #fff;
			font-size: 20px;
			line-height: 150px;
			text-align: center;
			background-color: #39a9ed;
		}

		.gd-home-lunbo {
			width: 100%;
			height: 10rem;
			box-sizing: border-box;
			padding: 0px 0.9375rem;
			margin-top: 10px;


		}

		.gd-home-title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 1.25rem 0.9375rem;

			p:nth-of-type(1) {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				width: 6.25rem;

				span:nth-of-type(1) {
					width: 0.25rem;
					height: 0.75rem;
					background: rgba(94, 154, 240, 1);
					border-radius: 0.125rem;
					display: block;
					margin-right: 10px;
				}

				span:nth-of-type(2) {
					height: 1rem;
					font-size: 1rem;
					font-weight: 400;
					color: rgba(0, 0, 0, 1);
					line-height: 20px;
					display: block;
				}
			}

			p:nth-of-type(2) {
				font-size: 0.75rem;
				color: #6F6F6F;
			}
		}

		.gd-home-card {
			box-sizing: border-box;
			padding: 0.9375rem 0.9375rem;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 3px 14px 0px rgba(3, 0, 0, 0.09) !important;
			border-radius: 0.5rem;
			margin: 1.25rem 0.9375rem;

			.van-button {
				width: 12.5rem;
				height: 2.5rem;
				background: linear-gradient(90deg, rgba(117, 175, 255, 1), rgba(94, 154, 240, 1)) !important;
				box-shadow: 0px 3px 8px 0px rgba(69, 140, 238, 0.45);
				border-radius: 1.25rem;
				margin-top: 1.25rem;
			}
		}

		.gd-home-card-row {
			height: 6rem;
			display: flex;
			justify-content: center;

			.gd-home-el-col {
				width: 33.33%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				h3 {
					font-size: 1.6875rem;
					font-weight: bold;
					color: rgba(26, 26, 26, 1);
					line-height: 36px;
					margin-bottom: 0.625rem;
				}

				p:nth-of-type(1) {
					font-size: 15px;
				}

				p:nth-of-type(2) {
					color: #999999;
					font-size: 13px;
				}
			}

		}

		.gd-home-card-pendent {
			display: flex;
			display: -webkit-flex;
			justify-content: flex-start;
			flex-direction: row;
			flex-wrap: wrap;

			.gd-home-pendent-col {
				width: 25%;
				height: 3.75rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				img {
					width: 1.3125rem;
					height: 1.5625rem;
				}

				p {
					font-size: 0.8125rem;
					color: rgba(51, 51, 51, 1);
				}
			}
		}

		.gd-home-card-famous {
			display: flex;

			img {
				width: 5.375rem;
				height: 6.8125rem;
				border-radius: 0.1875rem;
				display: block;
				margin-right: 0.9375rem;
			}

			h3 {
				font-size: 18px;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				text-align: left;
			}

			p:nth-of-type(1) {
				display: flex;
				margin: 10px 0px;

				span {
					display: block;
					color: #49A4F2;
					font-size: 0.625rem;
				}
			}

			p:nth-of-type(2) {
				font-size: 12px;
				color: rgba(153, 153, 153, 1);
				text-align: left;
			}
		}

		.gd-home-site {
			height: 8.75rem;
			box-sizing: border-box;
			padding-left: 15px;

			.van-swipe-item {
				height: 8.75rem;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 3px 14px 0px rgba(3, 0, 0, 0.09);
				border-radius: 0.625rem;
				margin-right: 10px;
				box-sizing: border-box;
				padding: 0px 0.625rem;

				img {
					width: 0.375rem;
					height: 0.5625rem;
					margin-right: 0.625rem;
				}

				li {
					height: 2.71875rem;
					line-height: 2.71875rem;
					border-bottom: 1px solid rgba(246, 246, 246, 1);
					display: flex;
					align-items: center;
					justify-content: space-between;

					p {
						display: flex;
						align-items: center;
						font-size: 0.8125rem;
					}
				}
			}

			.van-swipe__indicators {
				bottom: -10px;
			}
		}


		.gd-home-sliding {
			display: flex;
			overflow-y: hidden;
			overflow-x: scroll;
			box-sizing: border-box;
			padding-left: 15px;
		}

		.gd-home-sliding-item {
			display: flex;
			margin-right: 8px;
		}

		.gd-home-each-img {
			width: 9.375rem;
			height: 7.125rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			img {
				width: 7.6875rem;
				height: 5rem;
				display: block;
				border-radius: 0.625rem;
				margin-bottom: 0.3125rem;
			}

			p {
				font-size: 13px;
				color: rgba(63, 63, 63, 1);
			}
		}

		.gd-home-card-guide {
			height: 12.3125rem;

			li {
				height: 2.71875rem;
				line-height: 2.71875rem;
				border-bottom: 1px solid rgba(246, 246, 246, 1);
				display: flex;
				align-items: center;
				justify-content: space-between;

				p:nth-of-type(1) {
					display: flex;
					align-items: center;
					font-size: 0.8125rem;

					span {
						width: 0.3125rem;
						height: 0.3125rem;
						background: rgba(73, 164, 242, 1);
						border-radius: 50%;
					}
				}

				p:nth-of-type(2) {
					color: rgba(102, 102, 102, 1);
					font-size: 0.75rem;
				}

			}
		}

		.van-popup {
			box-sizing: border-box;
			padding: 1.25rem 1.25rem;
			border-radius: 0.625rem;
			width: 18.75rem;

			p:nth-of-type(1) {
				font-size: 13px;

			}

			p:nth-of-type(2) {
				font-size: 12px;
				margin: 0.9375rem 0px;
			}

			img {
				width: 6.25rem;
				height: 6.25rem;
			}

			p:nth-of-type(3) {
				font-size: 12px;
				margin: 0.9375rem 0px;
				color: #ccc;
			}

			.van-button {
				border-radius: 0.625rem;
				background-color: #6BA3F5 !important;
				height: 1.875rem;
				line-height: 1.875rem;
				border: none;
			}
		}

		.gd-home-next {
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0px 1.25rem;

			.van-button {
				margin-right: 0.9375rem;

				&:last-of-type {
					margin-right: 0px;
				}
			}

		}


	}
</style>
