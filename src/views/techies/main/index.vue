<template>
  <div class="main flex-center">
    <div @click="toList(1)" class="button flex-center">前端</div>
    <div @click="toList(2)" class="button flex-center">后端</div>
    <div @click="toList(3)" class="button flex-center">运维</div>
    <div @click="toList(4)" class="button flex-center">架构</div>
    <div @click="toList(5)" class="button flex-center">其他</div>
    <div @click="toPublish" class="button flex-center">发布</div>
    <div></div>
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
.main {
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  background-color: white;
  flex-wrap: wrap;

  .button {
    width: 200px;
    height: 80px;
    border: 2px solid purple;
  }
}
</style>
