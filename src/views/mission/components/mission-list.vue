<template>
  <transition
    enter-from-class="missionlist-enter-from"
    enter-active-class="missionlist-enter-active"
    leave-to-class="missionlist-leave-to"
    leave-active-class="missionlist-leave-active"
    mode="out-in"
  >
    <div class="todo-list" v-if="!loaded || missionList.length > 0">
      <div class="todo-list-inner">
        <transition-group
          enter-from-class="list-enter-from"
          enter-active-class="list-enter-active"
          leave-active-class="list-leave-active"
          leave-to-class="list-leave-to"
          tag="div"
        >
          <div
            v-for="(mission, index) in missionList"
            :key="`mission${index}`"
            class="todo-list-card"
          >
            <div class="todo-list-card-head" @click="checkIfShowDetail(index)">
              <div class="todo-list-card-head-name">{{ mission.name }}</div>

              <div class="todo-list-card-head-opration flex-center">
                <div
                  class="button-delete flex-center"
                  @click="deleteMission(index)"
                >
                  删除
                </div>
                <div
                  class="button-finish flex-center"
                  @click="finishMission(index)"
                >
                  完成
                </div>
              </div>
              <div class="todo-list-card-head-status">
                <svg-icon
                  :icon="getIcon(mission.status)"
                  class="status-icon"
                ></svg-icon>
              </div>
            </div>
            <dust-transition
              ><div class="todo-list-card-detail" v-show="showDetail === index">
                <div class="todo-list-card-detail-content">
                  <div class="todo-list-card-detail-content-box">
                    <div>标题： {{ mission.name }}</div>
                    <div class="item">
                      状态： {{ formatStatus(mission.status) }}
                    </div>
                    <div class="item">内容： {{ mission.content }}</div>
                    <div class="item">创建时间： {{ mission.createTime }}</div>
                    <div class="item">
                      截至日期： {{ mission.deadLineTime }}
                    </div>
                  </div>
                </div>
              </div></dust-transition
            >
          </div>
        </transition-group>
      </div>
    </div>
    <div class="no-data flex-center" v-else>
      <svg-icon icon="icon-nodata" class="no-data-svg" />
      <div class="no-data-text">糟糕，居然没有待办任务·······</div>
    </div>
  </transition>
</template>

<script>
import DustTransition from "@/components/slide/transition.vue";
export default {
  props: {
    loaded: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    missionList: {
      type: Array,
      required: true,
    },
  },
  components: {
    DustTransition,
  },
  data() {
    return {
      showDetail: -1,
    };
  },
  methods: {
    checkIfShowDetail: function (index) {
      this.showDetail === index
        ? (this.showDetail = -1)
        : (this.showDetail = index);
    },

    deleteMission: function (index) {
      event.stopPropagation();
      this.$emit("deleteMission", index);
      this.showDetail = -1;
    },

    finishMission: function (index) {
      event.stopPropagation();
      this.$emit("finishMission", index);
      this.showDetail = -1;
    },

    getIcon: function (status) {
      switch (status) {
        case 0:
          return "icon-going-gray";
        case 10:
          return "icon-done-purple";
        case -1:
          return "icon-late-gray";
        default:
          break;
      }
    },

    formatStatus: function (status) {
      switch (status) {
        case 0:
          return "新建";
        case 10:
          return "已完成";
        case -1:
          return "中止";
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 80px 100px 80px 100px;

  &-inner {
    height: 100%;
    padding: 0 5px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 4px;
      background-color: rgba(95, 66, 95, 0.1);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(127, 81, 197, 0.5);
      border-radius: 2px;
    }
  }

  &-card {
    margin-bottom: 20px;
    &-head {
      padding: 0 20px;
      display: flex;
      align-items: center;
      height: 72px;
      user-select: none;
      cursor: pointer;
      border-radius: 5px;
      z-index: 10;
      color: white;
      background: rgba(95, 66, 95, 0.25);
      backdrop-filter: blur(10px);

      &-name {
        overflow: hidden;
      }

      &-status {
        margin-left: 20px;
      }

      &-opration {
        margin-left: auto;
        height: 100%;
        opacity: 0;
        transition: all ease 1s;
        position: relative;
        overflow: hidden;

        &::before {
          content: "";
          width: 100%;
          height: 60%;
          position: absolute;
          left: 0;
          z-index: 110;
          backdrop-filter: blur(10px);
          border-radius: 5px;
          background-color: rgba(95, 66, 95, 0.25);
          transition: all ease-in-out 0.25s;
        }

        &:hover {
          opacity: 1;

          &::before {
            transform: translateX(-100%);
          }
        }

        .button-delete {
          height: 60%;
          background-color: rgba(148, 5, 5, 0.5);
          width: 80px;
          border-radius: 5px;
          transition: all ease 0.25s;

          &:hover {
            box-shadow: inset 0px 0px 10px rgba(112, 1, 1, 0.5);
            background-color: rgba(196, 76, 112, 0.5);
          }
        }

        .button-finish {
          height: 60%;
          background-color: rgba(4, 71, 49, 0.5);
          width: 80px;
          border-radius: 5px;
          transition: all ease 0.25s;
          margin-left: 10px;

          &:hover {
            box-shadow: inset 0px 0px 10px rgba(2, 48, 32, 0.9);
            background-color: rgba(14, 150, 105, 0.5);
          }
        }
      }
    }

    &-detail {
      padding: 0 50px;
      &-content {
        padding-top: 20px;
        &-box {
          padding: 20px 20px;
          border-radius: 20px;
          color: rgba(255, 255, 255, 1);
          background-color: rgba(95, 66, 95, 0.25);
          backdrop-filter: blur(10px);

          .item {
            margin-top: 20px;
          }
        }
      }
    }
  }
}

.no-data {
  width: 100%;
  height: 100%;
  flex-direction: column;

  &-text {
    color: rgb(230, 230, 53);
    font-size: 21px;
  }
}

.no-data-svg {
  width: 500px;
  height: 500px;
}

.missionlist-enter-from {
  transform: translateX(200px);
}
.missionlist-enter-active {
  transition: all 0.5s ease;
}
.missionlist-leave-active {
  transition: all 0.5s ease;
}
.missionlist-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.25s;
}
.list-enter-from,
.list-leave-to {
  transform: scale(0);
}

.status-icon {
  width: 24px;
  height: 24px;
}
</style>                                                                                         