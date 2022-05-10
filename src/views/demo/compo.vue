<template>
  <div>
    <transition-group name="list" tag="div" appear>
      <div v-for="item in list" v-bind:key="`dem${item}`" class="list-item">
        <div>abc</div>
        <div>bcaad{{ item }}</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  display: inline-block;
  width: 100%;
  margin-right: 10px;
}
/*设置列表transition-group的name为list的入场以及离场动画效果*/
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
            /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

/* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地移动过来的效果 */
.list-move {
  transition: all 0.6s ease;
}
.list-leave-active {
  position: absolute;
}
</style>