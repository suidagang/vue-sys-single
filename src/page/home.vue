<template>
    <div>
        <div class="home">
            <div class="sdd">尾部</div
            >这是首页
        </div>
         <div class="home1">这是首页</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {},
        methods: {},
    }
</script>
<style scoped>
    .home{
        position: relative;
        float: left;
        width: 100px;
        height: 2000px;
        background: red;
    }
    .sdd{
        position: absolute;
        bottom: 0;
    }
    .home1{
        float: right;
        width: 100px;
        height: 2000px;
        background: red;
    }
</style>