<template>
  <div class="input-body-preview">
    <div class="preview-area" v-highlight v-html="markedText"></div>
  </div>
</template>

<script>
import { marked } from "marked";
export default {
  props: {
    tempDoc: {
      type: String,
    },
    forceUpdate: {
      type: Boolean,
    },
  },
  data() {
    return {
      markedText: "",
    };
  },
  created() {
    // this.inputValue = this.tempDoc;
    this.markedText = marked(this.tempDoc);
  },
};
</script>

<style lang="scss" scoped>
.input-body-preview {
  width: 70%;
  height: 100%;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 50px;
  overflow-y: overlay;
  box-shadow: inset 0 0 3px rgba(186, 183, 183, 0.9),
    inset 0 0 8px rgba(179, 177, 177, 0.8),
    inset 0 0 15px rgba(186, 183, 183, 0.7),
    inset 0 0 24px rgba(196, 190, 190, 0.4),
    inset 0 0 36px rgba(100, 100, 100, 0.1);

  &::-webkit-scrollbar {
    width: 4px;
    background-color: rgba(95, 66, 95, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(37, 14, 70, 0.5);
    border-radius: 2px;
  }
}
</style>