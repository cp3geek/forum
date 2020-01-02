<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>此项目</strong> by
        <a href="https://github.com/Chp3">Chp3</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed
        <a
          href="https://github.com/Chp3/forum"
        >CC BY NC SA 4.0</a>.
      </p>
    </div>
    {{time}}
  </footer>
</template>


<script>
// 2019-04-12
export default {
  data() {
    return {
      time: ""
    };
  },
  created() {
    this.$moment().format("yyyy-MM-dd");
    let dateValue = this.$moment(new Date()).format("YYYY-MM-DD"); //
    this.time = dateValue;
  }
};
</script>

