<template>
  <div class="mid">
    <transition name="user" mode="out-in">
      <keep-alive>
        <UserCardHome v-if="selected === 0" :loaded="loaded" />
        <UserCardLoved
          v-else-if="selected === 1"
          :articles="marked"
          :loaded="loaded"
          @toTechies="$emit('toTechies')"
        />
        <UserCardNotice v-else-if="selected === 2" />
        <UserCardDesign
          v-else-if="selected === 3"
          :articles="articles"
          @toUpload="$emit('toUpload')"
        />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import UserCardHome from "./user-card-home.vue";
import UserCardNotice from "./user-card-notice.vue";
import UserCardLoved from "./user-card-loved.vue";
import UserCardDesign from "./user-card-design.vue";

export default {
  props: {
    selected: {
      type: Number,
    },
    articles: {
      type: Array,
    },
    marked: {
      type: Array,
    },
    loaded: {
      type: Boolean,
    },
  },
  components: {
    UserCardHome,
    UserCardNotice,
    UserCardLoved,
    UserCardDesign,
  },
  computed: {
    selectedComponent() {
      switch (this.selected) {
        case 0:
          return "UserCardHome";
        case 1:
          return "UserCardLoved";
        case 2:
          return "UserCardNotice";
        case 3:
          return "UserCardDesign";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mid {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: white;
  overflow: hidden;
}

.user-enter-from,
.user-leave-to {
  opacity: 0;
  transform: translate3d(0, 100px, 0);
}

.user-enter-active,
.user-leave-active {
  transition: all ease 0.4s;
}
</style>
