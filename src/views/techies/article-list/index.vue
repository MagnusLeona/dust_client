<template>
  <div class="front-end flex-center">
    <ArticleList :articles="articles" @toDetail="toDetail" />
    <ArticleBack @back="back" />
  </div>
</template>

<script>
import { QueryArticlesByType } from "@/requests";
import { ref, toRefs } from "vue";

import ArticleBack from "./components/article-back.vue";
import ArticleList from "./components/article-list.vue";

export default {
  props: {
    type: {
      type: String,
    },
  },
  setup(props, ctx) {
    console.log(toRefs(props).type);
    let properties = toRefs(props);
    console.log(properties.type.value);
    let articles = ref([]);

    QueryArticlesByType(properties.type.value).then((res) => {
      console.log(res);
      res.forEach((item) => articles.value.push(item));
    });

    return {
      articles,
    };
  },
  components: {
    ArticleList,
    ArticleBack,
  },
  methods: {
    toDetail: function (id) {
      this.$router.push({
        path: "/techies/artical-detail",
        query: {
          articleId: id,
        },
      });
    },

    back: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.front-end {
  width: 100%;
  height: 100%;
  overflow: overlay;
  background-image: radial-gradient(
      circle at 13% 47%,
      rgba(140, 140, 140, 0.03) 0%,
      rgba(140, 140, 140, 0.03) 25%,
      transparent 25%,
      transparent 100%
    ),
    radial-gradient(
      circle at 28% 63%,
      rgba(163, 149, 142, 0.03) 0%,
      rgba(204, 210, 199, 0.4) 16%,
      transparent 16%,
      transparent 100%
    ),
    radial-gradient(
      circle at 81% 56%,
      rgba(156, 173, 152, 0.3) 0%,
      rgba(176, 190, 193, 0.5) 12%,
      transparent 12%,
      transparent 100%
    ),
    radial-gradient(
      circle at 26% 48%,
      rgba(208, 211, 204, 0.9) 0%,
      rgba(208, 211, 204, 0.8) 6%,
      transparent 6%,
      transparent 100%
    ),
    radial-gradient(
      circle at 97% 17%,
      rgba(176, 190, 193, 1) 0%,
      rgba(208, 211, 204, 1) 56%,
      transparent 56%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(208, 211, 204, 1) 0%,
      rgba(84, 147, 190, 0.1) 36%,
      transparent 36%,
      transparent 100%
    ),
    radial-gradient(
      circle at 55% 52%,
      rgba(176, 190, 193, 1) 0%,
      rgba(176, 190, 193, 1) 6%,
      transparent 6%,
      transparent 100%
    ),
    linear-gradient(90deg, rgba(228, 231, 226, 0.8), rgba(228, 230, 225, 0.6));
}
</style>
