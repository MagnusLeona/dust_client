<template>
  <div class="slide-inner flex-center">
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
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 16px;
  background-color: #ebba70;
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