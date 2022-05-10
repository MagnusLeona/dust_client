<template>
  <div class="todo-header">
    <div class="todo-header-title flex-center">历 史 任 务</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.todo-header {
  width: 240px;
  height: 40px;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;

  &-title {
    width: 240px;
    height: 36px;
    color: #fff;
    position: absolute;
    left: 20px;
    top: 30px;
    user-select: none;
    font-family: Comic Sans MS;
    background-color: rgba(183, 175, 197, 0.259);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 5px rgb(162, 155, 172), 0 0 10px rgba(180, 173, 190, 0.8),
      0 0 15px rgba(164, 154, 178, 0.5), 0 0 20px rgba(176, 170, 184, 0.2),
      0 0 30px rgba(235, 234, 237, 0.1);
  }
}
</style>