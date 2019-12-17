<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="subtitle">热门板块</p>

        <p align="right">
          <b-button type="button is-info" outlined>全部板块</b-button>
        </p>
        <b-carousel>
          <b-carousel-item v-for="(content, i) in contents" :key="i">
            <section>
              <div class="hero-body has-text-centered">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">板块名:{{content.typeName}}</p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                      <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      板块简介:{{content.typeDesc}}
                      <br />
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">关注</a>
                    <a href="#" class="card-footer-item">进入板块</a>
                  </footer>
                </div>
              </div>
            </section>
          </b-carousel-item>
        </b-carousel>
      </article>
    </div>
    <div class="tile is-parent is-8">
      <article class="tile is-child box">
        <p align="right">
          <b-button type="button is-info" outlined @click="allart">全部帖子</b-button>
        </p>
        <p class="subtitle">推荐帖子</p>

        <div class="box">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>发帖人用户名</strong>
                  <small>@发帖人主页</small>
                  <br />发帖标题
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-reply"></i>
                    </span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-retweet"></i>
                    </span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-heart"></i>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
            <div class="media-right">
              <a class="navbar-item" slot="trigger" role="button">
                <b-button type="is-info" outlined>
                  <router-link to="/commenthome">查看详情</router-link>
                </b-button>
              </a>
            </div>
          </article>
        </div>

        <div class="box">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>发帖人用户名</strong>
                  <small>@发帖人主页</small>
                  <br />发帖标题
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-reply"></i>
                    </span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-retweet"></i>
                    </span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-heart"></i>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
            <div class="media-right">
              <a class="navbar-item" slot="trigger" role="button">
                <b-button type="is-info" outlined>查看详情</b-button>
              </a>
            </div>
          </article>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { getHotArticleType } from "@/api";
import { getPageMain } from "@/api";
export default {
  data() {
    return {
      contents: {
        typeId: 0,
        typeName: "",
        typeCreateTime: "",
        typeDesc: "",
        articleNum: 0
      },

      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ]
    };
  },
  mounted() {
    getHotArticleType()
      .then(res => {
        const { data } = res;
        this.contents = data.content;
      })
      .catch(() => {});

    getPageMain().then(res => {
      console.log(res);
    });
  },
  methods: {
    allart() {
      this.$router.push("/allarticlehome");
    }
  }
};
</script>

<style scoped>
.subtitle {
  text-align: left;
}
.button {
  text-align: center;
  margin: 0 auto;
}
</style>




