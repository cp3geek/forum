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

        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
          <a class="pagination-previous">上一页</a>
          <a class="pagination-next">下一页</a>
          <ul class="pagination-list">
            <li>
              <a class="pagination-link" aria-label="Goto page 1">1</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 45">45</a>
            </li>
            <li>
              <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 47">47</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 86">{{totalPages}}</a>
            </li>
          </ul>
        </nav>
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
      totalPages: 0,
      totalElements: 0,
      currentnumber: 1,
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
          this.totalPages = data.totalPages;
          this.totalElements = data.totalElements;
          this.currentnumber = data.number;
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