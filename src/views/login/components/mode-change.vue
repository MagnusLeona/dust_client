<template>
  <div class="mode flex-center">
    <div
      class="sign-button"
      :class="mode === 0 ? 'selected' : ''"
      @click="$emit('update:mode', 0)"
    >
      SignIn
    </div>
    <div
      class="sign-button"
      :class="mode === 1 ? 'selected' : ''"
      @click="$emit('update:mode', 1)"
    >
      SignUp
    </div>
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
.mode {
  position: absolute;
  left: 20px;
  top: 20px;
  color: rgba(255, 255, 255, 1);
  user-select: none;

  .sign-button {
    padding: 5px 10px;
    opacity: 0.5;
    font-size: 14px;
    transition: all ease 0.2s;
    margin-right: 5px;
    font-family: Microsoft YaHei;
    font-weight: 300;
    border-bottom: 1px solid rgba(255, 255, 255, 0);
  }

  .selected {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 3px;
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.05);
  }
}
</style>
