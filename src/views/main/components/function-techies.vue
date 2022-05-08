<template>
  <div class="slide-inner flex-center">
    <div class="slide-title" @click="$emit('router')">
      <svg width="900" height="400" v-if="isActive">
        <text class="text" x="15%" y="70%">
          Techies
          <animate
            attributeName="dy"
            values="0 0 0 0 0 0 0; -70 70 0 0 0 0 0; 0 -70 70 0 0 0 0; 0 0 -70 70 0 0 0; 0 0 0 -70 70 0 0; 0 0 0 0 -70 70 0; 0 0 0 0 0 -70 70; 0 0 0 0 0 0 -70; 0 0 0 0 0 0 0;"
            dur="2s"
            repeatCount="1"
          />
        </text>
      </svg>
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
    isActive: {
      type: Boolean,
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
  background-color: #31888a;
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

.text {
  fill: #008386;
  font-family: Comic Sans MS;
  stroke: #fff;
  stroke-width: 8px;
  font-size: 180px;
}
</style>