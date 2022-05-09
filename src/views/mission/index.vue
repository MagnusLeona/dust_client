<template>
  <div class="mission">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.from {
  transform: rotateX(90deg);
}

.active {
  transition: all ease 0.5s;
}

.to {
  transform: rotateX(90deg);
}
</style>