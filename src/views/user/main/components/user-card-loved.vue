<template>
  <div class="loved">
    <div v-if="articles.length > 0" class="article-box">
      <div
        class="article"
        v-for="(article, index) in articles"
        :key="`article${index}`"
      >
        <div class="article-body">
          <div class="title">
            <p>{{ article.name }}</p>
          </div>
          <div class="desc">{{ article.description }}</div>
          <div class="time flex-center">
            {{ article.updateTime.split(" ")[0] }}
          </div>
        </div>
      </div>
    </div>
    <div v-else class="nodata flex-center" @click="$emit('toTechies')">
      <svg-icon icon="icon-nodata" class="no-data-svg" />
      <div class="no-data-text">您还没有收藏的博客哦，去看看吧~</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
$ruler: 16px;
$color-red: #ae1100;
$color-bg: #ebecf0;
$color-shadow: #babecc;
$color-white: #eeeeee;

.loved {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 30px 40px;
  flex-wrap: wrap;
  background-color: white;
  overflow: overlay;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: rgba(95, 66, 95, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(169, 106, 3, 0.4);
    border-radius: 2px;
  }

  .article-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .article {
      height: 80px;
      margin-bottom: 20px;
      width: 270px;
      height: 240px;
      padding: 15px;

      &-body {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 1px 1px 3px $color-shadow, -2px -2px 5px $color-white;

        &:hover {
          box-shadow: inset -1px -1px 2px $color-white,
            inset 1px 1px 2px $color-shadow;
        }

        .title {
          width: 100%;
          height: 40px;
          padding: 0px 10px;
          display: flex;
          font-size: 13px;
          font-weight: 600;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .desc {
          padding: 5px 10px;
          text-indent: 20px;
          font-weight: 300;
          font-size: 14px;
          height: 160px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .time {
          height: 40px;
          margin-left: auto;
          margin-right: 10px;
          font-size: 13px;
          color: #ccc;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .nodata {
    width: 100%;
    flex-direction: column;
    cursor: pointer;
  }
}

.no-data-svg {
  width: 200px;
  height: 200px;
}
</style>
