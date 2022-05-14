<template>
  <div
    class="parent"
    :class="mode === 1 ? 'editor' : mode === 2 ? 'upload' : ''"
  >
    <PublishUpload :mode="mode" />
    <PublishEditor :mode="mode" />
    <PublishButton :mode="mode" @changeMode="changeMode" />
  </div>
</template>

<script>
import PublishUpload from "./publish-parent-upload.vue";
import PublishEditor from "./publish-parent-editor.vue";
import PublishButton from "./publish-parent-button.vue";
export default {
  props: {
    mode: {
      type: Number,
    },
  },
  components: {
    PublishUpload,
    PublishEditor,
    PublishButton,
  },
  methods: {
    changeMode: function (value) {
      this.$emit("update:mode", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  width: 200vw;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  transform: translateX(-25%);
  transition: all linear 0.5s;
  z-index: 1;
  position: relative;
}

.editor {
  transform: translateX(-5%);
}

.upload {
  transform: translateX(-45%);
}
</style>