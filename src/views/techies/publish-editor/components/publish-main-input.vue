<template>
  <div class="input-body-text">
    <textarea
      class="text-area"
      :value="inputDoc"
      @keydown="onkeydown"
      @change="inputValue"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "PublishMainInput",
  props: {
    inputDoc: {
      type: String,
    },
  },
  methods: {
    inputValue: function (e) {
      this.$emit("updateInput", e.target.value);
    },

    onkeydown: function (e) {
      if (e.keyCode === 9) {
        this.inputValue += "\t";
        e.preventDefault();
      } else if (e.keyCode === 83) {
        if (e.ctrlKey) {
          this.$emit("save");
          e.preventDefault();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input-body-text {
  width: 70%;
  height: 100%;
  > textarea {
    width: 100%;
    height: 100%;
    border: 0;
    color: rgb(0, 0, 0, 1);
    background-color: rgba(80, 109, 118, 0.2);
    border-radius: 7px;
    padding: 20px;
    font-size: 15px;
    transition: all ease 0.3s;
    resize: none;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;

    &::-webkit-scrollbar {
      width: 4px;
      background-color: rgba(95, 66, 95, 0.1);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(80, 109, 118, 0.5);
      border-radius: 2px;
    }

    &:focus {
      border: 0;
      outline: none;
      box-shadow: 0 0 5px rgba(80, 109, 118, 0.5),
        0 0 10px rgba(80, 109, 118, 0.4), 0 0 15px rgba(180, 180, 180, 0.3),
        0 0 25px rgba(80, 109, 118, 0.2), 0 0 30px rgba(80, 109, 118, 0.1),
        0 0 40px rgba(80, 109, 118, 0.1);
    }
  }
}
</style>