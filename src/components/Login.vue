<template>
  <div>
    <div id="Top">
      <div class="content">
        <div style="padding-top: 6px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
              <tr>
                <td width="570" align="right" style="padding-top: 2px;">
                  <a href="/" class="top">首页</a>&nbsp;&nbsp;&nbsp;
                  <a href="/signup" class="top">注册</a>
&nbsp;&nbsp;&nbsp;
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="Wrapper">
      <div class="content">
        <div id="Leftbar"></div>

        <div id="Main">
          <div class="sep20"></div>
          <div class="box">
            <div class="header">
              <a href="/">重工论坛</a>
              <span class="chevron">&nbsp;›&nbsp;</span> 登录 &nbsp;
              <li class="fa fa-lock"></li>
            </div>
            <div class="cell">
              <form method="post" action="/signin">
                <table cellpadding="5" cellspacing="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td width="120" align="right">电子邮箱</td>
                      <td width="auto" align="left">
                        <input
                          type="text"
                          class="sl"
                          name="47898fbf4d5420a894dbd060f6763916611cd25baefcabca3234cea3fd5a5703"
                          value
                          autofocus="autofocus"
                          autocorrect="off"
                          spellcheck="false"
                          autocapitalize="off"
                          placeholder="用户名或电子邮箱地址"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td width="120" align="right">密码</td>
                      <td width="auto" align="left">
                        <input
                          type="password"
                          class="sl"
                          name="cb10b4e849cb70f260623e3843c990f983a01cbb5f5899afd878f367e58ed4cb"
                          value
                          autocorrect="off"
                          spellcheck="false"
                          autocapitalize="off"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td width="120" align="right"></td>
                      <td width="auto" align="left">
                        <input type="hidden" value="62970" name="once" />
                        <input type="submit" class="super normal button" value="登录" />
                      </td>
                    </tr>
                    <tr>
                      <td width="120" align="right"></td>
                      <td width="auto" align="left">
                        <a href="/forgot">我忘记密码了</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type="hidden" value="/" name="next" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="c"></div>
      <div class="sep20"></div>
    </div>
    <div id="Bottom">
      <div class="content">
        <div class="inner">
          <div class="sep10"></div>
          <div class="fr">
            <a href="https://www.digitalocean.com/?refcode=1b51f1a7651d" target="_blank">
              <div id="DigitalOcean"></div>
            </a>
          </div>
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
            &nbsp;
          </strong>
          &nbsp;
          <span class="snow">·</span>
          &nbsp;
          <div class="sep20"></div>创意工作者们的社区
          <div class="sep5"></div>World is powered by solitude
          <div class="sep20"></div>
          <span class="small fade">
            VERSION: 3.9.8.3 · 4ms · UTC 01:44 · PVG 09:44 · LAX 17:44 · JFK 20:44
            <br />♥ Do have faith in what you're doing.
          </span>
          <div class="sep10"></div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {};
</script>


<style scoped>
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
.fr {
  float: right;
  text-align: right;
}
.sep10 {
  height: 10px;
}
.inner {
  padding: 10px;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
}
div {
  display: block;
}
:root {
  --box-background-color: #fff;
  --box-background-alt-color: #f9f9f9;
  --box-background-hover-color: #fafafa;
  --box-foreground-color: #000;
  --box-border-color: #e2e2e2;
  --box-border-radius: 3px;
}
#Top {
  text-align: center;
  background-color: var(--box-background-color);
  height: 44px;
  font-size: 15px;
  font-weight: 500;
  background-size: 44px 44px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
  padding: 0 20px;
}
#Wrapper {
  text-align: center;
  background-color: #e2e2e2;
  background-image: url(/static/img/shadow_light.png);
  background-repeat: repeat-x;
}
#Bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.22);
  background-color: var(--box-background-color);
  text-align: center;
  color: #999;
  padding: 0 10px;
}
body {
  padding: 0;
  margin: 0;
  font-family: helvetica neue, luxi sans, dejavu sans, segoe ui,
    hiragino sans gb, microsoft yahei, sans-serif;
}
.sep20 {
  height: 20px;
}
.content {
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto;
}
</style>