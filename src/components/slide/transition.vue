<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot />
  </transition>
</template>

<script>
const elTransition = ".5s height ease";
export default {
  methods: {
    beforeEnter: function (el) {
      let style = window.getComputedStyle(el);
      el.style.transition = elTransition;
      if (!el.dataset) {
        el.dataset = {};
      }
      el.dataset.oldPaddingTop = style.paddingTop;
      el.dataset.oldPaddingBottom = style.paddingBottom;
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },

    enter: function (el) {
      let style = window.getComputedStyle(el);
      el.dataset.oldOverflow = style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = "";
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }

      el.style.overflow = "hidden";
    },

    afterEnter: function (el) {
      el.style.transition = "";
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
    },

    beforeLeave: function (el) {
      if (!el.dataset) {
        el.dataset = {};
      }
      // 保留旧的padding数据和overflow数据
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;
      // 设置为离开前的滚动高度
      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },

    leave: function (el) {
      if (el.scrollHeight !== 0) {
        el.style.transition = elTransition;
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },

    afterLeave: function (el) {
      el.style.transition = "";
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    },
  },
};
</script>

<style>
</style>