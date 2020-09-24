<template>
	<div class="gd-report-main">
		<navBar titles="本次测评" @onclickLeft="onClickLeft"></navBar>
		<div class="gd-report-card">
			<van-circle v-model="currentRate" :rate="30" size="120px" :speed="100" layer-color="#D9EBFF" :stroke-width="80"
			 :color="gradientColor" :text="text" />
			<span class="gd-report-card-correct">正确率</span>
			<p class="gd-report-card-rank">你的排名第32位</p>
			<p class="gd-report-card-time">用时：15分钟</p>
			<div class="gd-report-card-bom">
				<van-row>
					<van-col span="8">
						<p>15</p>
						<p>正确提数</p>
					</van-col>
					<van-col span="8">
						<p>3</p>
						<p>错误题数</p>
					</van-col>
					<van-col span="8">
						<p>2</p>
						<p>未做题数</p>
					</van-col>
				</van-row>
			</div>
			<p class="gd-report-card-pai" @click="handleView">查看当前排行榜</p>
		</div>
		<div class="gd-report-card ">
			<div style="display: flex; margin-top: 3.125rem;">
				<div class="gd-report-card-left">
					<p><span></span>逻辑：0</p>
					<p><span></span>细心：0</p>
					<p><span></span>记忆：0</p>
					<p><span></span>速度：0</p>
					<p><span></span>计算：0</p>
					<p><span></span>概念：0</p>
				</div>
				<div class="chart-wrap"></div>
			</div>
			<router-link to="/daily"><van-button type="info">定制学习计划</van-button></router-link>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	import navBar from '@/components/header/index.vue'
	export default {
		components:{
			navBar
		},
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
				index1: [], // 问题1 已被选中答案index(多选)
				index2: [],
				index3: [],
				index4: [],
				index5: [],
				index6: [],
				// 雷达图的数据
				radarOption: {
					splitNumber: 3,
					radar: {
						// shape: 'circle',
						center: ['50%', '50%'],
						name: {
							textStyle: {
								// 文字样式
								color: '#fff',
								fontWeight: 'bold'
							}
						},
						indicator: [
							// 雷达图的指示器，用来指定雷达图中的多个变量（维度）
							{
								name: '逻辑',
								max: 3,
								color: '#76BE98',
							},
							{
								name: '细心',
								max: 3,
								color: '#FFC071',
							},
							{
								name: '速度',
								max: 3,
								color: '#E1708E',
							},
							{
								name: '概念',
								max: 3,
								color: '#856FDC',
							},
							{
								name: '计算',
								max: 3,
								color: '#5D9BF0',
							},
							{
								name: '记忆',
								max: 3,
								color: '#78BEF2',
							}

						]
					},
					// 雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
					splitArea: {
						show: true,
						areaStyle: {
							color: 'rgba(255,255,255,0)' // 图表背景的颜色
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							width: 1,
							color: 'rgba(131,141,158,.1)' // 设置网格的颜色
						}
					},
					series: [{
						name: '雷达图', // tooltip中的标题
						type: 'radar', // 表示是雷达图
						symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
						symbolSize: 8, // 拐点的大小
						areaStyle: {
							normal: {
								width: 1,
								opacity: 0.2
							}
						},
						data: [{
							// 设置各个指标原始值
							value: [2, 3, 1, 2, 1, 0],
							// 设置区域边框和区域的颜色
							itemStyle: {
								normal: {
									color: 'rgba(172,206,255,1)',
									lineStyle: {
										color: 'rgba(172,206,255,1)'
									}
								}
							}
						}]
					}]
				},
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			handleView(){
				this.$router.push('/home/detectParsing')
			}
		},
		mounted() {
			//设置背景单一样式
			
			this.$nextTick(() => {
				// 雷达图显示的标签
				const chartObj = echarts.init(this.$el.querySelector('.chart-wrap'))
				// 下面是根据6道测评题目动态获取雷达图各指标的值,
				// 第五题 第二个选项才是正常  其他都是第一个选项正常  this.index1 问题一选中的index数组
				this.radarOption.series[0].data[0].value[0] = this.index1.includes(0) ? 0 : this.index1.length
				this.radarOption.series[0].data[0].value[1] = this.index2.includes(0) ? 0 : this.index2.length
				this.radarOption.series[0].data[0].value[2] = this.index3.includes(0) ? 0 : this.index3.length
				this.radarOption.series[0].data[0].value[3] = this.index4.includes(0) ? 0 : this.index4.length
				this.radarOption.series[0].data[0].value[4] = this.index5.includes(1) ? 0 : 3
				this.radarOption.series[0].data[0].value[5] = this.index6.includes(0) ? 0 : (+this.index6.length === 1 ? 1.5 : 3)
				// 初始化雷达图
				chartObj.setOption(this.radarOption)
			})

		},
		beforeDestroy() {

		}
	}
</script>

<style lang="less">
	.gd-report-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-report-card {
			margin: 0.625rem 0.9375rem;
			height: 25.3125rem;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 3px 14px 0px rgba(3, 0, 0, 0.09);
			border-radius: 0.625rem;
			position: relative;

			.gd-report-card-correct {
				position: absolute;
				top: 6.5rem;
				left: 50%;
				font-size: 12px;
				transform: translateX(-50%);
			}

			.van-circle {
				margin-top: 1.875rem;
			}

			.gd-report-card-rank {
				color: #666666;
				font-size: 0.9375rem;
				margin-top: 0.9375rem;
			}

			.gd-report-card-time {
				font-size: 13px;
				color: #666666;
				margin: 10px;
			}
		}

		.gd-report-card-bom {
			width: 100%;
			margin-top: 3.75rem;

			p:nth-of-type(1) {
				font-size: 20px;
				color: #333;
				font-weight: bold;
			}

			p:nth-of-type(2) {
				font-size: 13px;
				margin-top: 0.625rem;
			}
		}

		.gd-report-card-pai {
			height: 2.71875rem;
			line-height: 2.71875rem;
			color: #609CF1;
			font-size: 12px;
			margin-top: 1.875rem;
			border-top: 1px solid rgba(245, 245, 245, 1);
		}

		.gd-report-card-left {
			width: 100px;
			display: flex;
			flex-direction: column;
			align-items: center;

			p {
				display: flex;
				align-items: center;
				font-size: 0.8125rem;
				margin-bottom: 0.9375rem;

				span {
					display: block;
					width: 7px;
					height: 7px;
					border-radius: 50%;
					background-color: #76BE98;
					margin-right: 0.625rem;
				}
			}
		}

		.gd-report-card-p {
			display: flex;
			box-sizing: border-box;
			padding-top: 3.125rem;
		}

		.chart-wrap {
			width: 230px;
			height: 230px;
		}

		.van-button {
			width: 12.5rem;
			height: 2.5rem;
			background: linear-gradient(90deg, rgba(117, 175, 255, 1), rgba(94, 154, 240, 1)) !important;
			box-shadow: 0px 3px 8px 0px rgba(69, 140, 238, 0.45);
			border-radius: 1.25rem;
			margin-top: 1.25rem;
			border: none;
		}
	}
</style>
