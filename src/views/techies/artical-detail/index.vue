<template>
  <div class="artical">
    <MarkDownTitle v-model:showTitle="showTitle" @back="back" />
    <MarkDownContent
      v-model:showTitle="showTitle"
      :articleContent="articleContent"
      v-if="articleContent"
    />
    <MarkDownBack @back="back" />
    <MarkDownFunction
      :isFan="isFan"
      :isMarked="isMarked"
      @fancy="tryFancy"
      @cancelFan="cancelFan"
      @mark="tryMark"
      @cancelMark="cancelMark"
    />
  </div>
</template>

<script>
import MarkDownTitle from "./components/markdown-title.vue";
import MarkDownBack from "./components/markdown-back.vue";
import MarkDownContent from "./components/markdown-content.vue";
import MarkDownFunction from "./components/markdown-function.vue";
import { reactive, ref, toRefs } from "vue";

import {
  GetArticle,
  GetArticleDetail,
  FancyArticle,
  CancelFancyArticle,
  MarkArticle,
  CancelMarkArticle,
} from "@/requests";

export default {
  props: {
    articleId: {
      type: Number,
    },
  },
  components: {
    MarkDownBack,
    MarkDownTitle,
    MarkDownContent,
    MarkDownFunction,
  },
  setup(props) {
    let showTitle = ref(true);
    let refProps = toRefs(props);
    let isFan = ref(false);
    let isMarked = ref(false);

    let articleContent = ref("");
    let articleDetail = reactive({ data: {} });

    GetArticleDetail(refProps.articleId.value).then((res) => {
      console.log(res);
      let { article, fan, marked } = res;
      articleContent.value = article.content;
      articleDetail.data = article;
      isFan.value = fan ? true : false;
      isMarked.value = marked ? true : false;
    });

    return {
      isFan,
      isMarked,
      showTitle,
      articleDetail,
      articleContent,
    };
  },
  methods: {
    tryFancy: function () {
      let { id } = this.articleDetail.data;
      FancyArticle(id).then((res) => {
        this.isFan = true;
      });
    },

    tryMark: function () {
      let { id } = this.articleDetail.data;
      MarkArticle(id).then((res) => {
        this.isMarked = true;
      });
    },

    cancelFan: function () {
      let { id } = this.articleDetail.data;
      console.log("Cancelling", id);

      CancelFancyArticle(id).then((res) => {
        this.isFan = false;
      });
    },

    cancelMark: function () {
      let { id } = this.articleDetail.data;
      CancelMarkArticle(id).then((res) => {
        this.isMarked = false;
      });
    },

    back: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.artical {
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  overflow-y: overlay;
  overflow-x: hidden;

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
