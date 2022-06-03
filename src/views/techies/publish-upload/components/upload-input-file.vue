<template>
  <div class="main flex-center">
    <div class="file">
      <input type="file" @change="fileInput" id="file" class="file-upload" />
      <label class="file-label flex-center" for="file">
        <span :class="file ? 'filled' : ''">选 择 文 件</span>
      </label>
      <div class="file-name flex-center">
        {{ fileName }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    file: {
      type: String,
      default: () => "",
    },
    fileName: {
      type: String,
    },
  },
  methods: {
    fileInput: function (e) {
      let fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0]);
      fileReader.onloadend = () => {
        this.$emit("update:file", fileReader.result);
        this.$emit("update:fileName", e.target.files[0].name);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 70%;
  height: 60px;
  margin: 50px 0 20px 0;

  .file {
    width: 40%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;

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

    > input[type="file"] {
      z-index: 100;
      width: 100%;
      height: 60px;
      outline: none;
      border: 0;
      transition: all ease 0.3s;
      background-color: rgba(255, 255, 255, 0);
      font-size: 20px;
      text-align: center;
      width: 100%;
      border: 1px solid red;
      z-index: 10;
      opacity: 0;
    }

    &-name {
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
