<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent" v-for="(item,i) in user" :key="i">
      <article class="tile is-child box">
        <p class="subtitle" style="height:50px;width:300px">用户名：{{item.userName}}</p>
        <p class="subtitle">邮箱：{{item.userEmail}}</p>
        <p class="subtitle">
          头像：
          <img :src="require(`@/assets/${item.userImg}`)" class="size" />
        </p>
        <p class="subtitle">电话：{{item.userPhone}}</p>
      </article>
    </div>
  </div>
</template>


<script>
import { getuserlist } from "@/api";
export default {
  data() {
    return {
      user: [
        {
          userId: 0,
          userPassword: 0,
          userName: "",
          userEmail: "",
          userSex: "",
          userPhone: "",
          userStatus: 0,
          userTime: "",
          userShow: "",
          userBlog: "",
          userImg: "",
          userFans: 0,
          userConcern: 0
        }
      ]
    };
  },
  created() {
    getuserlist()
      .then(res => {
        const { data } = res;
        this.user = data;
      })
      .catch();
  }
};
</script>

<style scoped>
.size {
  width: 64px;
  height: 64px;
}
</style>