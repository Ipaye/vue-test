import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/devs',
			name: 'Developers',
			component: () => import(/* webpackChunkName: "about" */ './views/Developers.vue')
		},
		{
			path: '/add-dev',
			name: 'Add Developer',
			component: () => import(/* webpackChunkName: "about" */ './views/CreateDev.vue')
		},
		{
			path: '/aboutus',
			name: 'About',
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
		},
		{
			path: '/signup',
			name: 'SignUp',
			component: () => import(/* webpackChunkName: "about" */ './views/SignUp.vue')
		}
	]
})
