<template>
    <div>
        <div class="one">
            第一页组件
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {},
        methods: {
        },
    }
</script>
<style lang="less" scoped>
    @import "~@/less/variable.less";
    .one{
        font-size: @font32;
        color: @fontColor;
    }
</style>