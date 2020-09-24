<template>
	<div class="gd-side-main">
		<navBar titles="前侧" @onclickLeft="onClickLeft"></navBar>
		<div class="gd-side-toast" ><van-icon name="cross" />通过前测即可跳过微课，前测预计时间2分钟</div>
		<div class="gd-side-progress">
			<van-progress pivot-text="" color="#609CF1" :percentage="20" />
			<p class="gd-side-progress-p">2/10</p>
		</div>
		<div class="gd-side-card">
			<div class="gd-side-img" >单选</div>
			<div class="gd-side-card-img">应收票据贴现时，贴现息计入( ) 
			<div @click="handleShow">
				<img src="../../../assets/bg-setup-006.png"  v-if="collection" alt="">
				<img v-if="!collection" src="../../../assets/icon-side-002.png" alt=""></div>
			</div>
			<div class="gd-side-li" v-for="(item,index) in selectList" @click="handleActive(item)" :class="{'bgcActive':item.isshow}">
				<p>{{item.value}}</p>
				{{item.title}}
			</div>
		</div>
		<div class="gd-side-btn" @click="handleOver">提交并进入下一题</div>
	</div>
</template>

<script>
	//van轻提示 引入
	import {
		Toast
	} from 'vant';
	import navBar from '@/components/header/index.vue'
	export default {
		components:{
			navBar
		},
		data() {
			return {
				collection: true,
				currentOne: false, //选中
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
				this.$router.push('/daily/dailySmall')
			},
			//收藏
			handleShow() {
				this.collection = !this.collection
				if (this.collection == false) {
					Toast('收藏成功');
				} else {
					Toast('取消收藏');
				}
			},
			handleActive(v) {
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
	.gd-side-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.gd-side-img {
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


		.gd-side-card-img {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 15px 10px;
			margin-left: 3.125rem;
			font-size: 0.8125rem;

			img {
				width: 1.0625rem;
				height: 1.03125rem;
				margin-right: 0.625rem;
			}
		}

		.gd-side-btn {
			height: 2.96875rem;
			line-height: 2.96875rem;
			position: fixed;
			color: #fff;
			font-size: 1rem;
			bottom: 0px;
			width: 100%;
			background: rgba(96, 156, 241, 1);
		}
	}
</style>
