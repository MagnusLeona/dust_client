<template>
  <div class="home">
    <input
      class="home-input"
      type="checkbox"
      :checked="home"
      id="home"
      @change="$emit('update:home', !home)"
    />
    <label for="home" class="menu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    home: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: inline-block;
  z-index: 1000;
}

.home-input {
  display: none;
}

.menu {
  width: 40px;
  height: 30px;
  cursor: pointer;
  transition: all 0.5s;
  display: block;
  position: relative;
  .bar {
    background-color: rgba(69, 70, 94, 0.1);
    height: 2px;
    width: 40px;
    border-radius: 4px;
    transition: all 0.5s;
    position: absolute;
  }
}

.menu {
  div:first-child {
    background-color: dark;
    top: 1px;
  }
  div:nth-child(2) {
    top: 13.5px;
  }
  div:nth-child(3) {
    top: 27px;
  }
}

.home-input:checked + label {
  div:first-child {
    opacity: 0;
    top: 14px;
    left: 5px;
    width: 0px;
    opacity: 0;
    transform: rotate(225deg);
    background-color: rgba(255, 255, 255, 0.27);
  }
  div:nth-child(2) {
    top: 14px;
    left: 0px;
    transform: rotate(-315deg);
    background-color: rgba(255, 255, 255, 0.27);

    width: 40px;
  }
  div:nth-child(3) {
    top: 14px;
    left: 0px;
    transform: rotate(495deg);
    background-color: rgba(255, 255, 255, 0.27);
    width: 40px;
  }
}
</style>