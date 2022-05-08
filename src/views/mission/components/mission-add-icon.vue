<template>
  <div
    class="mission-add-icon flex-center"
    @click="checkIfShowMissionAddBody()"
  >
    <div class="mission-add-icon-content flex-center">
      <svg-icon icon="icon-add" />
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
  font-weight: 900;
  position: absolute;
  right: 20px;
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
    animation-duration: 3s;
    animation-iteration-count: infinite;
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
</style>