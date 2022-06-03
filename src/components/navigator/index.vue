<template>
  <div class="home-navigator flex-center">
    <transition name="my-navigator">
      <div
        class="home-navigator-body"
        v-show="home"
        :class="home ? 'navi-show' : ''"
      >
        <div class="item" @click="$emit('toLogin')">用户登录</div>
        <div class="item" @click="$emit('toUser')">个人主页</div>
        <div class="item" @click="$emit('toMain')">功能入口</div>
        <div class="item" @click="$emit('toTechies')">技术分享</div>
      </div>
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
    padding: 30px 0;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .item {
      font-size: 20px;
      color: rgba(255, 255, 255, 1);
      padding: 10px 20px;
      transition: all ease 0.3s;
      letter-spacing: 3px;
      margin-bottom: 10px;
      border-bottom: 1.5px solid white;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
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
