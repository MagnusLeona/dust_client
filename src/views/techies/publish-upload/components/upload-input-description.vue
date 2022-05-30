<template>
  <div class="description">
    <textarea
      type="text"
      @change="inputDescription"
      id="description"
      class="description-upload"
      autocomplete="off"
    />
    <label class="description-label flex-center"
      ><span :class="description ? 'filled' : ''">简 介</span></label
    >
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    inputDescription: function (e) {
      this.$emit("update:description", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-top: 60px;
  margin-bottom: 20px;

  &-label {
    width: 100%;
    height: 200px;
    color: #65544f;
    position: absolute;
    left: 0;
    top: 0;

    > span {
      transition: all ease 0.3s;
    }
  }

  &-label::before {
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

  &-label::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #65544f;
    position: absolute;
    bottom: 0;
    transition: all ease 0.3s;
    left: 0;
    opacity: 0.3;
  }

  > textarea {
    z-index: 100;
    width: 100%;
    height: 180px;
    border-radius: 0;
    outline: none;
    transition: all ease 0.3s;
    font-size: 18px;
    border: none;
    resize: none;
    background-color: rgba(255, 255, 255, 0);
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    padding: 15px 30px;

    &:focus + label > span {
      transform: translate3d(0, -120px, 0);
    }

    &:focus + label::before {
      opacity: 1;
    }

    &:focus + label::after {
      opacity: 1;
    }
  }
}

.filled {
  transform: translate3d(0, -120px, 0);
}
</style>