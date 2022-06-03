<template>
  <div class="list">
    <div class="list-body" v-if="articles.length > 0">
      <div v-for="(article, index) in articles" :key="`article${index}`">
        <ArticleListCard
          :article="article"
          @toDetail="(id) => $emit('toDetail', id)"
        />
      </div>
    </div>
    <div class="no-data flex-center" v-else>
      <svg-icon icon="icon-nodata" class="no-data-svg" />
      <div class="no-data-text">怪唉，居然没人发布这一块的文章</div>
    </div>
  </div>
</template>

<script>
import ArticleListCard from "./article-list-card.vue";
export default {
  props: {
    articles: {
      type: Object,
    },
  },
  components: {
    ArticleListCard,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 100vh;
  overflow: overlay;
  padding: 50px 0;

  &-body {
    width: 70%;
    margin: auto;
  }

  .no-data {
    width: 100%;
    height: 100%;
    flex-direction: column;

    &-text {
      font-size: 18px;
      color: white;
    }
  }
}

.no-data-svg {
  width: 400px;
  height: 500px;
}
</style>
