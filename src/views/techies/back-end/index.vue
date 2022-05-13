<template>
  <div class="front-end">
    <div class="front-end-box">
      <div class="front-end-article" @click="toDetail">后端技术规范综述</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toDetail: function () {
      this.$router.replace({
        path: "/techies/artical-detail",
        query: {
          from: "back-end",
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.front-end {
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(
      circle at 28% 44%,
      hsla(77, 0%, 3%, 0.05) 0%,
      hsla(77, 0%, 3%, 0.05) 1%,
      transparent 1%,
      transparent 73%,
      transparent 73%,
      transparent 100%
    ),
    radial-gradient(
      circle at 81% 65%,
      hsla(77, 0%, 3%, 0.05) 0%,
      hsla(77, 0%, 3%, 0.05) 18%,
      transparent 18%,
      transparent 77%,
      transparent 77%,
      transparent 100%
    ),
    radial-gradient(
      circle at 51% 45%,
      hsla(77, 0%, 3%, 0.05) 0%,
      hsla(77, 0%, 3%, 0.05) 11%,
      transparent 11%,
      transparent 12%,
      transparent 12%,
      transparent 100%
    ),
    radial-gradient(
      circle at 10% 56%,
      hsla(77, 0%, 3%, 0.05) 0%,
      hsla(77, 0%, 3%, 0.05) 82%,
      transparent 82%,
      transparent 90%,
      transparent 90%,
      transparent 100%
    ),
    radial-gradient(
      circle at 42% 35%,
      hsla(77, 0%, 3%, 0.05) 0%,
      hsla(77, 0%, 3%, 0.05) 22%,
      transparent 22%,
      transparent 77%,
      transparent 77%,
      transparent 100%
    ),
    radial-gradient(
      circle at 26% 86%,
      hsla(77, 0%, 3%, 0.05) 0%,
      hsla(77, 0%, 3%, 0.05) 17%,
      transparent 17%,
      transparent 52%,
      transparent 52%,
      transparent 100%
    ),
    radial-gradient(
      circle at 52% 88%,
      hsla(77, 0%, 3%, 0.05) 0%,
      hsla(77, 0%, 3%, 0.05) 49%,
      transparent 49%,
      transparent 70%,
      transparent 70%,
      transparent 100%
    ),
    radial-gradient(
      circle at 62% 41%,
      hsla(77, 0%, 3%, 0.05) 0%,
      hsla(77, 0%, 3%, 0.05) 14%,
      transparent 14%,
      transparent 45%,
      transparent 45%,
      transparent 100%
    ),
    radial-gradient(
      circle at 54% 59%,
      hsla(77, 0%, 3%, 0.05) 0%,
      hsla(77, 0%, 3%, 0.05) 42%,
      transparent 42%,
      transparent 86%,
      transparent 86%,
      transparent 100%
    ),
    linear-gradient(135deg, hsl(196, 0%, 96%), hsl(196, 0%, 96%));

  &-box {
    width: 100%;
    padding: 100px 100px;

    .front-end-article {
      width: 100%;
      padding: 20px 50px;
      border: 2px solid black;
    }
  }
}
</style>