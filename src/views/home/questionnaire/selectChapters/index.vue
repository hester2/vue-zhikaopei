<template>
	<div class="gd-selectChapter-main">
		<navBar titles="选择章节" @onclickLeft="onClickLeft" :rightText="checkAll" @onclickRight="onCheckAll(checkAll)"></navBar>
		<p class="gd-selectChapter-cross" v-show="closeTitle"><van-icon name="cross"  @click="handleDlete"/>请根据实际情况，勾选不熟悉的章节</p>
		<van-tabs v-model="active">
			<van-tab title="会计基础">
				<van-checkbox-group v-model="result" ref="checkboxGroup">
					<van-checkbox v-for="(item,index) in chaperList" :key="index" :name="item.name" @click="handleChange(item.name)">{{item.name}}</van-checkbox>
				</van-checkbox-group>
			</van-tab>
			<van-tab title="经济法">内容 2</van-tab>
		</van-tabs>
		<van-button class="gd-selectChapter-btn" :disabled="result.length>1?false:true"  @click="handleNext" >下一步</van-button>
	</div>
</template>

<script>
	import navBar from '@/components/header/index.vue'
	export default {
		components: {
			navBar
		},
		data() {
			return {
				active: 0,
				result: [],
				checkAll: '全选',
				closeTitle:true,
				chaperList: [{
					value: 0,
					name: '第一章 总论'
				}, {
					value: 1,
					name: '第二章 会计法律制度'
				}, {
					value: 2,
					name: '第三章 支付结算法律制度'
				}]
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			onCheckAll(text) {
				if (text == '全选') {
					this.$refs.checkboxGroup.toggleAll(true);
				console.log(this.$refs.checkboxGroup.value)
					this.checkAll='取消'
				} else if (text == '取消') {
					this.$refs.checkboxGroup.toggleAll();
					this.checkAll='全选'
				}
			},
			handleDlete(){
				this.closeTitle=false
			},
			handleChange(value) {
                   console.log(value)
			},
			handleNext(){
				//提交进行下一步
				console.log(this.result)
			}
		},
		created() {

		},
	}
</script>

<style lang="less">
	.gd-selectChapter-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #F9FCFE;
		overflow-x: hidden;

		.van-nav-bar .van-icon {
			color: #333;
		}

		.van-tabs {
			box-sizing: border-box;
			padding: 0px 0.9375rem;
		}

		.van-hairline--top-bottom::after,
		.van-hairline-unset--top-bottom::after {
			border: none;
		}

		.van-tabs__nav {
			background-color: transparent;
			width: 50%;

			.van-tab__text {
				color: #999999;
			}
		}

		.van-tabs__line {
			width: 1.5rem !important;
			background-color: #5A8DF1;
		}

		.van-tab--active {
			font-size: 1rem;

			.van-tab__text {
				color: #333333 !important;
			}
		}

		.van-tab {
			width: 83px !important;
		}

		.van-tabs__content {
			margin-top: 1.5625rem;
		}

		.van-checkbox {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 0.875rem 0px rgba(3, 0, 0, 0.09);
			border-radius: 0.625rem;
			padding: 0.9375rem 0.9375rem;
			margin-bottom: 1.25rem;
		}

		.gd-selectChapter-btn {
			width: 100%;
			position: fixed;
			bottom: 0px;
			font-size: 0.875rem;
			color: #fff;
			height: 3rem;
			line-height: 3rem;
			border-radius: 0rem;
			background: rgba(96, 156, 241, 1);
		}
		.gd-selectChapter-cross{
			height: 2.1875rem;
			line-height:2.1875rem;
			background:#FAEFE5;
			box-sizing: border-box;
			padding: 0.375rem 0.9375rem;
			color:rgba(255,120,0,1);
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 0.8125rem;
			.van-icon{
				margin-right: 0.625rem;
			}
		}
	}
</style>
