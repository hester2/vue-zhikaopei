<template>
	<div class="gd-measure-main">
		<navBar titles="测评" @onclickLeft="onClickLeft"></navBar>
		<div class="gd-side-progress">
			<van-progress pivot-text="" color="#609CF1" :percentage="20" />
			<p class="gd-side-progress-p">2/10</p>
		</div>
		<div class="gd-side-card">
			<div class="gd-measure-img" v-if="choose==true">单选</div>
			<div class="gd-measure-img gd-measure-img-select" v-else-if="choose==false">多选</div>
			<div class="gd-measure-img gd-measure-img-if" v-else-if="choose==false">判断</div>
			<p>应收票据贴现时，贴现息计入( )</p>
			<div class="gd-side-li" v-for="(item,index) in selectList" @click="handleActive(item,index)" :class="{'bgcActive':item.isshow}">
				<p>{{item.value}}</p>
				{{item.title}}
			</div>
			<van-button type="info" @click="handleOver">提交并进入下一题</van-button>
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
				choose: true,
				selectList: [{
					value: 'A',
					title: '银行存款'
				}, {
					value: 'B',
					title: '财务费用'
				}, {
					value: 'C',
					title: '原材料'
				}, {
					value: 'D',
					title: '材料采购'
				}]
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			handleOver() {
				this.$router.push('/home/report')
			},
			handleActive(v, index) {
				this.selectList.forEach(function(obj) {
					obj.isshow = false;
				});
				v.isshow = !v.isshow;
			}
		},
		created() {
			return this.selectList.map(item => {
				this.$set(item, "isshow", false)
				return item
			})
		},
	}
</script>

<style lang="less">
	
		@import "../../../common/measure.less";
	.gd-measure-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;


		.gd-measure-img {
			position: absolute;
			left: 0rem;
			top: 0rem;
			width: 3rem;
			height: 2.5625rem;
			line-height: 2.5625rem;
			font-size: 13px;
			color: #fff;
			box-sizing: border-box;
			padding-right: 0.3125rem;
			line-height: 2.5625rem;
			background: url(../../../assets/bg-measure-003.png) no-repeat;
			background-size: 90% 100%;
		}

		.gd-measure-img-select {
			background: url(../../../assets/bg-measure-002.png) no-repeat;
		}

		.gd-measure-img-if {
			background: url(../../../assets/bg-measure-001.png) no-repeat;
		}
	}
</style>
