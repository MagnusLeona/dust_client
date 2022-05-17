<template>
  <div>
    <label for="title">标题</label>
    <input type="text" @input="inputMe" id="title" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
  methods: {
    inputMe: function (e) {
      this.$emit("update:title", e.target.value);
    },
  },
};
</script>

<style>
</style>