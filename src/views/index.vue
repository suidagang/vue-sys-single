<template>
	<div class="sys-contail">
		<!-- 页面头部 -->
		<div class="header">
			<NavHeader @choiceSiderBarFlag ="choiceSiderBarFlag"></NavHeader>
		</div>
		<!-- 页面的主要内容区域 -->
		<div class="container">
			<!-- 菜单树 -->
			<div class="nav-sider-bar" :class="{ isCollapse: isCollapse }">
				<nav-menu ref="siderBar"></nav-menu>
			</div>
			<!-- 主要内容显示区域 -->
			<div class="content" ref="contentMain">
				<!-- 面包屑 -->
				<div>
					<Breadcrumb />
				</div>
				<!-- 内容区 -->
				<div class="app-main">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import navMenu from '@/views/navMenu.vue'
	import Breadcrumb from "@/views/Breadcrumb/index.vue"
	import NavHeader from "@/views/NavHeader.vue"
	export default {
		components: {
			navMenu,
			Breadcrumb,
			NavHeader
		},
		data() {
			return {
				isCollapse:false
			}
		},
		created: function() {
		
		},
		
		mounted: function() {
			
		},
		methods: {
			choiceSiderBarFlag(flag){
				this.isCollapse = flag;
				this.$refs.siderBar.changeFlag(flag);
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../less/variable.less";
	.sys-contail {
		width: 100%;
		height: 100%;
	}
	.header {
		width: 100%;
		height: 50px;
		box-sizing: border-box;
		color: #ffffff;
		background-color: @blue;
	}

	.container {
		width: 100%;
		height: calc(100% - 56px);
	}
	.nav-sider-bar {
		float: left;
		width: 250px;
		height: 100%;
		background-color: #3c4262;
	}
	.content {
		position: relative;
		float: left;
		width: calc(100% - 250px);
		height: 100%;
		overflow: hidden;
	}
	.app-main{
		position: absolute;
		top: 60px;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow-y: auto;
		box-sizing: border-box;
	}
	.isCollapse{
		width: 36px;
	}
</style>
