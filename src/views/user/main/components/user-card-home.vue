<template>
  <div class="home flex-center">
    <div>Hi~ {{ name }}, 开心每一天</div>
    <div>此模块还在开发哦~</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: white;
  flex-direction: column;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
