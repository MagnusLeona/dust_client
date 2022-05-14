<template>
  <div
    class="publish-button"
    :class="mode === 1 ? 'left' : mode === 2 ? 'right' : ''"
  >
    <div class="block-edit flex-center" @click="changeMode(2)">在线编辑</div>
    <!-- <div class="block-back flex-center"></div> -->
    <div class="block-upload flex-center" @click="changeMode(1)">上传作品</div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: Number,
    },
  },
  methods: {
    changeMode: function (value) {
      if (this.mode === 1) {
        if (value === 1) {
          this.$emit("changeMode", 0);
        } else {
          this.$emit("changeMode", 2);
        }
      } else if (this.mode === 2) {
        if (value === 2) {
          this.$emit("changeMode", 0);
        } else {
          this.$emit("changeMode", 1);
        }
      } else {
        this.$emit("changeMode", value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.publish-button {
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  z-index: 300;
  top: 0;
  left: 50%;
  user-select: none;
  transition: all linear 0.5s;
  height: 100%;

  .block-edit {
    width: 180px;
    height: 180px;
    background-color: #506d76;
    position: absolute;
    top: 30%;
    left: 50%;
    z-index: 1;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    color: white;
    box-shadow: 3px 3px 8px rgba(60, 60, 60, 0.5),
      4px 4px 8px rgba(60, 60, 60, 0.5), 5px 5px 5px rgba(60, 60, 60, 0.4),
      6px 6px 6px rgba(60, 60, 60, 0.3), 7px 7px 7px rgba(60, 60, 60, 0.2),
      8px 8px 8px rgba(60, 60, 60, 0.1);
  }

  .block-upload {
    width: 180px;
    height: 180px;
    background-color: #65544f;
    position: absolute;
    top: 70%;
    left: 50%;
    z-index: 100;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    color: white;
    box-shadow: 3px 3px 8px rgba(60, 60, 60, 0.5),
      4px 4px 8px rgba(60, 60, 60, 0.5), 5px 5px 5px rgba(60, 60, 60, 0.4),
      6px 6px 6px rgba(60, 60, 60, 0.3), 7px 7px 7px rgba(60, 60, 60, 0.2),
      8px 8px 8px rgba(60, 60, 60, 0.1);
  }
}

.right {
  transform: translate(-40%, 0);
}

.left {
  transform: translate(40%, 0);
}
</style>