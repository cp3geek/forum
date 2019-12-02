<template>
  <div>
    <Top />
    <UserInfo />
    <Post />
  </div>
</template>


<script>
import Top from "../userhome/Top";
import UserInfo from "../userhome/UserInfo";
import Post from "../userhome/Post";
export default {
  components: {
    Top,
    Post,
    UserInfo
  }
};
</script>


<style scoped>
</style>