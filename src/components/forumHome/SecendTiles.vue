<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <progress class="progress is-whrite is-small" value="100%" max="30">30%</progress>
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box">
            <p class="title">活跃用户</p>
            <p class="subtitle">Top box</p>
          </article>
          <article class="tile is-child box">
            <p class="title">最新发布的帖子</p>
            <p class="subtitle">Bottom box</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">放学校风景图</p>
            <b-carousel>
              <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                  <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                  </div>
                </section>
              </b-carousel-item>
            </b-carousel>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">友情链接</p>
          <p class="subtitle">其他大学论坛等一些技术论坛</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <div class="content">
          <p class="title">每日更新英文美文</p>
          <p class="subtitle">With even more content</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ]
    };
  }
};
</script>


<style scoped>
</style>