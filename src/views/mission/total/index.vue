<template>
  <div class="todo-container">
    <MissionHeader />
    <MissionList :missionList="missionList" :loaded="loaded" />
    <MissionBack @back="back" />
    <MissionAddIcon />
  </div>
</template>

<script>
import MissionBack from "./components/mission-back.vue";
import MissionHeader from "./components/mission-header.vue";
import MissionAddIcon from "./components/mission-add-icon.vue";
import MissionList from "./components/mission-list.vue";

import { QueryArchivedMissionForUser } from "@/requests/index";
import { onMounted, reactive, ref } from "vue";

export default {
  components: {
    MissionBack,
    MissionList,
    MissionHeader,
    MissionAddIcon,
  },
  setup() {
    let missionList = reactive([]);
    let loaded = ref(false);

    const queryMissionList = function () {
      missionList.splice(0, missionList.length);
      QueryArchivedMissionForUser()
        .then((res) => {
          loaded.value = true;
          res.forEach((item) => {
            missionList.push(item);
          });
        })
        .catch((e) => {
          loaded.value = true;
        });
    };

    onMounted(() => {
      queryMissionList();
    });
    return {
      loaded,
      missionList,
    };
  },
  methods: {
    back: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-container {
  width: 100%;
  height: 100%;
  position: relative;
  perspective: true;
  overflow: hidden;
  background-image: radial-gradient(
      circle at center center,
      transparent 0%,
      rgb(33, 33, 33) 99%
    ),
    repeating-linear-gradient(
      0deg,
      rgba(163, 163, 163, 0.2) 0px,
      rgba(163, 163, 163, 0.2) 1px,
      transparent 1px,
      transparent 6px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(163, 163, 163, 0.2) 0px,
      rgba(163, 163, 163, 0.2) 1px,
      transparent 1px,
      transparent 6px
    ),
    linear-gradient(90deg, rgb(33, 33, 33), rgb(33, 33, 33));
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>