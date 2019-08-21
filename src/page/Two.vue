<template>
    <div>
        第二页
        <button @click="goOne">返回第一页</button>
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
            goOne(){
                this.$router.push("/one")
            }
        },
    }
</script>
<style scoped>

</style>