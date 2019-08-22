<template>
	<div class="navMenu">
		<div class="menu">
			<el-menu  default-active="2" class="el-menu-vertical-demo" :router="true" :collapse="isCollapse"  :collapse-transition="false" background-color="#3c4262" text-color="#fff" active-text-color="#ffd04b" :default-active="$route.path" unique-opened>
				<NavTree :menus="navList"></NavTree>
			</el-menu>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import NavTree from './navTree.vue'
	export default {
		components: {
			NavTree
		},
		data() {
			return {
				navName: "系统菜单",
				isCollapse: false,
				storeIndex: '',
				resetTitleWidth: 0,
				titleDefaultWidth: '270px',
				navList: []
			}
		},
		created() {
			this.setMenu();
		},
		mounted: function() {
		},
		methods: {
			//改变展开和收缩的状态
			changeFlag(flag){
				this.isCollapse = flag;
			},
			/**
			 * 设置路由数据
			 */
			setMenu() {
				let menu = this.getMenuByRouter();
				this.navList = menu;
			},
			/**
			 * 通过路由配置获取导航
			 * 获取路由名称为index的路由节点，返回该节点下的children作为菜单数据
			 * @return {Array} 路由菜单数组
			 */
			getMenuByRouter() {
				let routers = this.$router.options.routes;
				for (let i = 0; i < routers.length; i++) {
					if (routers[i].name === 'index') {
						if (routers[i].children && routers[i].children.length) {
							return routers[i].children
						}
					}
				}
				return [];
			},
		}
	}
</script>

<style scoped>
	.customNavBk {
		background: rgba(60, 186, 255, 0.3) !important;
	}
	.navMenu {
		position: relative;
		box-sizing: border-box;
		padding-bottom: 22px;
		width: 100%;
		height: 100%;
	}
	.menu {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		overflow-y: auto;
	}
</style>
