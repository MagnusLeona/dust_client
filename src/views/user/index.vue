<template>
  <div class="app-view">
    <router-view v-slot="{ Component, route }" class="router-view">
      <transition :name="transitionAnimation">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionAnimation: "",
    };
  },
  methods: {
    beforeRouteLeave: function () {
      this.$router.beforeEach((to, from) => {
        if (!from || !from.meta || !from.meta.order) {
          // 如果没有前置页面，直接进入此页面，则展示其他动画
          this.transitionAnimation = "in-translate-fade";
        } else {
          if (to.meta.order >= from.meta.order) {
            this.transitionAnimation = "in-out-translate-fade";
          } else {
            this.transitionAnimation = "out-in-translate-fade";
          }
        }
      });
    },
  },
  mounted() {
    this.beforeRouteLeave();
  },
  unmounted() {
    this.$router.beforeEach = () => {};
  },
};
</script>

<style lang="scss" scoped>
.app-view {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .router-view {
    height: 100%;
    width: 100%;
    position: absolute;
  }
}

.in-out-translate-fade-enter-active {
  transition: all 0.5s;
}
.in-out-translate-fade-leave-active {
  transition: all 1s;
}
.in-out-translate-fade-leave-active {
  opacity: 0;
}
.in-out-translate-fade-enter-from {
  transform: translateX(100%);
}
.in-out-translate-fade-leave-active {
  transform: translateX(-100%);
}

.out-in-translate-fade-enter-active {
  transition: all 0.5s;
}
.out-in-translate-fade-leave-active {
  transition: all 1s;
}
.out-in-translate-fade-leave-active {
  opacity: 0;
}
.out-in-translate-fade-enter-from {
  transform: translateX(-100%);
}
.out-in-translate-fade-leave-active {
  transform: translateX(100%);
}

.in-translate-fade-enter-active {
  transition: all 0.5s ease-in-out;
}
.in-translate-fade-enter-from {
  transform: translateY(800px);
  opacity: 0.3;
}
</style>
