<template>
  <div class="markdown-title flex-center">
    <div class="text" v-show="showTitle">Java多线程知识</div>
  </div>
</template>

<script>
export default {
  props: {
    showTitle: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>

<style lang="scss" scoped>
.markdown-title {
  height: 72px;
  z-index: 80;
  display: inline-block;
  padding: 20px 0;
  position: sticky;
  top: 0;

  .text {
    padding: 15px 40px 15px 50px;
    background-color: rgba(189, 189, 189, 0.6);
    box-shadow: 0 0 3px rgba(180, 180, 180, 0.9),
      0 0 6px rgba(180, 180, 180, 0.8), 0 0 9px rgba(180, 180, 180, 0.7),
      0 0 18px rgba(180, 180, 180, 0.6), 0 0 36px rgba(180, 180, 180, 0.5);
  }
}
</style>