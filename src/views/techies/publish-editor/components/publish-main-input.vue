<template>
  <div class="input-body-text">
    <textarea
      class="text-area"
      @keydown="onkeydown"
      v-model="inputValue"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "PublishMainInput",
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
      inputValue: "",
    };
  },
  methods: {
    onkeydown: function (e) {
      console.log(e);
      if (e.keyCode === 9) {
        console.log("onKeyDown");
        this.inputValue += "\t";
        e.preventDefault();
      } else if (e.keyCode === 83) {
        if (e.ctrlKey) {
          this.$emit("save", this.inputValue);
          e.preventDefault();
        }
      }
    },
  },
  created() {
    this.inputValue = this.tempDoc;
  },
  beforeUnmount() {
    this.$emit("updateInput", this.inputValue);
  },
  watch: {
    forceUpdate(newVal) {
      if (newVal) {
        // 更新数据
        console.log("detect forceUpdate");
        this.$emit("forceCommit", this.inputValue);
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
    color: rgb(200, 200, 200, 1);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 7px;
    padding: 20px;
    font-size: 15px;
    transition: all ease 0.3s;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;

    &::-webkit-scrollbar {
      width: 4px;
      background-color: rgba(95, 66, 95, 0.1);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(197, 186, 214, 0.5);
      border-radius: 2px;
    }

    &:focus {
      border: 0;
      outline: none;
      box-shadow: 0 0 5px rgba(180, 180, 180, 0.5),
        0 0 10px rgba(180, 180, 180, 0.4), 0 0 15px rgba(180, 180, 180, 0.3),
        0 0 25px rgba(180, 180, 180, 0.2), 0 0 30px rgba(180, 180, 180, 0.1),
        0 0 40px rgba(180, 180, 180, 0.05);
    }
  }
}
</style>