<template>
	<div class="gd-small-main">
		<navBar titles="微课" @onclickLeft="onClickLeft"></navBar>
		<div class="gd-small-video" @click="playVideo()">
			<video :src="videoSrc" id="videoPlay" poster="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3179286749,3164877294&fm=26&gp=0.jpg"
			 width="100%" height="100%" v-show="true" class="video">您的浏览器不支持 video 视屏播放。</video>
		</div>
		<div class="gd-small-title">
			<h3>加计扣除、应纳税所得额抵扣</h3>
			<div class="gd-small-play">
				<p><span>2.3</span>万次播放</p>
				<p><span>3652</span>人学习</p>
			</div>
			<p class="gd-small-jianjie">
				加计扣除、应纳税所得额抵扣、加速折旧、减计收入、 应纳税额抵免、债券利息减免税、企业所得税征收...
			</p>
		</div>
		<div class="gd-small-fied">
			<p><img src="../../../assets/bg-setup-006.png" alt="">收藏</p>
			<p @click="handleOver">下一环节</p>
		</div>
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
				videoSrc: 'https://video.4i-edu.com/sv/3e54d89e-170aa375adf/3e54d89e-170aa375adf.mp4' //获取视频播放资源
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			playVideo() {
				var vdo = document.getElementById("videoPlay");
				vdo.play();
			},
			handleOver() {
				this.$router.push('/daily/dailyComplete')
			}
		},
	}
</script>

<style lang="less">
	.gd-small-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-small-video {
			height: 13.8125rem;
			width: 100%;
			background-color: #fff;
		}

		.gd-small-title {
			margin: 0.625rem 0.9375rem;

			h3 {
				font-size: 1.125rem;
				font-weight: bold;
				color: #333;
				text-align: left;
				margin-top: 0.625rem;
			}
		}

		.gd-small-play {
			margin: 1.25rem 0px;
			display: flex;

			p:nth-of-type(1) {
				font-size: 0.75rem;
				color: #999999;
				text-align: left;

				span {
					font-size: 0.75rem;
					color: #609CF1;
				}
			}

			p:nth-of-type(2) {
				font-size: 0.75rem;
				color: #999999;
				text-align: left;
				margin-left: 0.9375rem;

				span {
					font-size: 0.75rem;
					color: #FF7800 !important;
				}
			}
		}

		.gd-small-jianjie {
			margin: 0.9375rem 0rem;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			text-align: left;
			font-size: 0.875rem;
		}

		.gd-small-fied {
			position: fixed;
			bottom: 0px;
			width: 100%;
			height: 3rem;
			display: flex;

			p:nth-of-type(1) {
				flex: 3;
				height: 3rem;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 14px;
				background-color: #fff;

				img {
					width: 1.0625rem;
					height: 1.0625rem;
					margin-right: 0.3125rem;
				}
			}

			p:nth-of-type(2) {
				flex: 9;
				height: 3rem;
				font-size: 14px;
				background:rgba(96,156,241,1);
				color: #fff;
				line-height: 3rem;
			}
		}
	}
</style>
