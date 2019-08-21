import Vue from 'vue'
import Router from 'vue-router'
const One = () => import('@/page/One.vue')
const Two = () => import('@/page/Two.vue')
const layOut = () => import('@/views/index.vue')


Vue.use(Router)

export default new Router({
    routes: [{//便于调试
        path: '*',
        redirect: '/two' 
    },{
        path: '/',
        name: 'layOut',
        component: layOut,
        children:[{
            path: '/two',
            name: 'Two',
            component: Two
        }]
    }]
})
