<template>
    <div class="nav-header">
        <div class="nav-header-logo">
            <i class="iconfont iconLOGO"></i>
            <span>平台运维系统</span>
        </div>
        <div class="shrink-box" @click="controlSiderBar">
            <i class="iconfont iconliebiao1 shrink-icon"></i>
        </div>
        <div class="nav-search">
            <PublicSearch @search = "search" ></PublicSearch>
        </div>
        <div class="user-info">
            <i class="iconfont iconwo person-icon"></i>
            <span>你好，Admin</span>
            <i class="iconfont iconpaixujiantouxia"></i>
        </div>
        <div class="sign-out">
            <i class="iconfont icontuichu person-icon"></i>
            <span>退出系统</span>
        </div>
    </div>
</template>

<script>
    import PublicSearch from "@/components/public/PublicSearch.vue"
    export default {
        components:{
            PublicSearch
        },
        data() {
            return {
                searchData:"",
                siderBarFlag:false
            }
        },
        mounted() {},
        methods: {
            //展开和收缩左侧栏
            controlSiderBar(){
                this.siderBarFlag = !this.siderBarFlag;
                this.$emit("choiceSiderBarFlag",this.siderBarFlag)
            },
            search(val){
                console.log(val,'val')
            }
        },
    }
</script>
<style lang="less" scoped>
    .nav-header{
        position: relative;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        overflow: hidden;
    }
    .nav-header-logo{
        width:250px;
        height: 50px;
        text-align: left;
        padding-left: 10px;
        line-height: 50px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .shrink-box{
        height: 50px;
        width: 50px;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
    }
    .shrink-icon{
        font-size: 30px;
    }
    .nav-search{
        margin-left: 12px;
        width: 220px;
    }
    .user-info{
        position: absolute;
        right: 128px;
        top: 0;
        width: 172px;
        height: 50px;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
    }
    .sign-out{
        width: 128px;
        height: 50px;
        position: absolute;
        right:0;
        top: 0;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
    }
    .person-icon{
        font-size: 20px;
    }
</style>