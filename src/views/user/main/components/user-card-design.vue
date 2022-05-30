<template>
  <div class="design">{{ articles }}</div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.design {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
