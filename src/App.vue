<template>
  <div class="app-view" :class="home ? 'back-dark' : 'back-white'">
    <div class="home-button">
      <HomeButton key="home" v-model:home="home" />
    </div>
    <div class="router-container" :class="home ? 'navigator' : ''">
      <router-view v-slot="{ Component, route }" class="router-view">
        <transition :name="transitionAnimation" class="container">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>

    <Navigator v-model:home="home" />
    <Dialog />
    <Login />
  </div>
</template>

<script>
import HomeButton from "@/components/input/home-button";
import Dialog from "@/components/dialog";
import Login from "@/components/login";
import Navigator from "@/components/navigator";

export default {
  name: "App",
  methods: {},
  components: {
    HomeButton,
    Dialog,
    Login,
    Navigator,
  },
  data() {
    return {
      transitionAnimation: "",
      home: false,
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
};
</script>

<style lang="scss" scoped>
.app-view {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  transition: all ease 0.5s;
  background-image: radial-gradient(
    circle at top center,
    rgba(210, 209, 222, 1),
    rgba(135, 150, 169, 1)
  );

  .home-button {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 2;
  }

  .router-container {
    width: 100%;
    height: 100%;
    transition: all ease 0.5s;
    position: absolute;
    z-index: 1;

    .router-view {
      height: 100%;
      width: 100%;
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(200, 200, 200, 0.3);
      transition: all ease 0.5s;
      opacity: 0;
      z-index: -1;
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(200, 200, 200, 0.3);
      transition: all ease 0.5s;
      opacity: 0;
      z-index: -1;
    }
  }
  .navigator {
    opacity: 0.6;
    transform: perspective(2000px) translate3d(-8%, 0, 0) rotateY(50deg)
      scale(0.6);

    &::before {
      opacity: 1;
      transform: perspective(2000px) translate3d(-20%, 0, -400px);
    }

    &::after {
      opacity: 1;
      transform: perspective(2000px) translate3d(-10%, 0, -200px);
    }
  }
}

.back-white {
  background-position: 0% 0%;
}

.back-dark {
  background-position: 70% 100%;
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
