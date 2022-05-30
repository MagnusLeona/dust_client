<template>
  <div
    class="mission-add-icon"
    @mouseover="showMore = true"
    @mouseleave="showMore = false"
  >
    <transition
      enter-active-class="transition-active"
      enter-from-class="transition-from"
      leave-to-class="transition-from"
      leave-active-class="transition-active"
    >
      <div class="mission-add-icon-functions" v-show="showMore">
        <svg-icon icon="icon-preview-gray" class="icon"></svg-icon>
        <svg-icon
          icon="icon-commit-gray
          "
          class="icon"
          @click="$emit('beforeCommit')"
        ></svg-icon>
      </div>
    </transition>

    <div class="mission-add-icon-content flex-center">
      <svg-icon icon="icon-more-func" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {},
  setup(props, ctx) {
    let showMore = ref(false);

    return {
      showMore,
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.mission-add-icon {
  display: flex;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;

  &-functions {
    position: absolute;
    bottom: 60px;
    color: white;
    display: flex;
    flex-direction: column;

    .function-icon {
      width: 30px;
      height: 30px;
    }
  }

  &-content {
    width: 30px;
    height: 30px;
    position: relative;
    font-size: 36px;
    z-index: 10;
    line-height: 30px;
    &:hover {
      animation-name: run-in-circle;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }
  }
}

@keyframes run-in-circle {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes scale-up-down {
  25% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(0.8);
  }
}

.icon {
  width: 30px;
  height: 30px;
  margin: 15px 0;
  transition: all ease 0.2s;

  &:hover {
    animation-name: run-in-circle;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
}

.transition-active {
  transition: all ease 0.5s;
}
.transition-from {
  transform: translateY(100px);
  opacity: 0;
}
</style>