<template>
  <div class="home-navigator flex-center">
    <transition name="my-navigator">
      <div
        class="home-navigator-body"
        v-show="home"
        :class="home ? 'navi-show' : ''"
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    home: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.home-navigator {
  width: 300px;
  height: 500px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  z-index: 0;

  &-body {
    width: 300px;
    height: 500px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 8px;
  }
}

.my-navigator-enter-from,
.my-navigator-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.my-navigator-enter-active {
  transition: all ease 0.6s;
}
.my-navigator-leave-active {
  transition: all ease 0.3s;
}
</style>