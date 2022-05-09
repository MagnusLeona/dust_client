<template>
  <transition
    enter-from-class="alert-enter-from"
    enter-active-class="alert-enter-active"
    leave-to-class="alert-leave-to"
    leave-active-class="alert-leave-active"
  >
    <div v-show="visible" class="toast">
      <div class="toast-text">{{ info.data.title }}</div>
    </div>
  </transition>
</template>

<script>
import Mask from "@/components/mask";
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    info: {
      type: Object,
      required: false,
    },
  },
  setup(props, ctx) {
    const buttonClick = function () {
      // 点了按钮之后发生什么？
      ctx.emit("btnClick", "confirm");
    };

    return {
      buttonClick,
    };
  },
  components: {
    Mask,
  },
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50px;
  left: 50%;
  padding: 10px 50px;
  max-width: 400px;
  transform: translateX(-50%);
  border-radius: 5px;
  box-shadow: 0 0 2px #aaa, 0 0 4px #bbb, 0 0 8px #ccc;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);

  &-text {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

.alert-enter-from {
  transform: translate(-50%, -150px);
}

.alert-enter-active {
  transition: all ease 0.5s;
}

.alert-leave-to {
  transform: translate(-50%, -150px);
}

.alert-leave-active {
  transition: all ease 0.5s;
}
</style>