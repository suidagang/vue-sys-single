<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if='item.meta.name'>
                <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.meta.name}}</span>
                <router-link v-else :to="item.redirect||item.path">{{item.meta.name}}</router-link>
            </el-breadcrumb-item>
        </transition-group>

    </el-breadcrumb>
</template>

<script>

    export default {
        created() {
            this.getBreadcrumb()
        },
        data() {
            return {
                levelList:null
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        methods: {
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.meta.name);
                const first = matched[0];
                try{
                    if (first && first.meta.name !== "首页") {
                        matched = [{ path: '/home', meta: { name: '首页' }}].concat(matched)
                    };
                }catch (e){
                    console.log(e)
                };
                this.levelList = matched;
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>


    .app-breadcrumb{
        font-size: 14px;
        line-height: 60px;
        margin-left: 20px;
        float: left;
        .no-redirect{
            color: #97a8be;
            cursor: text;
        }
    }
</style>
