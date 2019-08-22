
<!--公用组件：带搜索的input
/**
* 组件名称：带搜索的input
* @desc 用于带搜索的input的组件
* @author suigang
* @date 2019年8月22日16:30:00
* @param {Number,String} [width]    - input框的宽度
* @param {Number,String} [height] - input框的高度
* @param {String} [placeholder] - input框placeholderde的内容
* methods [search] 点击搜索图标触发的事件
* @example 调用示例
*  <PubliceSearch @search = "search"></PubliceSearch>
*/
-->
<template>
    <div class="public-search" :style="{ width: width+'px', height: height + 'px'}" >
        <input class="search-input" v-model = "searchValue" :placeholder = "placeholder" type="text" :style="{ width: width+'px', height: height + 'px',background:backgroundColor }" >
        <i class="iconfont iconchaxun icon-search" @click="search"  :style="{ width: height+'px', height: height + 'px',lineHeight: height + 'px'}"></i>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchValue:""
            }
        },
        props:{
            // input的宽度
            width:{
                type:[Number,String],
                default:"220"
            },
            //input的高度
            height:{
                type:[Number,String],
                default:"26"
            },
            backgroundColor:{
                type:String,
                default:"#3c95f0"
            },
            placeholder:{
                type:String,
                default:"请输入你要输入的内容"
            }
        },
        mounted() {},
        methods: {
            search(){
                this.$emit("search",this.searchValue)
            }
        },
    }
</script>
<style lang="less" scoped>
    @placeholderColor: #c2dbff;
    @import "../../less/variable.less";
    .public-search {
        position: relative;
        overflow: hidden;
    }
    .search-input {
        outline: none;
        border: 1px solid #fff;
        box-sizing: border-box;
        border-radius: 13px;
        padding: 3px 50px 3px 10px;
        color: #fff;
        font-size: 14px;
    }
    .icon-search {
        position: absolute;
        top: 0;
        right: 3px;
        font-size: 20px;
        display: block;
        text-align: center;
        cursor: pointer;
    }
    input::-webkit-input-placeholder {
        color: @placeholderColor;
        font-size: 12px;
    }
</style>