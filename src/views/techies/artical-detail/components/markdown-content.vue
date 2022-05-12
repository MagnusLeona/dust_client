<template>
  <div class="box" ref="content">
    <div class="mark-down">
      <div class="mark-down-content" v-html="htmlMd" v-highlight></div>
    </div>
  </div>
</template>

<script>
import mdcontent from "@/assets/md/1.md?raw";
// lioshi
import hljs from "highlight.js";
import "highlight.js/scss/atom-one-dark.scss"; //样式文件
import { ref } from "vue";
export default {
  setup() {
    let htmlMd = ref(mdcontent);
    return {
      htmlMd,
    };
  },
  methods: {},
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        let t = this.$refs.content.getBoundingClientRect().top;
        if (t < 0) {
          this.$emit("update:showTitle", false);
        } else {
          this.$emit("update:showTitle", true);
        }
      },
      true
    );
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  overflow: overlay;

  .mark-down {
    width: 70%;
    line-height: 150%;
    z-index: 20;
    padding-top: 30px;
    padding-bottom: 50px;
    &-content {
      padding: 30px 50px;
      border-radius: 10px;
      width: 100%;
      background-color: rgba($color: #eee, $alpha: 0.2);
      backdrop-filter: blur(2px);
      box-shadow: 0 0 3px #dedede, 0 0 8px #dadada, 0 0 12px #dcdcdc,
        0 0 24px #ddd, 0 0 48px #eee;

      > ul {
        > li {
          > p {
            line-height: 120%;
          }
        }
      }
    }
  }
}
</style>