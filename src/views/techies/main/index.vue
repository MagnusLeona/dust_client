<template>
  <div class="main flex-center">
    <div @click="toFrontEnd" class="button flex-center">前端</div>
    <div @click="toBackEnd" class="button flex-center">后端</div>
    <div @click="toPublish" class="button flex-center">发布</div>
  </div>
</template>

<script>
export default {
  methods: {
    toFrontEnd: function () {
      this.$router.push("/techies/front-end");
    },

    toBackEnd: function () {
      this.$router.push("/techies/back-end");
    },

    toPublish: function () {
      this.$router.push("/techies/publish");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  justify-content: space-around;

  .button {
    width: 200px;
    height: 80px;
    border: 2px solid purple;
  }
}
</style>