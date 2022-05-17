<template>
  <div class="upload">
    {{ title }}
    <UploadInputTitle v-model:title="title" />
    {{ description }}
    <UploadInputDescription v-model:description="description" />
    {{ file }}

    <UploadInputTag />
    <UploadInputFile v-model:file="file" />
    <UploadInputCommit @commit="commit" />
  </div>
</template>

<script>
import { ref } from "vue";

import UploadInputTitle from "./components/upload-input-title.vue";
import UploadInputFile from "./components/upload-input-file.vue";
import UploadInputTag from "./components/upload-input-tag.vue";
import UploadInputCommit from "./components/upload-input-commit.vue";
import UploadInputDescription from "./components/upload-input-description.vue";

export default {
  setup() {
    let title = ref("");
    let file = ref("");
    let description = ref("");

    return {
      title,
      file,
      description,
    };
  },
  components: {
    UploadInputFile,
    UploadInputTag,
    UploadInputTitle,
    UploadInputCommit,
    UploadInputDescription,
  },
  methods: {
    commit: function () {
      //  提交文章
    },
  },
};
</script>

<style lang="scss" scoped>
.upload {
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
      90deg,
      hsla(196, 0%, 79%, 0.06) 0px,
      hsla(196, 0%, 79%, 0.06) 1px,
      transparent 1px,
      transparent 96px
    ),
    repeating-linear-gradient(
      0deg,
      hsla(196, 0%, 79%, 0.06) 0px,
      hsla(196, 0%, 79%, 0.06) 1px,
      transparent 1px,
      transparent 96px
    ),
    repeating-linear-gradient(
      0deg,
      hsla(196, 0%, 79%, 0.09) 0px,
      hsla(196, 0%, 79%, 0.09) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      90deg,
      hsla(196, 0%, 79%, 0.09) 0px,
      hsla(196, 0%, 79%, 0.09) 1px,
      transparent 1px,
      transparent 12px
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}
</style>