<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">Home</b-navbar-item>
        <b-navbar-item href="#">Documentation</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">About</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="Wrapper">
      <div class="content">
        <div class="Leftbar"></div>
        <div class="Rightbar">随便放点东西</div>
        <div class="Main">
          <div class="sep20"></div>
          <div class="box" style="border-bottom:0px;">
            <div class="header">
              <div class="fr">
                <img
                  :src="require(`../../assets/${this.$route.query.detaildata.user.userImg}`)"
                  class="size"
                />
              </div>
              <div class="sep10"></div>
              <h1>{{this.$route.query.detaildata.article.artTitle}}</h1>
              <small class="gray">{{this.$route.query.detaildata.user.userName}}</small>
            </div>
            <div class="cell">{{this.$route.query.detaildata.article.artContent}}</div>
          </div>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">回复数量</div>
            <div class="fuck"></div>
            <div class="cell">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="48" valign="top" align="center">评论人头像</td>
                    <td width="10" valign="top"></td>
                    <td width="auto" valign="top" align="left">
                      <div class="fr">
                        &nbsp; &nbsp;
                        <span class="no">1</span>
                      </div>
                      <div class="sep3"></div>
                      <strong>
                        <a href="#" class="dark">评论的用户</a>
                      </strong>&nbsp; &nbsp;
                      <span class="ago">16 小时 23 分钟前</span>
                      <div class="sep5"></div>
                      <div class="reply_content">测试评论内容</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="sep20"></div>
        </div>
      </div>
    </div>
    <div id="Bottom">
      <div class="content">
        <div class="inner">
          <div class="sep10"></div>
          <div class="fr"></div>
          <strong>
            <a href="/about" class="dark" target="_self">关于</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/faq" class="dark" target="_self">FAQ</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/p/7v9TEc53" class="dark" target="_self">API</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/mission" class="dark" target="_self">我们的愿景</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/advertise" class="dark" target="_self">广告投放</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/advertise/2017.html" class="dark" target="_self">感谢</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/tools" class="dark" target="_self">实用小工具</a>
          </strong>
          <div class="sep20"></div>创意工作者们的社区
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sep20 {
  height: 20px;
}
.Wrapper {
  background-color: #e2e2e2;
  background-repeat: repeat-x, repeat-x;
  text-align: center;
}
.content {
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto;
}
.Leftbar {
  width: 0;
  float: left;
}
.Rightbar {
  width: 270px;
  float: right;
  margin-right: 20px;
}
.Main {
  width: auto;
  margin: 0 310px 0 20px;
}
.div {
  display: block;
}
.box {
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e2e2;
}
.header {
  padding: 10px;
  font-size: 15px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
  overflow: auto;
}
.cell {
  padding: 10px;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
}
.table {
  display: table;
  border-collapse: separate;
  border-color: grey;
}

.tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.fuck {
  border-bottom: 1px solid #e2e2e2;
}
.fr {
  float: right;
  text-align: right;
}
.sep10 {
  height: 10px;
}
.h1 {
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  margin: 0 0 10px;
  padding: 0;
}
.gray {
  color: #999;
}
.small {
  font-size: smaller;
}
#Bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.22);
  background-color: var(--box-background-color);
  text-align: center;
  color: #999;
  padding: 0 10px;
}
:root {
  --box-background-color: #fff;
  --box-background-alt-color: #f9f9f9;
  --box-background-hover-color: #fafafa;
  --box-foreground-color: #000;
  --box-border-color: #e2e2e2;
  --box-border-radius: 3px;
}
.inner {
  padding: 10px;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
}
strong {
  font-weight: bold;
}
a.dark:active,
a.dark:link,
a.dark:visited {
  color: gray;
  text-decoration: none;
}
a:active,
a:link,
a:visited {
  color: #778087;
  text-decoration: none;
  word-break: break-word;
}
</style>