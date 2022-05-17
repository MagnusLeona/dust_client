<template>
  <transition
    enter-from-class="mask-enter-from"
    enter-active-class="mask-enter-active"
    leave-to-class="mask-leave-to"
    leave-active-class="mask-leave-active"
  >
    <div
      class="mask flex-center"
      v-show="visible"
      @click="
        (e) => {
          e.stopPropagation();
        }
      "
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(240, 240, 240, 0.9);
}

.mask-enter-from {
  opacity: 0;
}

.mask-enter-active {
  transition: all ease 0.5s;
}

.mask-leave-to {
  opacity: 0;
}

.mask-leave-active {
  transition: all ease 0.5s;
}
</style>