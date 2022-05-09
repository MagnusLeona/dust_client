<template>
  <div class="techies">
    <div class="doing">在做了，在做了.jpg</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.techies {
  background-image: url("~@/assets/images/background/back-008.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  .doing {
    position: absolute;
    top: 50%;
    left: 100px;
    font-size: 80px;
  }
}
</style>