<template>
	<div class="gd-chapter-main">
		<navBar titles="微课章节" @onclickLeft="onClickLeft"></navBar>
		<van-tabs v-model="active">
			<van-tab title="顺序模式">
				<van-collapse v-model="activeNames">
				     <chapter-list :currentItem="chapter" @handleDetail="handleDetail"></chapter-list>
				</van-collapse>
			</van-tab>
			<van-tab title="随机模式">内容 2</van-tab>
		</van-tabs>
		<div class="gd-chapter-fied">
			<div class="gd-chapter-bgc">
				<p>以为您新增了知识点、好题推荐，赶紧 开启智能模式练习吧！</p>
				<van-button type="info">开启智能推荐</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import navBar from '@/components/header/index.vue';
	import chapterList from '@/components/chapterList/index.vue'
	export default {
		components: {
			navBar,
			chapterList
		},
		data() {
			return {
				active: 0,
				activeNames: [],
				chapter: [{
						"title": '第一张 总论',
						"children": [{
								"name": '第一节 法律基础',
							},
							{
								"name": '第二节 经济纠纷的解决途径'
							},
							{
								"name": '第三节 法律责任'
							}
						]
					},
					{
						"title": '第二章 会计法律制度',
						"children": []
					}, {
						"title": '第三章 支付结算法律制度',
						"children": []
					}, {
						"title": '第四章 增值税、消费税法律制度',
						"children": []
					}, {
						"title": '第五章 企业/个人所得税法律制度',
						"children": []
					}, {
						"title": '第六章 其它税收法律制度',
						"children": []
					}, {
						"title": '第七章 税收征收管理法律制度',
						"children": []
					}, {
						"title": '第八章 劳动合同与社会保险法律制度',
						"children": []
					}
				]
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			handleDetail(value){
				this.$router.push({path:'/daily/dailySmall'})
			}
		},
	}
</script>

<style lang="less">
	@import "../../../common/measure.less";
</style>
