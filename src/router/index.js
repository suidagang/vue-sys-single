import Vue from 'vue'
import Router from 'vue-router'
const One = () => import('@/page/One.vue')
const Two = () => import('@/page/Two.vue')
const layOut = () => import('@/views/index.vue')


Vue.use(Router)

export default new Router({
    routes: [
        {//便于调试
            path: '*',
            redirect: '/' 
        },
        {
            path: '/',
            name: 'layOut',
            component: layOut,
            redirect: '/two', 
            children:[{
                path: '/two',
                name: 'Two',
                component: Two
            },{
                path: '/one',
                name: 'One',
                component: One
            }]
        }
    ]
})
