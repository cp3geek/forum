<template>
  <div id="app">
    <router-view></router-view>
    <scroll-top />
  </div>
</template>



<script>
import ScrollTop from "@/components/ScrollTop.vue";
export default {
  components: {
    "scroll-top": ScrollTop
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
