<template>
  <div class="publish">
    <PublishMain v-model:input-doc="inputDoc" />
  </div>
</template>

<script>
import PublishMain from "./components/publish-main.vue";
import { ref } from "vue";
export default {
  setup() {
    let inputDoc = ref("");

    return {
      inputDoc,
    };
  },
  components: {
    PublishMain,
  },
};
</script>

<style lang="scss" scoped>
.publish {
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
      90deg,
      rgba(27, 27, 27, 0.08) 0px,
      rgba(27, 27, 27, 0.08) 1px,
      transparent 1px,
      transparent 11px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(27, 27, 27, 0.08) 0px,
      rgba(27, 27, 27, 0.08) 1px,
      transparent 1px,
      transparent 11px
    ),
    linear-gradient(45deg, rgb(25, 25, 25), rgb(69, 69, 69));
}
</style>