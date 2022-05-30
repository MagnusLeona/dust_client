<template>
  <transition name="tag-selector">
    <div class="selector" v-show="visible">
      <div class="selector-title">
        <div class="selector-title-tag">请选择标签</div>
        <div
          class="selector-title-commit"
          @click="$emit('update:visible', false)"
        >
          确定
        </div>
      </div>
      <div
        v-for="(tagKey, index) in Object.keys(tagsList)"
        :key="`tags${index}`"
        class="selector-type"
      >
        <div class="selector-type-tag">{{ formatType(tagKey) }}</div>
        <div class="selector-type-label-container">
          <div
            v-for="(tag, idx) in tagsList[tagKey]"
            :key="`tag${idx}`"
            class="selector-type-label"
            :class="tags.includes(tag.id) ? 'selected' : ''"
            @click="select(tag.id)"
          >
            {{ tag.name }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    tagSelects: {
      type: Array,
      default: () => [],
    },
    tags: {
      type: Array,
      default: () => [],
    },
    visible: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    tagsList() {
      return this.tagSelects.reduce((prev, curr) => {
        if (!prev[curr.type]) {
          prev[curr.type] = [];
        }
        prev[curr.type].push(curr);
        return prev;
      }, {});
    },
  },
  methods: {
    select: function (value) {
      // 判断当前是否已经选中
      if (this.tags.includes(value)) {
        // 已经选中，表示需要取消选择
        this.$emit("remove", value);
      } else {
        this.$emit("insert", value);
      }
    },

    formatType: function (key) {
      switch (key) {
        case "1":
          return "后端";
        case "2":
          return "前端";
        case "3":
          return "容器";
        case "4":
          return "运维";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.selector {
  width: 600px;
  height: 400px;
  overflow: overlay;
  position: fixed;
  right: 20px;
  user-select: none;
  bottom: 40px;
  z-index: 999;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 5px rgba(101, 84, 79, 0.5), 0 0 5px rgba(101, 84, 79, 0.4),
    0 0 7px rgba(101, 84, 79, 0.3), 0 0 10px rgba(101, 84, 79, 0.2),
    0 0 15px rgba(101, 84, 79, 0.1);

  &::-webkit-scrollbar {
    width: 4px;
    background-color: rgba(95, 66, 95, 0);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(101, 84, 79, 0.9);
    border-radius: 2px;
  }

  &-title {
    position: sticky;
    top: 0;
    padding: 18px 40px;
    background-color: rgba(101, 84, 79, 1);
    display: flex;
    color: white;
    align-items: center;

    &-commit {
      padding: 0px 20px;
      margin-left: auto;
      cursor: pointer;
    }
  }

  &-type {
    width: 100%;
    padding: 5px 40px;

    &-tag {
      padding: 10px;
      color: rgba(101, 84, 79, 1);
      border-bottom: 1px solid rgba(101, 84, 79, 0.7);
    }

    &-label-container {
      display: flex;
      flex-wrap: wrap;
    }

    &-label {
      padding: 10px 15px;
      margin: 10px;
      box-shadow: 0 0 1px rgba(101, 84, 79, 0.5), 0 0 2px rgba(101, 84, 79, 0.4),
        0 0 3px rgba(101, 84, 79, 0.3), 0 0 4px rgba(101, 84, 79, 0.2),
        0 0 5px rgba(101, 84, 79, 0.1);
      transition: all ease 0.3s;
      cursor: pointer;
    }

    .selected {
      background-color: rgba(101, 84, 79, 0.8);
      color: white;
    }
  }
}

.tag-selector-enter-from,
.tag-selector-leave-to {
  opacity: 0;
  transform: translate3d(200px, 0, 0);
}

.tag-selector-enter-active,
.tag-selector-leave-active {
  transition: all ease 0.5s;
}
</style>