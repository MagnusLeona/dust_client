<template>
  <div class="common-input">
    <input
      type="text"
      v-model="inputValue"
      id="common"
      class="common-input-input"
    />
    <label for="common" class="common-input-label" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {},
  },
  emits: ["update:modelValue"],
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.common-input {
  width: 270px;
  height: 40px;
  position: relative;
  &-input {
    width: 270px;
    height: 40px;
    border-radius: 3px;
    text-indent: 80px;
    border: 1px dashed rgba(144, 144, 144, 0.5);
  }

  & > input {
    background-color: rgba(255, 255, 255, 0);
    &:focus {
      border-color: #c0179b;
      transition: all 0.2s ease;
      outline: 0;
      text-indent: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(216, 106, 216, 0.075),
        0 0 10px rgba(115, 1, 138, 0.6);
      box-shadow: inset 0 1px 1px rgba(204, 63, 153, 0.075),
        0 0 10px rgba(238, 127, 153, 0.6);
    }
  }

  &-label {
    width: 80px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
    z-index: 2;
    transition: all ease-in-out 0.3s;
    color: #fff;
    background-image: linear-gradient(45deg, #520355 0%, #ca95da 100%);
    font-size: 13px;
  }
}
</style>