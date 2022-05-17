<template>
  <div class="file">
    <div class="file-input">
      <div class="file-input-label">上传</div>
      <input
        type="file"
        @change="fileInput"
        id="file"
        class="file-input-upload"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fileInput: function (e) {
      let fileReader = new FileReader();
      console.log(e.target.files[0]);
      fileReader.readAsText(e.target.files[0]);
      fileReader.onloadend = () => {
        console.log(fileReader.result);
        this.$emit("update:file", fileReader.result);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.file {
  width: 100%;
  height: 50px;
  &-input {
    z-index: 0;
    position: relative;
    &-label {
      width: 100px;
      height: 40px;
      position: absolute;
      left: 0;
      top: 0;
      border: 1px solid red;
    }
    > input[type="file"] {
      // border: 0;
      // opacity: 0;
      width: 100px;
      height: 40px;
      z-index: 1;
    }
  }
}
</style>