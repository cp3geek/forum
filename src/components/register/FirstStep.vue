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
    <b-button type="is-info" @click="first">保存</b-button>
  </div>
</template>


<script>
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