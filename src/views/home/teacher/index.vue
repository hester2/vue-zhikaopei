<template>
	<div class="gd-teacher-main">
		<navBar titles="名师" @onclickLeft=""></navBar>
		<div class="gd-common-card gd-teacher-card" v-for="(item,index) in teacherList" :key="index">
			<img src="../../../assets/bg-home_teacher-001.png" alt="">
			<div class="gd-teacher-right">
				<h3>{{item.name}}</h3>
				<p>{{item.local}}</p>
				<p>{{item.locals}}</p>
				<p>{{item.diate}}</p>
				<p>{{item.codeName}}</p>
			</div>
		</div>
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
                teacherList:[
					{
						name:'田明',
						local:'注会《财务成本管理》',
						locals:'注会《公司战略与风险管理》',
						diate:'中级《中级财务管理》',
						codeName:'经济学博士、副教授。持有注册会计师、 注册资产评估师、注册税务师'
					},{
						name:'田明',
						local:'注会《财务成本管理》',
						locals:'注会《公司战略与风险管理》',
						diate:'中级《中级财务管理》',
						codeName:'经济学博士、副教授。持有注册会计师、 注册资产评估师、注册税务师'
					}
				]
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
		}
	}
</script>

<style lang="less">
	.gd-teacher-main {
		.gd-teacher-card {
			display: flex;
			margin-bottom: 0.9375rem;

			img {
				width: 6.0rem;
				height: 7.8125rem;
			}

			.gd-teacher-right {
				margin-left: 0.6rem;
				h3 {
					text-align: left;
					font-size: 1rem;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
					margin-bottom: 0.1875rem;
				}
				p{
					text-align: left;
					font-size: 0.75rem;
					color:#49A4F2 ;
					line-height:1.25rem;
				}
				p:nth-of-type(4){
					font-size: 0.8125rem;
					color: #999999;
					margin-top: 0.375rem;
				}
			}
		}
	}
</style>
