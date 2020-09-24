import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/daily',
		name: 'daily',
		component: () => import('@/views/daily'),
		 meta: {
		   title: '学习计划'
		 },
	},
	{
		path: '/daily/basis',
		name: 'basis',
		component: () => import('@/views/daily/basis'),
		 meta: {
		  title: '基础阶段'
		},
	},
	{
		path: '/setup/learnProcess',
		name: 'learnProcess',
		 meta: {
		  title: '学习进度'
		},
		component: () => import('@/views/setup/learnProcess/index.vue'),
	},{
		path: '/setup/learnSituation',
		name: 'learnSituation',
		meta: {
		  title: '学习情况'
		},
		component: () => import('@/views/setup/learnProcess/learnSituation/index.vue'),
	},{
		path: '/setup/weekSettle',
		name: 'weekSettle',
		component: () => import('@/views/setup/weekSettle/index.vue'),
	},{
		path: '/setup',
		name: 'setup',
		meta: {
		  title: '设置'
		},
		component: () => import('@/views/setup/index.vue'),
	},{
		path: '/intelligentMeasure',
		name: 'intelligentMeasure',
		meta: {
		  title: '智能测评'
		},
		component: () => import('@/views/home/intelligentMeasure/index.vue'),
	},{
		path: '/measurement',
		name: 'measurement',
		meta: {
		  title: '测评'
		},
		component: () => import('@/views/home/measurement/index.vue'),
	},{
		path: '/home/report',
		name: 'report',
		meta: {
		  title: '本次测评'
		},
		component: () => import('@/views/home/report/index.vue'),
	},{
		path: '/home/detectParsing',
		name: 'detectParsing',
		meta: {
		  title: '题目解析'
		},
		component: () => import('@/views/home/detectParsing/index.vue'),
	},{
		path: '/home/chapterPractice',
		name: 'chapterPractice',
		meta: {
		  title: '练习章节'
		},
		component: () => import('@/views/home/chapterPractice/index.vue'),
	},{
		path: '/home/chapterSmall',
		name: 'chapterSmall',
		meta: {
		  title: '微课章节'
		},
		component: () => import('@/views/home/chapterSmall/index.vue'),
	},{
		path: '/home/questionnaire',
		name: 'questionnaire',
		meta: {
		  title: '问卷调查'
		},
		component: () => import('@/views/home/questionnaire/index.vue'),
	},{
		path: '/home/selectChapters',
		name: 'selectChapters',
		meta: {
		  title: '选择章节'
		},
		component: () => import('@/views/home/questionnaire/selectChapters/index.vue'),
	},{
		path: '/home/teacher',
		name: 'teacher',
		meta: {
		  title: '名师'
		},
		component: () => import('@/views/home/teacher/index.vue'),
	},{
		path: '/daily/study',
		name: 'study',
		meta: {
		  title: '学习概要'
		},
		component: () => import('@/views/daily/study/index.vue'),
	},{
		path: '/daily/dailySide',
		name: 'dailySide',
		meta: {
		  title: '前侧'
		},
		component: () => import('@/views/daily/dailySide/index.vue'),
	},{
		path: '/daily/dailyComplete',
		name: 'dailyComplete',
		meta: {
		  title: '学习完成'
		},
		component: () => import('@/views/daily/dailyComplete/index.vue'),
	},{
		path: '/daily/dailySmall',
		name: 'DailySmall',
		meta: {
		  title: '微课'
		},
		component: () => import('@/views/daily/dailySmall/index.vue'),
	},{
		path: '/moduleLearn/learnDvance',
		name: 'learnDvance',
		meta: {
		  title: '超前学习'
		},
		component: () => import('@/views/moduleLearn/learnDvance/index.vue'),
	},
	{
		path: '*',
		component: Home
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}



export default router
