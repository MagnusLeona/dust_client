<template>
  <div class="sort">
    <div class="text">排序规则：{{ sortTypeName }}</div>
    <div class="icon-container">
      <svg-icon
        icon="icon-sort-down-gray"
        class="icon"
        :class="desc ? 'desc' : 'asc'"
        @click="$emit('sortByDesc', !desc)"
      ></svg-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sortType: {
      type: Number,
    },
    desc: {
      type: Boolean,
    },
  },
  computed: {
    sortTypeName() {
      switch (this.sortType) {
        case 0:
          return "默认";
        case 1:
          return "状态";
        case 2:
          return "创建时间";
        case 3:
          return "截至时间";
        default:
          return "默认";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sort {
  height: 60px;
  position: absolute;
  top: 40px;
  right: 110px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 100;
  user-select: none;

  .text {
    color: white;
    font-size: 18px;
    margin-right: 10px;
  }

  .icon-container {
    padding: 5px;
    border-radius: 5px;
    transition: all ease 0.2s;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}

.icon {
  width: 27px;
  height: 27px;
  transition: all ease 0.3s;
}

.desc {
  transform: rotateZ(0);
}

.asc {
  transform: rotateZ(-180deg);
}
</style>