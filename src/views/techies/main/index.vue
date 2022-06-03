<template>
  <div class="main flex-center">
    <div class="main-buttons">
      <div @click="toList(1)" class="button flex-center">前端</div>
      <div @click="toList(2)" class="button flex-center">后端</div>
      <div @click="toList(3)" class="button flex-center">运维</div>
      <div @click="toList(4)" class="button flex-center">架构</div>
      <div @click="toList(5)" class="button flex-center">原生</div>
      <div @click="toList(6)" class="button flex-center">算法</div>
      <div @click="toList(7)" class="button flex-center">AI</div>
      <div @click="toList(100)" class="button flex-center">其他</div>
      <div @click="toPublish" class="button flex-center">发布</div>
    </div>
    <MainBack @back="back" />
  </div>
</template>

<script>
import MainBack from "./components/main-back.vue";

export default {
  components: {
    MainBack,
  },
  methods: {
    toList: function (type) {
      this.$router.push({
        path: "/techies/article-list",
        query: {
          type: type,
        },
      });
    },

    toPublish: function () {
      this.$router.push("/techies/publish");
    },

    back: function () {
      this.$router.replace({
        path: "/main",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$ruler: 16px;
$color-red: #ae1100;
$color-bg: #ebecf0;
$color-shadow: #babecc;
$color-white: #fff;

.main {
  width: 100%;
  height: 100vh;
  padding: 100px;
  align-items: center;
  background-color: #ebecf0;

  &-buttons {
    width: 60%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .button {
      margin: 10px;
      width: 180px;
      height: 72px;
      border: 0;
      outline: 0;
      font-size: 20px;
      padding: $ruler;
      border-radius: $ruler * 20;
      background-color: $color-bg;
      box-shadow: -5px -5px 20px $color-white, 5px 5px 20px $color-shadow;

      &:hover {
        box-shadow: inset -1px -1px 2px $color-white,
          inset 1px 1px 2px $color-shadow;
      }
    }
  }
}
</style>
