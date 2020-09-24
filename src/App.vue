<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App',
		mounted() {
			//设置背景单一样式
			document.querySelector("body").setAttribute("style", "background-color: #F9FCFE; overflow-x: hidden;");
		},
		beforeDestroy() {
			document.querySelector("body").removeAttribute("style");
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		width: 100%;
	}

	* {
		padding: 0px;
		margin: 0px;
	}

	ul,
	li {
		list-style-type: none;
		padding: 0px;
		margin: 0px;
	}

	a {
		color: #333;
		text-decoration: none;
	}

	h3,
	a {
		text-align: left;
		font-size: 0.8125rem;
	}

	.van-nav-bar .van-icon {
		color: #333;
	}

	.van-tab--active .van-tab__text {
		font-size: 16px;
		color: #333333;
	}

	.van-tab__text {
		color: #999999;
	}

	.van-button {
		border: none;
		border-radius: 1.25rem;
	}

	/* 卡片样式 */
	.gd-common-card {
		box-sizing: border-box;
		padding: 0.9375rem 0.9375rem;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 3px 14px 0px rgba(3, 0, 0, 0.09) !important;
		border-radius: 0.5rem;
		margin: 1.25rem 0.9375rem;

	}

	/* 题目选中样式公共 */
	.bgcActive {
		color: #609CF1;
	}

	.bgcActive p {
		background-color: #609CF1 !important;
		color: #fff;
	}
</style>
