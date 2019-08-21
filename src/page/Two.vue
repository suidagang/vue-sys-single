<template>
    <div class="two">
        <div>第二页</div>
        <SubTwo />
    </div>
</template>

<script>
     import SubTwo from "@/components/Two/SubTwo.vue"
    export default {
        components:{
            SubTwo
        },
        data() {
            return {}
        },
        mounted() {},
        methods: {
            
        },
    }
</script>
<style scoped>
    .two{
        height: 3000px;
        width: 100%;
        background: pink;
    }
</style>