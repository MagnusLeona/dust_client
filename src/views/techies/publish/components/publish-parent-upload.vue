<template>
  <div class="publish-upload">
    <div v-show="mode === 1" class="publish-upload-body">上传文档指引</div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.publish-upload {
  width: 100vw;
  height: 100%;
  background-color: #65544f;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &-body {
    z-index: 200;
    margin-right: 30vw;
  }
}
</style>