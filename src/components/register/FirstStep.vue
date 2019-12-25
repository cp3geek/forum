<template>
  <div class="first">
    <section>
      <b-field label="用户名">
        <b-input v-model="userName" placeholder="username" maxlength="30"></b-input>
        <!-- required pattern="[A-Za-z][A-Za-z0-9_]{4,14}"
        validation-message="用户名不能为空!"-->
      </b-field>

      <b-field label="邮箱">
        <b-input type="email" v-model="userEmail" placeholder="Your email" required></b-input>
      </b-field>

      <b-field label="密码">
        <b-input
          type="password"
          password-reveal
          placeholder="Your password"
          required
          v-model="userPassword"
        ></b-input>
      </b-field>
    </section>
    <b-button type="is-info" outlined rounded @click="first">保存</b-button>
  </div>
</template>


<script>
import { SnackbarProgrammatic as Snackbar } from "buefy";
export default {
  data() {
    return {
      userName: "",
      userEmail: "",
      userPassword: ""
    };
  },
  methods: {
    first() {
      this.$store.commit("first", {
        userName: this.userName,
        userEmail: this.userEmail,
        userPassword: this.userPassword
      });
      if (
        this.$store.state.registeruser.userName != "" &&
        this.$store.state.registeruser.userEmail != "" &&
        this.$store.state.registeruser.userPassword != ""
      ) {
        Snackbar.open("保存成功");
      } else {
        this.$buefy.snackbar.open({
          duration: 5000,
          message: "请填写完整信息",
          type: "is-danger",
          position: "is-bottom-left",
          actionText: "确定",
          queue: false,
          onAction: () => {
            this.$buefy.toast.open({
              message: "信息填写完整再点击保存",
              queue: false
            });
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.first {
  text-align: center;
  float: left;
  width: 500px;
  height: 400px;
}
</style>