<template>
  <div class="secend">
    <section class="f">
      <b-field label="电话" :label-position="labelPosition">
        <b-input
          v-model="userPhone"
          required
          pattern="^((\d{11})|(\d{7,8})|(\d{4}|\d{3})-(\d{7,8}))$"
          validation-message="请输入正确的电话号码!"
        ></b-input>
      </b-field>

      <b-field label="性别" :label-position="labelPosition">
        <b-select placeholder="选择性别" v-model="userSex">
          <option value="男">男</option>
          <option value="女">女</option>
        </b-select>
      </b-field>

      <b-field label="个性签名" :label-position="labelPosition">
        <b-input maxlength="200" type="textarea" v-model="userShow"></b-input>
      </b-field>

      <hr />
    </section>
    <b-button type="is-info" outlined rounded @click="secend">保存</b-button>
  </div>
</template>

<script>
import { SnackbarProgrammatic as Snackbar } from "buefy";
export default {
  data() {
    return {
      labelPosition: "on-border",
      userShow: "",
      userPhone: "",
      userSex: ""
    };
  },
  methods: {
    secend() {
      this.$store.commit("secend", {
        userShow: this.userShow,
        userPhone: this.userPhone,
        userSex: this.userSex
      });
      if (
        this.$store.state.registeruser.userPhone != "" &&
        this.$store.state.registeruser.userShow != "" &&
        this.$store.state.registeruser.userSex != ""
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
.secend {
  margin: auto;
  width: 500px;
  height: 500px;
  text-align: center;
}
.f {
  padding-top: 8rem;
}
</style>
