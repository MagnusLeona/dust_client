<template>
  <div class="slide-inner flex-center">
    <div class="slide-title flex-center" @click="$emit('router')">
      <svg height="400" width="900" v-if="isActive">
        <symbol id="text">
          <text x="15%" y="70%" class="todos-title">Todos</text>
        </symbol>
        <g>
          <use xlink:href="#text" class="todos-text" />
        </g>
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
  padding: 16px;
  text-align: center;
  background-color: #906fc2;
}
.slide-image {
  width: 128px;
  height: 128px;
}
.slide-title {
  font-weight: 700;
  margin: 24px 0;
  color: #fff;
  height: 300px;
}
.slide-text {
  font-size: 18px;
  color: #fff;
}

.todos-title {
  font-size: 200px;
  font-family: Segoe Script;
}

.todos-text {
  fill: none;
  stroke: white;
  stroke-width: 10px;
  stroke: #e5dfe7;
  z-index: 100;
  animation: textmove 2s linear forwards;
}

@keyframes textmove {
  0% {
    stroke-dasharray: 0 100%;
  }
  100% {
    stroke-dasharray: 100% 0;
  }
}
</style>