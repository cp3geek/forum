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
              <b-carousel-item v-for="(carousel, i) in 6" :key="i">
                <section :class="`hero is-medium `">
                  <div class="hero-body has-text-centered">
                    <span class="image">
                      <img :src="getImgUrl(i)" />
                    </span>
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
          <hr />
          <div class="content">
            <a href="https://stackoverflow.com/">StackOverflow</a>&nbsp;
            <a href="https://github.com/">GitHub</a>&nbsp;
            <a href="https://www.youtube.com/">YouTube</a>&nbsp;
            <a href="https://tuna.moe/">清华大学TUNA协会</a>
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
            <p>
              There were a sensitivity and a beauty to her that have nothing to do with looks. She was one to be listened to, whose words were so easy to take to heart.
              It is said that the true nature of being is veiled. The labor of words, the expression of art, the seemingly ceaseless buzz that is human thought all have in common the need to get at what really is so. The hope to draw close to and possess the truth of being can be a feverish one. In some cases it can even be fatal, if pleasure is one's truth and its attainment more important than life itself. In other lives, though, the search for what is truthful gives life.
              她有着一种与外表无关的灵气和美丽。她的话语轻而易举地征服了人心，她正是我们要聆听的声音。
              很多人都说人生的真谛是个未知的概念。言词的费力诠释、艺术的着力表现还有人类那似乎永无休止的纷繁思考，三者都苦苦追寻人生的真谛。希望走近以至完全把握存在的真意可以令人十分狂热。有时候，有些人以自己笃信的真理为志趣，追寻真理甚于保全生命，于是就有舍生取义之举。然而，也有另外的一种人生，他们在寻求真谛的过程中灌溉生命。
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/576/400`;
    }
  }
};
</script>


<style scoped>
.hero.is-medium .hero-body {
  padding-top: 0rem;
  padding-bottom: 0rem;
}
</style>