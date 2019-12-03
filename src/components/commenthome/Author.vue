<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">
                <span class="icon is-small">
                  <i class="fas fa-home" aria-hidden="true"></i>
                </span>
                <span>Bulma</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon is-small">
                  <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                <span>Documentation</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon is-small">
                  <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
                </span>
                <span>Components</span>
              </a>
            </li>
            <li class="is-active">
              <a href="#">
                <span class="icon is-small">
                  <i class="fas fa-thumbs-up" aria-hidden="true"></i>
                </span>
                <span>关注楼主</span>
              </a>
            </li>
          </ul>
        </nav>

        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>用户名</strong>
                <small>主页</small>
                <br />某某话题
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>