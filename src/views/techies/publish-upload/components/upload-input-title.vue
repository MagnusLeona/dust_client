<template>
  <div class="main flex-center">
    <div class="title">
      <input
        type="text"
        @change="titleInput"
        id="title"
        class="title-upload"
        autocomplete="off"
      />
      <label class="title-label flex-center" for="title">
        <span :class="title ? 'filled' : ''">标 题</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    titleInput: function (e) {
      this.$emit("update:title", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 70%;
  height: 60px;
  margin: 50px 0 20px 0;

  .title {
    width: 60%;
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

    > input[type="text"] {
      z-index: 100;
      width: 100%;
      height: 40px;
      outline: none;
      border: 0;
      transition: all ease 0.3s;
      background-color: rgba(255, 255, 255, 0);
      font-size: 20px;
      text-align: center;

      &:focus + label > span {
        transform: translate3d(0, -50px, 0);
      }

      &:focus + label::before {
        opacity: 1;
      }

      &:focus + label::after {
        opacity: 1;
      }
    }
  }
}
</style>
