<template>
  <div>
    <label for="description">简介</label>
    <input type="text" @input="inputDescription" id="description" />
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
    },
  },
  methods: {
    inputDescription: function (e) {
      this.$emit("update:description", e.target.value);
    },
  },
};
</script>

<style>
</style>