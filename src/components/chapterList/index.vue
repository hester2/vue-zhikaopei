<template>
	<div>
		<van-collapse-item v-for="(item,index) in currentItem" :key="index" :title="item.title" :name="item.title">
			<p class="gd-chapter-section" v-for="(item,index) in item.children" :key="index" @click="handleDetail(item.name)">{{item.name}}</p>
		</van-collapse-item>

	</div>
</template>

<script>
	export default {
		name: 'chapterList',
		props: {
			currentItem: Array
		},
		watch: {
			currentItem(val) {
				this.Current = val
			}
		},
		data() {
			return {
				localCurrent: {}
			}
		},
		methods: {
			handleDetail(value) {
				this.$emit('handleDetail', value)
			}
		},
		created() {
			this.Current = this.currentItem
		},
	}
</script>

<style lang="less">
	.van-collapse {
		.van-collapse-item {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 14px 0px rgba(3, 0, 0, 0.09);
			border-radius: 0.625rem;
			margin: 0.625rem 0px;

			.van-collapse-item__content {
				background: transparent
			}
		}

		.van-cell {
			background: transparent;
			padding: 0.9375rem 1rem;
		}

		.gd-chapter-section {
			text-align: left;
			padding: 0.625rem 0.9375rem;

		}
	}
</style>
