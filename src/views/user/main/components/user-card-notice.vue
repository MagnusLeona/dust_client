<template>
  <div class="my-notice">
    <div class="my-notice-body flex-center">
      <!-- <img src="@/assets/images/background/back-008.jpg" alt="" class="img" /> -->
      <svg-icon icon="icon-nodata" class="no-data-svg" />
      <div class="no-data-text">还没有未读消息哦~</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-notice {
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;

  &-body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
  }
}

.img {
  width: 100%;
}

.no-data-svg {
  width: 200px;
  height: 200px;
}
</style>
