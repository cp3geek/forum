<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">首页</a>

        <a class="navbar-item">热榜</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">更多</a>

          <div class="navbar-dropdown">
            <a class="navbar-item" @click="userhome">个人主页</a>
            <a class="navbar-item">全部板块</a>
            <a class="navbar-item">全部帖子</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Report an issue</a>
          </div>
        </div>
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5"></p>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Find a post" />
              </p>
              <p class="control">
                <button class="button">Search</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-end" v-if="!$store.state.isLogin">
        <div class="navbar-item">
          <div class="buttons">
            <b-button type="is-info" outlined @click="register">注册</b-button>
            <div class="navbar-menu">
              <div class="navbar-end">
                <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
                  <a class="navbar-item" slot="trigger" role="button">
                    <b-button type="is-info" outlined>登录</b-button>
                  </a>

                  <b-dropdown-item aria-role="menu-item" :focusable="false" custom paddingless>
                    <div class="modal-card" style="width:300px;">
                      <section class="modal-card-body">
                        <b-field label="Email">
                          <b-input type="email" v-model="email" placeholder="Your email" required></b-input>
                        </b-field>

                        <b-field label="密码">
                          <b-input
                            type="password"
                            password-reveal
                            placeholder="Your password"
                            required
                            v-model="password"
                          ></b-input>
                        </b-field>

                        <b-checkbox>记住我</b-checkbox>
                      </section>
                      <footer class="modal-card-foot">
                        <button class="button is-primary" @click="login">登录</button>
                      </footer>
                    </div>
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>欢迎{{user.userName}}登录</div>
    </div>
  </nav>
</template>

<script>
import { userLogin } from "@/api";

export default {
  data() {
    return {
      email: "",
      password: "",
      user: {
        userName: "",
        userId: "",
        userEmail: "",
        userImg: "",
        userPhone: "",
        userSex: "",
        userFans: "",
        userTime: "",
        userPassword: "",
        userStatus: "",
        userShow: "",
        userConcern: "",
        userBlog: ""
      }
    };
  },
  methods: {
    userhome() {
      this.$router.push("/userhome");
    },
    login() {
      userLogin(this.email, this.password)
        .then(res => {
          const { data } = res;
          this.user = data;
          console.log(data);
          if (data != null) {
            this.$store.dispatch("aLogin", {
              message: "牛逼",
              success: () => {
                console.log("欢迎您");
              }
            });
          } else {
            alert("该用户不存在");
          }
        })
        .catch(err => {
          alert(err);
        });
    },
    register() {
      this.$router.push("/registerhome");
    }
  }
};
</script>
