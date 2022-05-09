<template >
  <div class="todo-container">
    <MissionHeader />
    <MissionList
      :loaded="loaded"
      :missionList="missionList"
      @deleteMission="deleteMission"
      @finishMission="finishMission"
      @modifyMission="modifyMission"
      @archiveMission="archiveMission"
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
    <MissionModifyBody
      ref="missionModifyBody"
      v-model:successfully-modified="successfullyModified"
      v-model:show-body="showModifyMissionBlock"
      :modifyingMission="currentModifyingMission"
      @modify="modify"
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
import MissionModifyBody from "./components/mission-modify-body.vue";

import {
  QueryMissionsForUser,
  SaveMissionForUser,
  DeleteMissionForUser,
  FinishMissionForUser,
  UpdateMissionForUser,
  ArchiveMissionForUser,
} from "@/requests/index";
import { reactive, onMounted, ref, onUnmounted } from "vue";

export default {
  components: {
    MissionList,
    MissionHeader,
    MissionAddIcon,
    MissionAddBody,
    MissionBack,
    MissionModifyBody,
  },
  setup() {
    let missionList = reactive([]);
    let check = ref(false);
    let on = ref(false);
    let loaded = ref(false);
    let showAddMissionBlock = ref(false);
    let successfullyAdded = ref(false);
    let showModifyMissionBlock = ref(false);
    let successfullyModified = ref(false);
    let currentModifyingMission = reactive({ data: {} });

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
      showModifyMissionBlock,
      successfullyModified,
      currentModifyingMission,
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
        this.$dust.toast({ title: "新增成功！" });
      });
    },

    modify: function (data) {
      let submitData = { ...this.currentModifyingMission };
      let index = this.currentModifyingMission.index;
      Object.assign(submitData, data);
      UpdateMissionForUser(submitData).then((res) => {
        this.missionList.splice(index, 1, res);
        this.showModifyMissionBlock = false;
        this.$dust.toast({ title: "修改成功！" });
      });
    },

    modifyMission: function (index) {
      // 修改index的任务,唤起弹框
      this.currentModifyingMission = this.missionList[index];
      this.currentModifyingMission.index = index;
      this.showModifyMissionBlock = true;
    },

    deleteMission: function (index) {
      // 删除任务
      console.log("deleting mission");
      console.log(this.missionList[index].id);
      DeleteMissionForUser({ missionId: this.missionList[index].id }).then(
        (res) => {
          // 成功，则删掉这一个数据
          this.missionList.splice(index, 1);
          this.$dust.toast({ title: "已删除" });
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

    archiveMission: function (index) {
      let preMission = this.missionList[index];
      ArchiveMissionForUser({ missionId: preMission.id }).then((res) => {
        this.missionList.splice(index, 1, res);
        this.$dust.toast({ title: "已归档" });
      });
    },

    back: function () {
      this.$router.push({
        path: "/main",
      });
    },

    clickTargetCheck: function (e) {
      if (
        !(
          this.$refs.missionAddIcon.$el.contains(e.target) ||
          this.$refs.missionAddBody.$el.contains(e.target)
        )
      ) {
        this.showAddMissionBlock = false;
      }

      if (!this.$refs.missionModifyBody.$el.contains(e.target)) {
        this.showModifyMissionBlock = false;
      }
    },

    addClickEventListener: function () {
      document.addEventListener("click", this.clickTargetCheck);
    },

    removeClickEventListener: function () {
      document.removeEventListener("click", this.clickTargetCheck);
    },
  },
  mounted() {
    this.addClickEventListener();
  },
  unmounted() {
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
  background-image: radial-gradient(
      circle at center center,
      transparent,
      rgb(33, 33, 33)
    ),
    repeating-linear-gradient(
      135deg,
      rgb(33, 33, 33) 0px,
      rgb(33, 33, 33) 2px,
      transparent 2px,
      transparent 10px,
      rgb(33, 33, 33) 10px,
      rgb(33, 33, 33) 11px,
      transparent 11px,
      transparent 21px
    ),
    repeating-linear-gradient(
      45deg,
      rgb(47, 47, 47) 0px,
      rgb(47, 47, 47) 4px,
      transparent 4px,
      transparent 8px
    ),
    linear-gradient(90deg, rgb(33, 33, 33), rgb(33, 33, 33));
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>