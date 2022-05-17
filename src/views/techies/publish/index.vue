<template>
  <div class="publish">
    <PublishParent
      v-model:mode="mode"
      @routeToEdit="toEdit"
      @routeToUpload="toUpload"
    />
  </div>
</template>

<script>
import PublishParent from "./components/publish-parent.vue";
import { ref } from "vue";
export default {
  components: {
    PublishParent,
  },
  setup() {
    let mode = ref(0);

    const changeMode = (value) => {
      mode.value = value;
    };

    return {
      mode,
      changeMode,
    };
  },
  methods: {
    toEdit: function () {
      this.$router.push({
        path: "/techies/publish-editor",
      });
    },

    toUpload: function () {
      this.$router.push({
        path: "/techies/publish-upload",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.publish {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
}
</style>