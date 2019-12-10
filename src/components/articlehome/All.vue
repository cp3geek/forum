<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent is-8">
      <article class="tile is-child box">
        <p align="right">
          <button class="button is-info">全部帖子</button>
        </p>

        <div class="box" v-for="(content,index) in contents" :key="index">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>发帖人用户名:{{content.artId}}</strong>

                  <br />
                  发帖标题:{{content.artTitle}}
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fab fa-hotjar"></i>
                    </span>
                    {{content.artHotNum}}
                  </a>

                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-comment-dots"></i>
                    </span>
                    {{content.artComNum}}
                  </a>

                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-heart"></i>
                    </span>
                    {{content.artLikeNum}}
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

        <section>
          <b-pagination
            :total="total"
            :current.sync="current"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
          ></b-pagination>
        </section>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="subtitle">所有板块</p>

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">板块名</p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <a href="#">跳蚤市场</a>.
              <a href="#">步行街</a>
              <a href="#">篮球</a>
              <a href="#">学习</a>
              <br />
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">进入板块分区</a>
          </footer>
        </div>
      </article>
    </div>
  </div>
</template>


<script>
import { getAllArticle } from "@/api";
export default {
  data() {
    return {
      total: 5,
      current: 1,
      perPage: 5, //一页的记录数
      rangeBefore: 3,
      rangeAfter: 1,
      order: "is-centered",
      size: "default",
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",

      totalPages: 0,

      contents: [
        {
          artId: 0,
          artComNum: "",
          artCommentId: 0,
          artContent: "",
          artCreTime: "",
          artHotNum: 0,
          artLikeNum: 0,
          artTitle: "",
          artTypeId: 0,
          artUserId: 0,
          artView: 0
        }
      ]
    };
  },
  mounted() {
    getAllArticle()
      .then(res => {
        const { data } = res;
        if (data != null) {
          this.total = data.totalElements; //总记录数
          this.totalPages = data.totalPages; //总页数
          console.log(this.totalElements);
          this.current = data.number;
          this.contents = data.content;
        }
      })
      .catch(() => {
        alert("服务器被吃了");
      });
  }
};
</script>

<style scoped>
</style>