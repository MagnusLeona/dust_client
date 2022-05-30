<template>
  <div class="commit">
    <div @click="$emit('commit')" class="commit-button flex-center">提 交</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.commit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  &-button {
    z-index: 100;
    width: 140px;
    height: 40px;
    border-radius: 0;
    border: 1.5px solid #65544f;
    outline: none;
    transition: all ease 0.3s;
    background-color: #65544f;
    color: white;
    box-shadow: 0 0 1px rgba(101, 84, 79, 0.6), 0 0 2px rgba(101, 84, 79, 0.5),
      0 0 4px rgba(101, 84, 79, 0.4), 0 0 8px rgba(101, 84, 79, 0.3),
      0 0 16px rgba(101, 84, 79, 0.2);

    &:focus {
      box-shadow: 0 0 5px #65544f;
    }
  }
}
</style>