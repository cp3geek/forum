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
            <a class="navbar-item">个人主页</a>
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

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <b-button type="is-info" outlined>注册</b-button>
            <b-button type="is-info" outlined>登录</b-button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>