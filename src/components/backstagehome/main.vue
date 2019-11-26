<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more"
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87"
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large"
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46"
        }
      ]
    };
  }
};
</script>