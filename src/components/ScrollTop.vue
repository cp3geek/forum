<template>
  <div>
    <img
      class="back_to_top"
      v-show="showTop"
      src="../assets/5.jpg"
      @click="scrollToY(0, 1500, 'easeInOutQuint')"
    />
  </div>
</template>

<script>
window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

export default {
  name: "BackToTop",
  data() {
    return {
      scrollTop: 0
    };
  },
  methods: {
    scrollToY(scrollTargetY, speed, easing) {
      // scrollTargetY: the target scrollY property of the window
      // speed: time in pixels per second
      // easing: easing equation to use

      let scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollTargetY = scrollTargetY || 0;
      speed = speed || 2000;
      easing = easing || "easeOutSine";
      let currentTime = 0;
      // min time .1, max time .8 seconds
      let time = Math.max(
        0.1,
        Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
      );

      // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
      let easingEquations = {
        easeOutSine: function(pos) {
          return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function(pos) {
          return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: function(pos) {
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
          }
          return 0.5 * (Math.pow(pos - 2, 5) + 2);
        }
      };

      // add animation loop
      function tick() {
        currentTime += 1 / 60;

        let p = currentTime / time;
        let t = easingEquations[easing](p);

        if (p < 1) {
          window.requestAnimFrame(tick);
          window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
          window.scrollTo(0, scrollTargetY);
        }
      }

      // call it once to get started
      tick();
    },
    getScrollTop() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    }
  },
  computed: {
    showTop: function() {
      return this.scrollTop > 50;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollTop);
  }
};
</script>

<style lang="less" scoped>
.back_to_top {
  position: fixed;
  z-index: 999;
  bottom: 1.8rem;
  right: 0.26rem;
  width: 25px;
  height: 30px;
  overflow: hidden;
}
</style>

