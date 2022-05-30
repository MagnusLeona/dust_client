<template>
  <div class="input-body-preview">
    <div class="preview-area" v-highlight v-html="markedText"></div>
  </div>
</template>

<script>
import { marked } from "marked";
export default {
  props: {
    inputDoc: {
      type: String,
    },
  },
  data() {
    return {
      markedText: "",
    };
  },
  created() {
    this.markedText = marked(this.inputDoc);
  },
};
</script>

<style lang="scss" scoped>
.input-body-preview {
  width: 70%;
  height: 100%;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px 30px;
  overflow-y: overlay;
  box-shadow: 0 0 3px rgba(80, 109, 118, 0.3), 0 0 8px rgba(80, 109, 118, 0.3),
    0 0 15px rgba(80, 109, 118, 0.3), 0 0 24px rgba(80, 109, 118, 0.3),
    0 0 36px rgba(80, 109, 118, 0.3);

  &::-webkit-scrollbar {
    width: 4px;
    background-color: rgba(95, 66, 95, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(80, 109, 118, 0.5);
    border-radius: 2px;
  }
}
</style>