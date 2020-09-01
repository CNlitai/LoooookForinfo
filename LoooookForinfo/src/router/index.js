import Vue from 'vue'
import VueRouter from 'vue-router'
// d导入组件， 配置路由
import Index from '../pages/index.vue'
import User from '../pages/user.vue'
import Article from '../pages/article.vue'
import Category from '../pages/category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/index',
    component: Index
  }, {
    path: '/user',
    name: 'User',
    component: User
  }, {
    path: '/article',
    name: 'Article',
    component: Article
  }, {
    path: '/category',
    name: 'Category',
    component: Category
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
