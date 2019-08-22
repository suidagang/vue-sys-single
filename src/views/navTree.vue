<template>
  <div>
    <template v-for="(menu,index) in menus" >
      <el-submenu v-if="menu.children && menu.children.length>0" :index="getFullPath(menu.path)" :key="index">
        <template slot="title">
          <i class="iconfont" :class="menu.meta.icon"></i>
          <span slot="title">{{menu.meta.name}}</span>
        </template>
        <NavTree :menus="menu.children" :parentPath="getFullPath(menu.path)"></NavTree>
      </el-submenu>

      <el-menu-item v-else :index="getFullPath(menu.path)" :key="index">
        <i class="iconfont" v-if="menu.meta.icon" :class="[menu.meta.icon]"></i>
        <span slot="title">{{menu.meta.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: ['menus','parentPath'],
  name: 'NavTree',
mounted(){
},
  methods: {
    /**
     * 获取完整路由路径
     * @param {String} val 当前节点的路由路径
     */
    getFullPath(val){
      let fullPath = '';
      if(!this.parentPath){
        return val;
      }else {
        let fullpath = val ? this.parentPath + '/' + val : this.parentPath;
        return fullpath;
      }
    },
    
    /**
     * 是否是子节点全为非现实路由
     * 只要有一个节点为导航节点，则返回true
     * 
     * @param {Object} item 路由节点数据
     * 
     * @return {Boolean}
     */
    isSingleNav(item){
      let children = item.children;

      if(children instanceof Array){
        for(let i=0;i<children.length;i++){
          if(children[i].meta.isNav){
            return true;
          }
        }
      }

      return false;
    },
  }
}
</script>

<style>
</style>
