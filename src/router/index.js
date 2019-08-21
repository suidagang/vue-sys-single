import Vue from 'vue'
import Router from 'vue-router'
const One = () => import('@/page/One.vue')
const Two = () => import('@/page/Two.vue')


Vue.use(Router)

export default new Router({
    routes: [{//便于调试
        path: '*',
        redirect: '/one' 
    },{
        path: '/one',
        name: 'One',
        component: One
    },{
        path: '/two',
        name: 'Two',
        component: Two
    }]
})
