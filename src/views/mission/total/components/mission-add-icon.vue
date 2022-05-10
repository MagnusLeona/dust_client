<template>
  <div
    class="mission-add-icon flex-center"
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
        <svg-icon
          icon="icon-filter"
          class="icon"
          @click="$emit('sortBy')"
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
  setup(props, ctx) {
    let showMore = ref(false);

    const checkIfShowMissionAddBody = function () {
      ctx.emit("update:showBody", !props.showBody);
    };

    return {
      showMore,
      checkIfShowMissionAddBody,
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.mission-add-icon {
  height: 60px;
  font-weight: 900;
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  padding: 0 20px;

  &-functions {
    color: white;
    display: flex;

    .function-icon {
      width: 30px;
      height: 30px;
    }
  }

  &-content {
    margin-left: 20px;
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

.icon {
  width: 30px;
  height: 30px;
  margin: 0 20px;
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
  transform: translateX(100px);
  opacity: 0;
}
</style>