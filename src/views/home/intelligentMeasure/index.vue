<template>
	<div class="gd-interlligent-main">
		<div class="gd-interlligent-top">
			<navBar titles="智能评测" @onclickLeft="onClickLeft"></navBar>
			<p>1、本测试共40题，预计需要40分钟；</p>
			<p>2、为获取最佳推荐方案，请认真答题；</p>
			<p>3、答题结束，系统将根据结果生成每日学习内容。</p>
		</div>
		<div class="gd-interlligent-card">
			<p class="gd-interlligent-card-p">为了测试精确，请认真选择</p>
			<p class="gd-interlligent-card-gender">性别</p>
			<div>
				<van-radio-group v-model="radio" direction="horizontal">
					<van-radio name="1" icon-size="16px">男</van-radio>
					<van-radio name="2" icon-size="16px">女</van-radio>
				</van-radio-group>
			</div>
			<p class="gd-interlligent-card-gender">职业</p>
			<div class="gd-interlligent-card-col">
				<li v-for='(item,index) in arrList' :class='{active:index==isactive}' @click='handleActive(index)'>{{item}}</li>
			</div>
			<p class="gd-interlligent-card-gender">专业</p>
			<div class="gd-interlligent-card-col">
				<li v-for='(item,index) in professional' :class='{active:index==isactive}' @click='handleActive(index)'>{{item}}</li>
			</div>
			<p class="gd-interlligent-card-gender">考试次数</p>
			<div class="gd-interlligent-card-col">
				<li v-for='(item,index) in numList' :class='{active:index==isactive}' @click='handleActive(index)'>{{item}}</li>
			</div>
			<p class="gd-interlligent-card-test">已有<span>112568</span>人测试</p>
			<van-button type="info" @click="handleStart">开启测评</van-button>
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
				radio: '1',
				isactive: 0, //默认第一个有样式
				arrList: ['学生', '在职', '其它'],
				professional: ['会计', '经营类', '非经营类'],
				numList: ['首回', '一次', '二次', '其它'],
			}
		},
		methods: {
			handleActive(index) {
				//点击切换 变量的值 赋值为 index
				this.isactive = index;
				console.log(index);
			},
			handleStart(){
				this.$router.push('/measurement')
			},
			onClickLeft() {
				this.$router.go(-1)
			},
		},
	}
</script>

<style lang="less">
	@import "../../../common/measure.less";
	.gd-interlligent-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;
		
		.van-nav-bar .van-icon{
			color: #fff;
		}

		.gd-interlligent-top {
			height: 14rem;
			background: url(../../../assets/bg-inter-001.png);
			background-size: 90% 100%;

			p {
				font-size: 0.75rem;
				color: #fff;
				text-align: left;
				line-height: 1.875rem;
				margin-left: 1.25rem;
			}
		}

		.van-nav-bar {
			background-color: transparent;
			margin-bottom: 1.25rem;
		}

		.van-nav-bar__title {
			color: #fff;
		}

		
	}
</style>
