<template>
  <div class="card flex-center">
    <div class="card-inner">
      <div class="card-inner-left">
        <UserCardLeft
          v-model:selected="selected"
          :user="user"
          :loaded="loaded"
        />
      </div>
      <div class="card-inner-mid">
        <UserCardMid
          :selected="selected"
          :articles="articles"
          :marked="marked"
          :loaded="loaded"
          @toUpload="$emit('toUpload')"
          @toTechies="$emit('toTechies')"
        />
      </div>
      <div class="card-inner-right">
        <UserCardRight />
      </div>
    </div>
  </div>
</template>

<script>
import UserCardMid from "./user-card-mid.vue";
import UserCardLeft from "./user-card-left.vue";
import UserCardRight from "./user-card-right.vue";

export default {
  props: {
    articles: {
      type: Array,
    },
    user: {
      type: Object,
    },
    marked: {
      type: Array,
    },
    loaded: {
      type: Boolean,
    },
  },
  components: {
    UserCardMid,
    UserCardLeft,
    UserCardRight,
  },
  data() {
    return {
      selected: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  background-color: rgb(233, 208, 189);

  &-inner {
    width: 80%;
    height: 85%;
    display: flex;
    border-radius: 20px;
    background: rgb(239, 239, 242);
    box-shadow: 2px 3px 3px rgba(181, 180, 179, 0.1),
      4px 6px 3px rgba(200, 200, 200, 0.1), 2px 6px 6px rgba(189, 188, 187, 0.2),
      8px 10px 10px rgba(190, 190, 189, 0.2),
      10px 15px 15px rgba(143, 143, 143, 0.1);

    &-left {
      width: 300px;
      height: 100%;
      border-radius: 16px;
      backdrop-filter: blur(2px);
      background-image: linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 1)
      );
    }

    &-mid {
      flex: 1;
      padding: 6px;
      padding-right: 0;
    }

    &-right {
      width: 200px;
      height: 100%;
      padding: 6px;
    }
  }
}
</style>
