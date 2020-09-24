<template>
	<div class="gd-question-main">
		<navBar titles="问卷调查" @onclickLeft="onClickLeft"></navBar>
		<div class="gd-interlligent-card">
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
		</div>
		<div class="gd-question-next" @click="handleNext">下一步</div>
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
			//返回
			onClickLeft() {
				this.$router.go(-1)
			},
			//点击切换
			handleActive(index) {
				//点击切换 变量的值 
				this.isactive = index;
				console.log(index);
			},
			handleNext() {
				this.$router.push('/home/selectChapters')
			}
		},
	}
</script>

<style lang="less">
	.gd-question-main {

		@import "../../../common/measure.less";
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-interlligent-card {
			margin-top: 1.25rem;
		}

		.gd-question-next {
			position: fixed;
			height: 3rem;
			line-height: 3rem;
			color: #fff;
			bottom: 0px;
			width: 100%;
			font-size: 0.875rem;
			background: rgba(96, 156, 241, 1);
		}
	}
</style>
