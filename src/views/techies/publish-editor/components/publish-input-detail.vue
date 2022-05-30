<template>
  <transition
    enter-active-class="detail-active"
    enter-from-class="detail-transition"
    leave-to-class="detail-transition"
    leave-active-class="detail-active"
  >
    <div class="detail" v-show="visible">
      <div class="detail-block-title">
        <div class="label flex-center">标 题</div>
        <input
          type="text"
          id="title"
          autocomplete="off"
          class="input-title"
          :value="title"
          @change="inputTitle"
        />
      </div>
      <div class="detail-block-description">
        <div class="label flex-center">简 介</div>
        <textarea
          type="text"
          id="description"
          autocomplete="off"
          class="input-description"
          :value="description"
          @change="inputDescription"
        />
      </div>
      <div class="detail-block-tags">
        <div class="label flex-center" @click="$emit('showTagSelector')">
          标 签
        </div>
        <div class="tag-label">
          <div
            v-for="(tag, index) in tagsToSelect"
            :key="`tag${index}`"
            class="tag-label-box"
          >
            <div class="text">{{ tag.name }}</div>
            <div class="svg-container">
              <svg-icon
                icon="icon-close-brown"
                @click="$emit('remove', tag.id)"
              ></svg-icon>
            </div>
          </div>
        </div>
        <div class="add flex-center">
          <svg-icon
            icon="icon-add"
            class="icon"
            @click="$emit('showSelector')"
          ></svg-icon>
        </div>
      </div>
      <div class="detail-block-button flex-center">
        <div class="commit-button flex-center" @click="$emit('commit')">
          提 交 发 布
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: () => false,
    },
    tags: {
      type: Array,
      default: () => [],
    },
    tagSelects: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
    },
    description: {
      type: String,
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
    inputTitle: function (e) {
      this.$emit("update:title", e.target.value);
    },

    inputDescription: function (e) {
      this.$emit("update:description", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  width: 600px;
  height: 300px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px 20px;
  z-index: 80;
  box-shadow: 0 -1px 5px rgba(80, 109, 118, 0.3),
    0 -1px 10px rgba(80, 109, 118, 0.2), 0 -1px 15px rgba(80, 109, 118, 0.1);

  .detail-block-title {
    display: flex;
    align-items: center;
    margin: 10px 0;
    height: 40px;
    .input-title {
      border: 1.5px solid rgba(80, 109, 118, 0.3);
      width: 400px;
      height: 100%;
      outline: none;

      &:focus {
        border: 1.5px solid rgba(80, 109, 118, 1);
      }
    }
  }
  .detail-block-description {
    display: flex;
    align-items: flex-start;
    margin: 10px 0;
    height: 100px;
    .input-description {
      border: 1.5px solid rgba(80, 109, 118, 0.3);
      width: 520px;
      resize: none;
      outline: none;
      font-size: 14px;
      height: 100%;
      transition: all ease 0.3;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;

      &::-webkit-scrollbar {
        width: 4px;
        background-color: rgba(95, 66, 95, 0.1);
        border-radius: 2px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(80, 109, 118, 0.5);
        border-radius: 2px;
      }

      &:focus {
        border: 1.5px solid rgba(80, 109, 118, 1);
      }
    }
  }

  .detail-block-tags {
    display: flex;
    align-items: flex-start;
    margin: 10px 0;
    height: 40px;
    border: 1px solid rgba(80, 109, 118, 0.3);

    .tag-label {
      display: flex;
      align-items: center;
      height: 100%;
      overflow-x: overlay;
      &::-webkit-scrollbar {
        width: 10px;
        height: 0px;
        background-color: rgba(95, 66, 95, 0);
        border-radius: 2px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(80, 109, 118, 0.9);
        border-radius: 0px;
      }

      &-box {
        display: flex;
        align-items: center;
        height: 25px;
        margin: 0 5px;

        .text {
          background-color: rgba(80, 109, 118, 0.9);
          height: 100%;
          color: white;
          padding: 1px 3px;
        }

        .svg-container {
          height: 100%;
          border: 1px solid rgba(80, 109, 118, 0.9);
        }
      }
    }

    .add {
      width: 40px;
      height: 100%;
      margin-left: auto;
      border-left: 1px solid rgba(80, 109, 118, 0.3);
    }
  }

  .detail-block-button {
    margin-top: 20px;
    .commit-button {
      width: 140px;
      height: 40px;
      user-select: none;
      cursor: pointer;
      border-radius: 0;
      border: 1px solid rgba(80, 109, 118, 1);
      outline: none;
      transition: all ease 0.3s;
      background-color: rgba(80, 109, 118, 1);
      color: white;
      &:hover {
        box-shadow: 0 0 1px rgba(92, 113, 119, 0.6),
          0 0 2px rgba(101, 115, 120, 0.5), 0 0 4px rgba(103, 111, 113, 0.4),
          0 0 8px rgba(157, 164, 167, 0.3), 0 0 16px rgba(188, 196, 198, 0.2);
      }
    }
  }

  .label {
    color: white;
    background-color: rgba(80, 109, 118, 0.9);
    width: 50px;
    height: 100%;
  }
}

.icon {
  width: 27px;
  height: 27px;

  &:hover {
    animation-name: circle;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
}

@keyframes circle {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.detail-transition {
  opacity: 0;
  transform: translate3d(-50%, 100%, 0);
}
.detail-active {
  transition: all ease 0.5s;
}
</style>