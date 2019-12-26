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
        <div class="Rightbar">asdadasdasdasdasdad</div>
        <div class="Main">
          <div class="sep20"></div>
          <div class="box" style="border-bottom:0px;">
            <div class="header">
              <div class="fr">asdasdasdas</div>
              <div class="sep10"></div>
              <h1>adasdasdasdasdadasdas</h1>
              <small class="gray">sadasdasdadasdasd</small>
            </div>
            <div class="cell">ccccccccccccccc</div>
          </div>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">xcvxcvxcv</div>
            <div class="fuck"></div>
            <div class="cell">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="48" valign="top" align="center">asdasdasdad</td>
                    <td width="10" valign="top">asdasdasdasdas</td>
                    <td width="auto" valign="top" align="left">asdasdasdad</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="sep20"></div>
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
  /* background-color: antiquewhite; */
  background-repeat: repeat-x, repeat-x;
  text-align: center;
  background-image: url("../../assets/下载.jpg");
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
  background-color: var(--box-background-color);
  border-radius: var(--box-border-radius);
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
  border-bottom: 1px solid var(--box-border-color);
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
</style>