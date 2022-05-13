<template>
  <div
    class="markdown-title"
    @mouseover="forceShow = true"
    @mouseleave="forceShow = false"
  >
    <div
      class="title-icon"
      :class="showTitle || forceShow ? '' : 'slide-to-right'"
    >
      <svg-icon icon="icon-text" class="icon"></svg-icon>
    </div>
    <transition
      enter-active-class="active"
      enter-from-class="animation-type"
      leave-to-class="animation-type"
      leave-active-class="active"
    >
      <div class="text" v-show="showTitle || forceShow">Java多线程知识</div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import transition from "../../../../components/slide/transition.vue";
export default {
  components: { transition },
  props: {
    showTitle: {
      type: Boolean,
      default: () => true,
    },
  },
  setup() {
    let forceShow = ref(false);
    return {
      forceShow,
    };
  },
};
</script>

<style lang="scss" scoped>
.markdown-title {
  z-index: 80;
  height: 90px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .title-icon {
    margin-left: 30px;

    transition: all ease 0.5s;
  }

  .text {
    margin-left: 30px;
    padding: 15px 40px 15px 50px;
    border-radius: 0 5px 5px 0;
    background-color: rgba(189, 189, 189, 0.5);
    box-shadow: 0 0 3px rgba(180, 180, 180, 0.9),
      0 0 6px rgba(180, 180, 180, 0.75), 0 0 9px rgba(180, 180, 180, 0.6),
      0 0 18px rgba(180, 180, 180, 0.5), 0 0 36px rgba(180, 180, 180, 0.4);
  }
}

.icon {
  width: 30px;
  height: 30px;
}

.slide-to-right {
  transform: translateX(100%) rotateZ(180deg);
}

.active {
  transition: all 0.5s ease;
}

.animation-type {
  transform: translateX(-100%);
  opacity: 0;
}
</style>