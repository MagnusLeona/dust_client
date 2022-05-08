<template >
  <div class="todo-container">
    <MissionHeader />
    <MissionList
      :loaded="loaded"
      :missionList="missionList"
      @deleteMission="deleteMission"
      @finishMission="finishMission"
    />
    <MissionAddIcon
      ref="missionAddIcon"
      v-model:show-body="showAddMissionBlock"
    />
    <MissionAddBody
      ref="missionAddBody"
      v-model:successfully-added="successfullyAdded"
      v-model:show-body="showAddMissionBlock"
      @commit="commit"
    />
    <MissionBack @back="back" />
  </div>
</template>

<script>
import MissionHeader from "./components/mission-header.vue";
import MissionList from "./components/mission-list.vue";
import MissionAddBody from "./components/mission-add-body.vue";
import MissionAddIcon from "./components/mission-add-icon.vue";
import MissionBack from "./components/mission-back.vue";

import {
  QueryMissionsForUser,
  SaveMissionForUser,
  DeleteMissionForUser,
  FinishMissionForUser,
} from "@/requests/index";
import { reactive, onMounted, ref } from "vue";

export default {
  components: {
    MissionList,
    MissionHeader,
    MissionAddIcon,
    MissionAddBody,
    MissionBack,
  },
  setup() {
    let missionList = reactive([]);
    let check = ref(false);
    let on = ref(false);
    let loaded = ref(false);
    let showAddMissionBlock = ref(false);
    let successfullyAdded = ref(false);

    const queryMissionList = function () {
      loaded.value = false;
      missionList.splice(0, missionList.length);
      QueryMissionsForUser().then((res) => {
        loaded.value = true;
        res.forEach((item) => {
          missionList.push(item);
        });
      });
    };

    onMounted(() => {
      queryMissionList();
    });

    return {
      missionList,
      check,
      on,
      loaded,
      showAddMissionBlock,
      queryMissionList,
      successfullyAdded,
    };
  },
  methods: {
    checkthis: function () {
      this.check = !this.check;
    },

    commit: function (params) {
      this.showAddMissionBlock = false;
      SaveMissionForUser({ ...params }).then((res) => {
        this.missionList.push(res);
        this.successfullyAdded = true;
      });
    },

    deleteMission: function (index) {
      // 删除任务
      console.log("deleting mission");
      console.log(this.missionList[index].id);
      DeleteMissionForUser({ missionId: this.missionList[index].id }).then(
        (res) => {
          // 成功，则删掉这一个数据
          this.missionList.splice(index, 1);
        }
      );
    },

    finishMission: function (index) {
      //完成任务
      let preMission = this.missionList[index];
      FinishMissionForUser({ missionId: preMission.id }).then((res) => {
        this.missionList.splice(index, 1, res);
      });
    },

    back: function () {
      this.$router.push({
        path: "/main",
      });
    },

    addClickEventListener: function () {
      document.addEventListener("click", (e) => {
        // 屏幕被点击了，但是目标不在此target，则默认关闭
        if (
          this.$refs.missionAddIcon.$el.contains(e.target) ||
          this.$refs.missionAddBody.$el.contains(e.target)
        )
          return;

        this.showAddMissionBlock = false;
      });
    },

    removeClickEventListener: function () {
      document.removeEventListener("click", (e) => {
        if (
          this.$refs.missionAddIcon.$el.contains(e.target) ||
          this.$refs.missionAddBody.$el.contains(e.target)
        )
          return;

        this.showAddMissionBlock = false;
      });
    },
  },
  mounted() {
    this.addClickEventListener();
  },
  beforeDestroy() {
    this.removeClickEventListener();
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
  background-image: url("~@/assets/images/background/back-010.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>