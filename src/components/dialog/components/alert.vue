<template>
  <Mask :visible="visible">
    <transition
      enter-from-class="alert-enter-from"
      enter-active-class="alert-enter-active"
      leave-to-class="alert-leave-to"
      leave-active-class="alert-leave-active"
    >
      <div class="alert" v-show="visible">
        <div class="alert-title flex-center">{{ info.title || "标题" }}</div>
        <div class="alert-body">
          <div class="alert-body-content flex-center">
            {{ info.content || "内容" }}
          </div>
        </div>
        <div class="alert-button flex-center" @click="buttonClick">
          {{ info.button || "确认" }}
        </div>
      </div>
    </transition>
  </Mask>
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
      context.emit("btnClick", "confirm");
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
.alert {
  width: 360px;
  height: 240px;
  overflow: hidden;
  // transform: translate(-50%, -50%);
  box-shadow: 0 0 10px #bbb, 0 0 20px #ccc, 0 0 40px #ddd, 0 0 80px #eee;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.5);

  &-title {
    height: 50px;
  }

  &-body {
    height: 140px;
    padding: 0 30px;

    &-content {
      height: 100%;
      width: 100%;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
  }

  &-button {
    height: 50px;
  }
}

.alert-enter-from {
  transform: scale(0);
}

.alert-enter-active {
  transition: all ease 0.5s;
}

.alert-leave-to {
  transform: scale(0);
}

.alert-leave-active {
  transition: all ease 0.5s;
}
</style>