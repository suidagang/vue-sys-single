<template>
    <div class="sys-wapper">
       <div class="nav-top-header"></div>
       <div class="left-sider-bar"></div>
       <div class="content-box">
            <div class="bread-crumb"></div>
            <div class="content">
                <!-- <div style="position:absolute;bottom:0">1111111111111</div> -->
                <router-view/>
            </div>
       </div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.sys-wapper {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  /* background: pink; */
}
.nav-top-header {
  height: 60px;
  width: 100%;
  background: skyblue;
}
.left-sider-bar {
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  /* overflow-y: scroll; */
  width: 250px;
  background-color: rgb(50, 65, 87);
}
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 60px;
  bottom: 0;
  background: #f0f0f0;
  overflow: hidden;
}
.content {
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
  width: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
.bread-crumb {
  height: 60px;
  width: 100%;
  background: fuchsia;
}
</style>