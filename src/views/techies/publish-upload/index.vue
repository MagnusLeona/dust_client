<template>
  <div class="upload">
    <div class="upload-body">
      <UploadInputTitle v-model:title="title" />
      <UploadInputDescription v-model:description="description" />
      <UploadInputTag
        :tags="tags"
        :tagSelects="tagSelects"
        @remove="removeTag"
        v-model:showTagSelector="showTagSelector"
      />
      <UploadInputFile v-model:file="file" v-model:fileName="fileName" />
      <UploadInputCommit @commit="commit" />
      <UploadInputTagSelector
        :tagSelects="tagSelects"
        :tags="tags"
        v-model:visible="showTagSelector"
        @remove="removeTag"
        @insert="insertTag"
      />
      <UploadBack @back="back" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import UploadInputTitle from "./components/upload-input-title.vue";
import UploadInputFile from "./components/upload-input-file.vue";
import UploadInputTag from "./components/upload-input-tag.vue";
import UploadInputCommit from "./components/upload-input-commit.vue";
import UploadInputDescription from "./components/upload-input-description.vue";
import UploadInputTagSelector from "./components/upload-input-tag-selector.vue";
import UploadBack from "./components/upload-back.vue";

import { UploadArticle, QueryTags } from "@/requests/index.js";
import { loginProceed } from "@/utils/utils";

export default {
  setup() {
    let title = ref("");
    let file = ref("");
    let description = ref("");
    let tags = ref([]);
    let fileName = ref("");
    let showTagSelector = ref(false);
    let tagSelects = ref([]);

    QueryTags().then((res) => {
      res.forEach((element) => {
        tagSelects.value.push(element);
      });
    });

    return {
      title,
      file,
      tags,
      fileName,
      description,
      tagSelects,
      showTagSelector,
    };
  },
  components: {
    UploadBack,
    UploadInputFile,
    UploadInputTag,
    UploadInputTitle,
    UploadInputCommit,
    UploadInputDescription,
    UploadInputTagSelector,
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
      //  提交文章
      // 校验必须字段是否存在
      if (
        !this.title ||
        !this.description ||
        this.tags.length <= 0 ||
        !this.file
      ) {
        this.$dust.alert({ content: "请输入必要信息哦~" });
        return;
      }
      // 提交任务，需要登录
      loginProceed()
        .then((res) => {
          if (res) {
            return UploadArticle({
              name: this.title,
              description: this.description,
              fileName: this.fileName,
              content: this.file,
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
        })
        .catch((e) => {});
    },

    insertTag: function (value) {
      // 添加tag
      this.tags.push(value);
    },

    removeTag: function (value) {
      this.tags.splice(this.tags.indexOf(value), 1);
    },

    back: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.upload {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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
    linear-gradient(90deg, rgb(211, 206, 205), rgb(240, 236, 234));

  &-body {
    width: 100%;
    padding: 50px;
    overflow: overlay;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::-webkit-scrollbar {
      width: 4px;
      background-color: rgba(95, 66, 95, 0.1);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #65544f;
      border-radius: 2px;
    }
  }
}
</style>
