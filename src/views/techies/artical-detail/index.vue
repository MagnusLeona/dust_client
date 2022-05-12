<template>
  <div class="artical">
    <MarkDownTitle v-model:showTitle="showTitle" />
    <MarkDownContent v-model:showTitle="showTitle" ref="content" />
  </div>
</template>

<script>
import MarkDownTitle from "./components/markdown-title.vue";
import MarkDownContent from "./components/markdown-content.vue";
import { ref } from "vue";
export default {
  components: {
    MarkDownTitle,
    MarkDownContent,
  },
  setup() {
    let showTitle = ref(true);
    return {
      showTitle,
    };
  },
  methods: {
    addListener: function () {
      window.addEventListener(
        "scroll",
        () => {
          console.log(this.$refs.content.offsetTop);
        },
        true
      );
    },
  },
  mounted() {
    // this.addListener();
  },
};
</script>

<style lang="scss" scoped>
.artical {
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: overlay;

  background-image: repeating-linear-gradient(
      90deg,
      hsla(196, 0%, 79%, 0.06) 0px,
      hsla(196, 0%, 79%, 0.06) 1px,
      transparent 1px,
      transparent 96px
    ),
    repeating-linear-gradient(
      0deg,
      hsla(196, 0%, 79%, 0.06) 0px,
      hsla(196, 0%, 79%, 0.06) 1px,
      transparent 1px,
      transparent 96px
    ),
    repeating-linear-gradient(
      0deg,
      hsla(196, 0%, 79%, 0.09) 0px,
      hsla(196, 0%, 79%, 0.09) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      90deg,
      hsla(196, 0%, 79%, 0.09) 0px,
      hsla(196, 0%, 79%, 0.09) 1px,
      transparent 1px,
      transparent 12px
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
  &::-webkit-scrollbar {
    width: 4px;
    background-color: rgba(95, 66, 95, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(127, 81, 197, 0.5);
    border-radius: 2px;
    z-index: 1;
  }
}
</style>