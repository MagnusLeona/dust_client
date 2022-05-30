<template>
  <div class="card">
    <div class="card-title" @click="$emit('toDetail', article.id)">
      <div>
        {{ article.name + article.id }}
      </div>
      <div class="card-title-author flex-center">
        <svg-icon icon="icon-author" class="icon-author"></svg-icon>
        <div class="author-name">{{ article?.author?.name }}</div>
      </div>
    </div>
    <div class="card-description" @click="$emit('toDetail', article.id)">
      {{ article.description }}
    </div>
    <div class="card-tag">
      <div
        v-for="(tag, idx) in article.tagList"
        :key="`tag${idx}`"
        class="card-tag-label flex-center"
      >
        <div class="svg-container">
          <svg-icon icon="icon-tag-label" class="icon"></svg-icon>
        </div>
        <div>
          {{ tag.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
  padding: 8px 20px;
  box-shadow: 0 0 3px rgba(208, 208, 209, 0.9), 0 0 6px rgba(209, 209, 209, 0.8),
    0 0 9px rgba(201, 200, 200, 0.7), 0 0 12px rgba(203, 203, 204, 0.6),
    0 0 25px rgba(214, 214, 214, 0.5);
  background-color: rgba(225, 232, 234, 0.7);

  &-title {
    border-bottom: 1px solid rgb(241, 245, 245);
    padding: 5px 5px 5px 5px;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    cursor: pointer;

    &-author {
      margin-left: auto;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;

      .author-name {
        margin-left: 10px;
      }
    }
  }

  &-description {
    padding: 10px;
    max-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  &-tag {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &-label {
      padding: 3px 5px;
      font-size: 12px;

      .svg-container {
        margin-left: 15px;
        margin-right: 5px;
      }
    }
  }
}

.icon {
  width: 18px;
  height: 18px;
}

.icon-author {
  width: 18px;
  height: 18px;
}
</style>
