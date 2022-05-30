<template>
  <div class="list">
    <div class="list-body">
      <div v-for="(article, index) in articles" :key="`article${index}`">
        <ArticleListCard
          :article="article"
          @toDetail="(id) => $emit('toDetail', id)"
        />
      </div>
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
  height: 100%;
  overflow: overlay;
  display: flex;
  justify-content: center;

  &-body {
    width: 70%;
    padding: 50px 0;
  }
}
</style>
