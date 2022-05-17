<template>
  <transition name="fade">
    <div class="time-selector" v-show="visible">
      <time-selector-day
        v-model:year="year"
        v-model:month="month"
        v-model:day="day"
        v-model:hour="hour"
        v-model:minute="minute"
      ></time-selector-day>
      <time-selector-commit
        @commit="commit"
        @cancel="cancel"
      ></time-selector-commit>
    </div>
  </transition>
</template>

<script>
import Mask from "../mask/index.vue";
import TimeSelectorDay from "./time-selector-day.vue";
import TimeSelectorCommit from "./time-selector-commit.vue";

import { ref } from "vue";

export default {
  props: {
    selectedDate: {
      type: Date,
      default: () => new Date(),
    },
    visible: {
      type: Boolean,
      default: () => false,
    },
  },
  setup(props, context) {
    let year = ref(0);
    let month = ref(0);
    let day = ref(0);
    let hour = ref(0);
    let minute = ref(0);

    year.value = props.selectedDate.getFullYear();
    month.value = props.selectedDate.getMonth();
    day.value = props.selectedDate.getDate();
    console.log("day", day);
    hour.value = props.selectedDate.getHours();
    minute.value = props.selectedDate.getMinutes();

    return {
      year,
      month,
      day,
      hour,
      minute,
    };
  },
  components: {
    Mask,
    TimeSelectorDay,
    TimeSelectorCommit,
  },
  computed: {
    tempDate() {
      return new Date(this.year, this.month, this.day, this.hour, this.minute);
    },
  },
  methods: {
    commit: function () {
      this.$emit("update:selected-date", this.tempDate);
      this.$emit("update:visible", false);
    },

    cancel: function () {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.time-selector {
  width: 360px;
  height: 440px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px #eee;
  user-select: none;
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  // bottom: 0;
  top: 0;
  left: 0;
  transform: translate(50%, -50%);
  z-index: 8848;
}

.fade-enter-from,
.fade-leave-to {
  width: 0;
  height: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>