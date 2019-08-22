import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/page/Login.vue')
const Home = () => import("@/page/home.vue")
const Index = ()=>import("@/views/index.vue")
const Three = () => import('@/page/Three.vue')
const SubThree = () => import('@/components/three/SubThree.vue')
const One = () => import('@/page/One.vue')
const SubOne = () => import('@/components/one/SubOne.vue')
const SubOneSub = () => import('@/components/one/SubOneSub.vue')
const Two = () => import("@/page/Two.vue")

Vue.use(Router)

export default new Router({
    routes: [
        {//便于调试
            path: '*',
            redirect: '/home'
        },
        {
            path: '/login',
            component: Login,
            name: '登录页',
            hidden: true,
            meta: { name: '登录页'}
        },
        {
            path: '/',
            name: 'index',
            component: Index,
            redirect:"/home",
            children: [
                {
                    path:"/home",
                    component:Home,
                    meta: {
                        name: '首页',
                        icon: 'iconxiazai44',
                    },
                },
                {
                    path:'/system',
                    component: Three,
                    meta: {
                        name: '系统管理',
                        icon: 'iconliebiao',
                    },
                    children:[{
                        path:'user-manager',
                        component: () => import("@/page/System/UserManage.vue"),
                        meta: {
                            name: '用户管理',
                            icon: 'iconliebiao',
                        },
                    },{
                        path:'role-manager',
                        component: () => import("@/page/System/RoleManage.vue"),
                        meta: {
                            name: '岗位角色',
                            icon: 'iconliebiao',
                        },
                    },{
                        path:'organization-manager',
                        component: () => import("@/page/System/OrganizationManage.vue"),
                        meta: {
                            name: '组织机构',
                            icon: 'iconliebiao',
                        },
                    },{
                        path:'permission-manager',
                        component: () => import("@/page/System/PermissionManage.vue"),
                        meta: {
                            name: '权限管理',
                            icon: 'iconliebiao',
                        },
                    }]
                },
                {
                path:'/three',
                component: Three,
                meta: {
                    name: '第三页',
                    icon: 'iconliebiao',
                },
                children:[{
                    path:'subThree',
                    component: SubThree,
                    meta: {
                        name: '第三页子页',
                        icon: 'iconliebiao',
                    },
                }]
            },{
                path:'/one',
                component: One,
                meta: {
                    name: '第一页',
                    icon: 'iconliebiao',
                },
                children:[{
                    path:'subOne',
                    component: SubOne,
                    meta: {
                        name: '第一页子页',
                        icon: 'iconliebiao',
                    },
                    children:[{
                        path:'subOneSub',
                        component: SubOneSub,
                        meta: {
                            name: '第一页子页子页',
                            icon: 'iconliebiao',
                        }
                    }]
                }]
            },{
                path:'/two',
                component: Two,
                meta: {
                    name: '第二页',
                    icon: 'iconliebiao',
                }
            }]
        },

    ]
})
