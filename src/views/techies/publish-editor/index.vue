<template>
  <div class="publish">
    <PublishMain v-model:inputDoc="inputDoc" @saveTemp="saveTemp" />
    <PublishMenu @beforeCommit="beforeCommit" ref="menu" />
    <PublishBack @back="back" />
    <PublishInputDetail
      v-model:visible="detailVisible"
      :tags="tags"
      :tagSelects="tagSelects"
      v-model:title="title"
      v-model:description="description"
      v-model:fileName="fileName"
      @showSelector="showSelector"
      @remove="removeTag"
      @commit="commit"
      ref="inputDetail"
    />
    <PublishInputTagSelector
      v-model:visible="tagSelectorVisible"
      :tagSelects="tagSelects"
      :tags="tags"
      @insert="insertTag"
      @remove="removeTag"
      ref="tagSelector"
    />
  </div>
</template>

<script>
import PublishMain from "./components/publish-main.vue";
import PublishMenu from "./components/publish-menu.vue";
import PublishBack from "./components/publish-back.vue";
import PublishInputDetail from "./components/publish-input-detail.vue";
import PublishInputTagSelector from "./components/publish-input-tag-selector.vue";

import { UploadArticle, QueryTags } from "@/requests/index.js";
import { loginProceed } from "@/utils/utils";

import { ref } from "vue";
export default {
  setup() {
    let inputDoc = ref("");
    let showMenus = ref(false);
    let detailVisible = ref(false);
    let tags = ref([]);
    let tagSelectorVisible = ref(false);
    let tagSelects = ref([]);
    let title = ref("");
    let description = ref("");
    let fileName = ref("");

    QueryTags().then((res) => {
      res.forEach((element) => {
        tagSelects.value.push(element);
      });
    });

    return {
      tags,
      inputDoc,
      showMenus,
      detailVisible,
      tagSelectorVisible,
      tagSelects,
      title,
      description,
      fileName,
    };
  },
  components: {
    PublishMain,
    PublishMenu,
    PublishBack,
    PublishInputDetail,
    PublishInputTagSelector,
  },
  computed: {
    selectedTag() {
      return this.tags.reduce((prev, curr) => {
        prev.push({ id: curr });
        return prev;
      }, []);
    },
  },
  methods: {
    commit: function () {
      //让子组件开始准备提交的数据
      if (
        !this.title ||
        !this.description ||
        !this.inputDoc ||
        this.tags.length <= 0
      ) {
        this.$dust.alert("请输入完整信息~ ");
        return;
      }
      this.fileName =
        this.title.length > 10 ? this.title.substring(0, 10) : this.title;
      debugger;
      loginProceed()
        .then((res) => {
          if (res) {
            return UploadArticle({
              name: this.title,
              description: this.description,
              fileName: this.fileName,
              content: this.inputDoc,
              tags: this.selectedTag,
            });
          } else {
            return Promise.reject(0);
          }
        })
        .then(() => {
          this.$dust.toast({ title: "发布成功" });
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
          this.$router.replace("/techies/");
        })
        .catch((e) => {
          this.$dust.alert({ content: e.response });
        })
        .finally(() => {
          this.detailVisible = false;
        });
    },

    beforeCommit: function () {
      this.detailVisible = true;
    },

    showSelector: function () {
      this.tagSelectorVisible = true;
    },

    saveTemp: function () {
      //暂存文件
      // 暂存文件存到mongodb中
    },

    insertTag: function (id) {
      this.tags.push(id);
    },

    removeTag: function (id) {
      this.tags.splice(this.tags.indexOf(id), 1);
    },

    listenOnClick: function (e) {
      if (
        this.$refs.inputDetail.$el.contains(e.target) ||
        this.$refs.menu.$el.contains(e.target) ||
        this.$refs.tagSelector.$el.contains(e.target)
      ) {
        return;
      }
      this.detailVisible = false;
    },

    back: function () {
      this.$router.go(-1);
    },
  },
  mounted() {
    window.addEventListener("click", this.listenOnClick);
  },
  unmounted() {
    window.removeEventListener("click", this.listenOnClick);
  },
};
</script>

<style lang="scss" scoped>
.publish {
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
      90deg,
      hsla(352, 0%, 68%, 0.09) 0px,
      hsla(352, 0%, 68%, 0.09) 1px,
      transparent 1px,
      transparent 96px
    ),
    repeating-linear-gradient(
      0deg,
      hsla(352, 0%, 68%, 0.09) 0px,
      hsla(352, 0%, 68%, 0.09) 1px,
      transparent 1px,
      transparent 96px
    ),
    repeating-linear-gradient(
      0deg,
      hsla(352, 0%, 68%, 0.09) 0px,
      hsla(352, 0%, 68%, 0.09) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      90deg,
      hsla(352, 0%, 68%, 0.09) 0px,
      hsla(352, 0%, 68%, 0.09) 1px,
      transparent 1px,
      transparent 12px
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}
</style>