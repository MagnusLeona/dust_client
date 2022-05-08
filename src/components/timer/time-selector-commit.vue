<template>
  <div class="time-selector-commit">
    <div
      class="time-selector-commit-button flex-center"
      @click="$emit('cancel')"
    >
      取消
    </div>
    <div
      class="time-selector-commit-button flex-center"
      @click="$emit('commit')"
    >
      选择
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.time-selector-commit {
  margin-top: 5px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &-button {
    margin-right: 20px;
    width: 80px;
    height: 36px;
    transition: all 0.4s ease;
    border: 1px solid #cecece;

    &:hover {
      background-color: rgba(188, 188, 188, 0.25);
    }
  }
}
</style>