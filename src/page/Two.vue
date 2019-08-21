<template>
    <div class="two">
        <div @click="go">第二页</div>
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
            go(){
                this.$router.push("/one")
            }
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