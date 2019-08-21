<template>
    <div>
        第一页
        <button @click="goTwo">跳转第二页</button>
        <SubOne />
    </div>
</template>

<script>
    import SubOne from "@/components/One/SubOne.vue"
    export default {
        components:{
            SubOne
        },
        data() {
            return {}
        },
        mounted() {},
        methods: {
            goTwo(){
                this.$router.push("/two")
            }
        },
    }
</script>
<style scoped>

</style>