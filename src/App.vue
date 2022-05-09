<template>
  <div class="app-view">
    <router-view v-slot="{ Component }" class="router-view">
      <transition name="in-out-translate-fade" class="container">
        <component :is="Component" />
      </transition>
    </router-view>

    <Dialog />
  </div>
</template>

<script>
import Dialog from "@/components/dialog";

export default {
  name: "App",
  methods: {},
  components: {
    Dialog,
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
</style>
