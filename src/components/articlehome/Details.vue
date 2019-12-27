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
        <div class="Rightbar">
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="48" valign="top">
                      <a href="/member/chp3">
                        <img
                          src="//cdn.v2ex.com/gravatar/873548b247e76e0e16ac5f8280c0004c?s=48&amp;d=retro"
                          class="avatar"
                          border="0"
                          align="default"
                          style="max-width: 48px; max-height: 48px;"
                        />
                      </a>
                    </td>
                    <td width="10" valign="top"></td>
                    <td width="auto" align="left">
                      <span class="bigger">
                        <a href="/member/chp3">已登录的用户名，暂时占位</a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="sep10"></div>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="33%" align="center">
                      <a href="/my/nodes" class="dark" style="display: block;">
                        <span class="bigger">0</span>
                        <div class="sep3"></div>
                        <span class="fade">粉丝数</span>
                      </a>
                    </td>
                    <td
                      width="34%"
                      style="border-left: 1px solid rgba(100, 100, 100, 0.4); border-right: 1px solid rgba(100, 100, 100, 0.4);"
                      align="center"
                    >
                      <a href="/my/topics" class="dark" style="display: block;">
                        <span class="bigger">0</span>
                        <div class="sep3"></div>
                        <span class="fade">你的帖子</span>
                      </a>
                    </td>
                    <td width="33%" align="center">
                      <a href="/my/following" class="dark" style="display: block;">
                        <span class="bigger">0</span>
                        <div class="sep3"></div>
                        <span class="fade">你关注的人数</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="cell" id="member-activity">
              <div class="member-activity-bar">
                <div class="member-activity-start" style="width: 15px;"></div>
              </div>
            </div>
            <div class="cell" style="padding: 5px;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="28">
                      <a href="/new">
                        <img src width="28" border="0" />
                      </a>
                    </td>
                    <td width="10"></td>
                    <td width="auto" valign="middle" align="left">
                      <a href="/new">在此贴发表评论</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="inner">
              <div class="fr" id="money" style="margin: -3px 0px 0px 0px"></div>
              <a href="#" class="fade">去发帖</a>
            </div>
          </div>
        </div>
        <div class="Main">
          <div class="sep20"></div>
          <div class="box" style="border-bottom:0px;">
            <div class="header">
              <div class="fr">
                <!-- <img
                  :src="require(`../../assets/${this.$route.query.detaildata.user.userImg}`)"
                  class="size"
                />-->
              </div>
              <div class="sep10"></div>
              <h1>{{info.article.artTitle}}</h1>
              <small class="gray">{{info.user.userName}}</small>
            </div>
            <div class="cell">{{info.article.artContent}}</div>
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
export default {
  data() {
    return {
      info: [
        {
          article: {
            artId: 0,
            artUserId: 1,
            artTitle: "",
            artTypeId: 0,
            artContent: "",
            artCommentId: 0,
            artCreTime: "",
            artView: "",
            artComNum: 0,
            artHotNum: 0,
            artLikeNum: 0
          },
          user: {
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
        }
      ]
    };
  },
  created() {
    this.info = JSON.parse(this.$route.query.detaildata);
  }

  //需要将传过来的数据存入session中（关闭浏览器才会清除数据）localstage也行，cookies也行，我选择session，不然一刷新数据就会丢失，有空再更新的，//不采用这种方式，vue的router使用query传参，刷新不会丢失数据，登录状态的保存再使用sessionStorge
};
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