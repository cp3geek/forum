<template>
  <div class="fuck">
    <b-field label="Username">
      <b-input
        v-model="username"
        placeholder="username"
        required
        pattern="[A-Za-z][A-Za-z0-9_]{4,14}"
        validation-message="用户名错误!"
      />
    </b-field>

    <b-field label="Password">
      <b-input v-model="password" type="password" placeholder="password" password-reveal></b-input>
    </b-field>
    <b-button :loading="loading" class="shit" type="is-info" @click="clickMe">Click Me</b-button>
  </div>
</template>

<script>
import { adminLogin } from "@/api";

export default {
  data() {
    return {
      username: "",
      password: "",
      loading: false
    };
  },
  methods: {
    clickMe() {
      this.loading = true;
      adminLogin(this.username, this.password)
        .then(res => {
          const { data } = res;
          console.log(res);
          if (data) {
            this.$router.push("/backstagehome");
          } else {
            alert("你不是管理员");
          }
        })
        .catch(() => alert("服务器被吃了"))
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style scoped>
.fuck {
  width: 400px;
  height: 300px;
  margin: 0 auto;
}

.shit {
  width: 100%;
}
</style>