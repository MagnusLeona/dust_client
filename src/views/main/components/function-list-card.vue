<template>
  <div class="slide-inner" :style="{ backgroundColor: cardConfig.color }">
    <div class="slide-title" @click="$emit('router')">
      {{ cardConfig.title }}
    </div>
    <div class="slide-text">
      {{ cardConfig.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardConfig: {
      type: Object,
    },
  },
  data() {
    return {
      showPage: false,
    };
  },
  methods: {
    router: function () {
      this.$router.push({
        path: this.cardConfig.url,
      });
    },
  },
};
</script>

<style scoped>
.slide-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
  text-align: center;
  padding: 16px;
}
.slide-image {
  width: 128px;
  height: 128px;
}
.slide-title {
  font-size: 28px;
  font-weight: 700;
  margin: 24px 0;
  color: #fff;
}
.slide-text {
  font-size: 18px;
  color: #fff;
}
</style>