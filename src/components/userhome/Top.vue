<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click="home">Home</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">Docs</a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">Overview</a>
            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">Modifiers</a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">Columns</a>
            <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">Layout</a>
            <a class="navbar-item" href="https://bulma.io/documentation/form/general/">Form</a>
            <hr class="navbar-divider" />
            <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">Elements</a>
            <a
              class="navbar-item is-active"
              href="https://bulma.io/documentation/components/breadcrumb/"
            >Components</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="bd-tw-button button"
                data-social-network="Twitter"
                data-social-action="tweet"
                data-social-target="https://bulma.io"
                target="_blank"
              >
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>个人资料</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    }
  }
};
</script>