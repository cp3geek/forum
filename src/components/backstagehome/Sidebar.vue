<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span>用户管理</span>
      </template>
    </el-menu-item>

    <el-menu-item index="2">
      <i class="el-icon-document"></i>
      <span slot="title">帖子管理</span>
    </el-menu-item>

    <el-menu-item index="3">
      <i class="el-icon-folder-add"></i>
      <span slot="title">板块管理</span>
    </el-menu-item>
  </el-menu>
</template>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(keyPath);
      switch (key) {
        case "1":
          this.$router.push("/usermanger");
          break;
        case "2":
          this.$router.push("/articlemanger");
          break;
        case "3":
          this.$router.push("/typemanger");
          break;
      }
    }
  }
};
</script>