<template>
  <div class="main flex-center">
    <div class="tag">
      <div class="tag-container">
        <div
          v-for="(tag, index) in tagsToSelect"
          class="tag-button"
          :key="`tagSelect${index}`"
        >
          <div class="tag-button-text flex-center">{{ tag.name }}</div>
          <div class="tag-button-cancel flex-center" @click="remove(tag.id)">
            <svg-icon icon="icon-close-brown" class="icon"></svg-icon>
          </div>
        </div>
      </div>
      <div class="tag-label flex-center" for="tag">
        <span :class="tags.length > 0 ? 'filled' : ''">标 签</span>
      </div>
      <div
        class="tag-add flex-center"
        @click="$emit('update:showTagSelector', true)"
      >
        <svg-icon icon="icon-add" class="icon-add"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
    tagSelects: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    tagsToSelect() {
      return this.tagSelects.filter((item) => {
        return this.tags.includes(item.id);
      });
    },
  },
  methods: {
    remove: function (e) {
      this.$emit("remove", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 70%;
  height: 60px;
  margin: 80px 0 20px 0;

  .tag {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;

    &-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      .tag-button {
        padding: 5px 10px;
        display: flex;
        height: 40px;
        align-items: center;

        &-text {
          color: white;
          height: 100%;
          padding: 0 10px;
          background-color: #65544f;
        }

        &-cancel {
          height: 100%;
          border: 1px solid #65544f;
          color: white;
        }
      }
    }

    &-label {
      width: 100%;
      color: #65544f;
      position: absolute;
      left: 0;
      height: 60px;
      z-index: 0;
      pointer-events: none;

      > span {
        transition: all ease 0.3s;
        z-index: -1;
      }

      .filled {
        transform: translate3d(0, -50px, 0);
      }

      &::before {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #65544f;
        position: absolute;
        transition: all ease 0.3s;
        top: 0;
        left: 0;
        opacity: 0.3;
      }

      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #65544f;
        transition: all ease 0.3s;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0.3;
      }
    }

    &-add {
      width: 60px;
      height: 60px;
      border: 2px solid rgba(101, 84, 79, 0.3);
      font-size: 30px;
      font-weight: 500;
      color: #65544f;
      margin-left: auto;
    }
  }
}

.icon-add {
  &:hover {
    animation-name: run-in-circle;
    animation-duration: 3s;
    animation-delay: infinite;
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

.icon {
  width: 24px;
  height: 24px;
}

.tag-transition-move {
  transition: all 0.3s ease;
}

.tag-transition-enter-active,
.tag-transition-leave-active {
  position: absolute;
}

.tag-transition-enter-from,
.tag-transition-leave-to {
  opacity: 0;
  transform: translate3d(0, 10px, 0);
}
</style>
