<template>
  <div class="publish">
    <PublishMain
      v-model:input-doc="inputDoc"
      :forceUpdate="forceUpdate"
      @forceCommit="forceCommit"
    />
    <PublishMenu @commit="commit" />
    <PublishBack @back="back" />
  </div>
</template>

<script>
import PublishMain from "./components/publish-main.vue";
import PublishMenu from "./components/publish-menu.vue";
import PublishBack from "./components/publish-back.vue";
import { ref } from "vue";
export default {
  setup() {
    let inputDoc = ref("");
    let showMenus = ref(false);
    let forceUpdate = ref(false);

    return {
      inputDoc,
      showMenus,
      forceUpdate,
    };
  },
  components: {
    PublishMain,
    PublishMenu,
    PublishBack,
  },
  methods: {
    commit: function () {
      this.forceUpdate = true;
      console.log("starting commit step 1");
      //让子组件开始准备提交的数据
    },

    forceCommit: function (value) {
      console.log("Start commit", value);
      this.inputDoc = value;
      this.forceUpdate = false;
      // 执行真正的提交逻辑
    },

    back: function () {
      this.$router.go(-1);
    },
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