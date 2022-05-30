<template>
  <div class="publish">
    <PublishParent
      v-model:mode="mode"
      @routeToEdit="toEdit"
      @routeToUpload="toUpload"
    />
    <PublishBack @back='back' />
  </div>
</template>

<script>
import PublishParent from "./components/publish-parent.vue";
import PublishBack from './components/publish-back.vue';

import { ref } from "vue";
export default {
  components: {
    PublishParent,
    PublishBack
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
      this.$router.replace({
        path: "/techies/publish-editor",
      });
    },

    toUpload: function () {
      this.$router.replace({
        path: "/techies/publish-upload",
      });
    },

    back: function() {
      this.$router.go(-1);
    }
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