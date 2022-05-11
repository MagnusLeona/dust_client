<template>
  <div class="paper-onboarding">
    <swiper
      class="swiper swiper-wrapper"
      :modules="modules"
      :direction="'vertical'"
      :grabCursor="true"
      :loop="true"
      :effect="'creative'"
      :creativeEffect="{
        progressMultiplier: 2,
        perspective: true,
        prev: {
          translate: [0, '-18%', -1],
          opacity: 0.4,
        },
        next: {
          translate: [0, '50%', 0],
          opacity: 1,
        },
      }"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="(config, index) in cardConfigs"
        :key="`config${index}`"
        v-slot="{ isActive }"
      >
        <component
          :isActive="isActive"
          :is="config.component"
          :cardConfig="config"
          @router="$emit('toRoute', config.url)"
        ></component>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCreative, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import FunctionMore from "./function-more.vue";
import FunctionTodos from "./function-todos.vue";
import FunctionTellers from "./function-tellers.vue";
import FunctionTechies from "./function-techies.vue";

export default {
  props: {
    cardConfigs: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    FunctionMore,
    FunctionTodos,
    FunctionTellers,
    FunctionTechies,
  },
  setup() {
    return {
      modules: [Pagination, EffectCreative],
    };
  },
};
</script>

<style scoped>
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  transition-property: transform;
  transform: translate3d(0, 0, 0);
}
.swiper-pointer-events {
  touch-action: pan-y;
}
.swiper-pointer-events.swiper-vertical {
  touch-action: pan-x;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}
.swiper-creative .swiper-slide {
  backface-visibility: hidden;
  overflow: hidden;
  transition-property: transform, opacity, height;
}
.paper-onboarding {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.paper-onboarding .swiper {
  width: 100%;
  height: 100%;
}
</style>