<template>
  <Mask :visible="visible">
    <transition
      enter-from-class="alert-enter-from"
      enter-active-class="alert-enter-active"
      leave-to-class="alert-leave-to"
      leave-active-class="alert-leave-active"
    >
      <div class="alert" v-show="visible">
        <div class="alert-title flex-center">
          {{ info.data.title || "温馨提示" }}
        </div>
        <div class="alert-body">
          <div class="alert-body-content flex-center">
            {{ info.data.content || "内容" }}
          </div>
        </div>
        <div class="alert-button flex-center" @click="buttonClick">
          <div class="svg-container">
            <svg height="100%" width="100%" class="svg-rect">
              <rect class="outline" height="100%" width="100%" />
            </svg>
            <div class="alert-button-text flex-center">
              {{ info.data.button || "确认" }}
            </div>
          </div>
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
.alert {
  user-select: none;
  width: 360px;
  height: 240px;
  overflow: hidden;
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
    cursor: pointer;
    height: 50px;
    padding: 5px 0 10px 0;

    .svg-container {
      width: 100px;
      height: 100%;
      position: relative;

      &:hover {
        .svg-rect {
          .outline {
            stroke-dasharray: 270 0;
            stroke-dashoffset: 220;
          }
        }
      }

      .svg-rect {
        position: absolute;
        left: 0;
        top: 0;
        .outline {
          transition: all ease 0.5s;
          stroke-width: 1px;
          stroke: #bbb;
          position: absolute;
          left: 0;
          top: 0;
          fill: none;
          stroke-dasharray: 0 270;
          stroke-dashoffset: 85;
        }
      }

      .alert-button-text {
        height: 100%;
      }
    }
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