<template>
  <div>
    <div class="cube" style="--cubesize: 200px; --anim: maincuberotation">
      <div class="front box"></div>
      <div class="back box"></div>
      <div class="right box"></div>
      <div class="left box"></div>
      <div class="top box"></div>
      <div class="bottom box"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { EffectCube, Pagination } from "swiper";
SwiperCore.use([EffectCube, Pagination]);

export default {
  mounted() {
    console.log(this.$router);
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style scoped>
.cube {
  position: absolute;
  top: calc(50% - var(--cubesize) / 2);
  right: calc(50% - var(--cubesize) / 2);
  width: var(--cubesize);
  height: var(--cubesize);
  transform-style: preserve-3d;
  perspective: 100000px;
  /* transform: translateZ(200px) rotateY(30deg) rotateX(120deg); */
  /* transform: rotateX(60deg) rotateY(60deg); */
  perspective-origin: 50% 50%;
  transform: rotateX(30deg) rotateY(60deg);
  animation: maincuberotation 60s linear infinite alternate;
}

.front {
  width: var(--cubesize);
  height: var(--cubesize);
  transform: rotateY(0deg) translateZ(calc(var(--cubesize) / 2));
}

.back {
  width: var(--cubesize);
  height: var(--cubesize);
  transform: rotateX(180deg) translateZ(calc(var(--cubesize) / 2));
}

.right {
  width: var(--cubesize);
  height: var(--cubesize);
  filter: blur(2px);
  transform: rotateY(90deg) translateZ(calc(var(--cubesize) / 2));
  background-color: rgba(66, 153, 205, 0.8) !important;
}

.left {
  width: var(--cubesize);
  height: var(--cubesize);
  transform: rotateY(-90deg) translateZ(calc(var(--cubesize) / 2));
}

.top {
  width: var(--cubesize);
  height: var(--cubesize);
  transform: rotateX(90deg) translateZ(calc(var(--cubesize) / 2));
}

.bottom {
  width: var(--cubesize);
  height: var(--cubesize);
  transform: rotateX(-90deg) translateZ(calc(var(--cubesize) / 2));
}

.box {
  position: absolute;
  opacity: 0.5;
  border: 0.5px dashed red;
  box-sizing: content-box;
}

@keyframes maincuberotation {
  0% {
    transform: rotateX(30deg) rotateY(60deg) rotateZ(0);
  }
  20% {
    transform: rotateX(90deg) rotateY(120deg) rotateZ(30deg);
  }
  40% {
    transform: rotateX(150deg) rotateY(180deg) rotateZ(60deg);
  }
  60% {
    transform: rotateX(210deg) rotateY(240deg) rotateZ(90deg);
  }
  80% {
    transform: rotateX(270deg) rotateY(300deg) rotateZ(60deg);
  }
  100% {
    transform: rotateX(330deg) rotateY(360deg) rotateZ(30deg);
  }
  /* 80% {
    transform: rotateX(0deg) rotateY(300deg) rotateZ(60deg);
  }
  60% {
    transform: rotateX(450deg) rotateY(240deg) rotateZ(90deg);
  }
  40% {
    transform: rotateX(510deg) rotateY(180deg) rotateZ(60deg);
  }
  20% {
    transform: rotateX(570deg) rotateY(120deg) rotateZ(30deg);
  }
  0% {
    transform: rotateX(30deg) rotateY(60deg) rotateZ(0);
  } */
}
</style>