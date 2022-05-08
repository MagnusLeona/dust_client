<template>
  <div class="mission-add-icon flex-center" @click="$emit('back')">
    <div class="mission-add-icon-content flex-center">
      <svg-icon icon="icon-left" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showBody: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, ctx) {
    const checkIfShowMissionAddBody = function () {
      ctx.emit("update:showBody", !props.showBody);
    };

    return {
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-weight: 900;
  position: absolute;
  left: 20px;
  bottom: 20px;
  border: 0;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  &-content {
    width: 30px;
    height: 30px;
    position: relative;
    margin: auto;
    font-size: 36px;
    z-index: 1000;
    line-height: 30px;
  }

  &:hover {
    animation-name: run-in-circle;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }
}

@keyframes run-in-circle {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>