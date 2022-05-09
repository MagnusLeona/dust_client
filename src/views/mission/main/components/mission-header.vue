<template>
  <div class="todo-header">
    <div class="todo-header-title flex-center">My Missions</div>
  </div>
</template>

<script>
import svgIcon from "@/components/svg/svg-icon.vue";
export default {
  components: { svgIcon },
};
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
    left: 0;
    top: 0;
    user-select: none;
    font-family: Comic Sans MS;
    background-color: rgba(92, 67, 135, 0.5);
    transform: rotateZ(-40deg) translateX(-60px);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 5px rgb(152, 143, 165), 0 0 10px rgba(148, 139, 162, 0.9),
      0 0 15px rgba(164, 154, 178, 0.8), 0 0 20px rgba(176, 170, 184, 0.419),
      0 0 30px rgba(204, 202, 208, 0.142);
  }
}
</style>