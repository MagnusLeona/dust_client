<template>
  <transition
    enter-from-class="missionlist-enter-from"
    enter-active-class="missionlist-enter-active"
    leave-to-class="missionlist-leave-to"
    leave-active-class="missionlist-leave-active"
  >
    <div class="todo" v-if="!loaded || missionList.length > 0">
      <div class="todo-list">
        <transition-group name="dust-list" tag="div">
          <div
            v-for="(mission, index) in missionList"
            v-bind:key="mission.id"
            class="todo-list-card"
          >
            <div class="todo-list-card-head" @click="checkIfShowDetail(index)">
              <div class="todo-list-card-head-name">{{ mission.name }}</div>

              <div class="todo-list-card-head-opration flex-center">
                <div
                  v-if="showDelete(mission.status)"
                  class="button-delete flex-center"
                  @click="deleteMission(index)"
                >
                  删除
                </div>
                <div
                  v-if="showArchive(mission.status)"
                  class="button-archive flex-center"
                  @click="archiveMission(index)"
                >
                  归档
                </div>
                <div
                  v-if="showModify(mission.status)"
                  class="button-modify flex-center"
                  @click="modifyMission(index)"
                >
                  修改
                </div>
                <div
                  v-if="showFinish(mission.status)"
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

    modifyMission: function (index) {
      event.stopPropagation();
      this.$emit("modifyMission", index);
      this.showDetail = -1;
    },

    archiveMission: function (index) {
      event.stopPropagation();
      this.$emit("archiveMission", index);
      this.showDetail = -1;
    },

    getIcon: function (status) {
      switch (status) {
        case 0:
          return "icon-going-yellow";
        case 10:
          return "icon-done-purple";
        case 11:
          return "icon-file";
        case 12:
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
        case 11:
          return "已归档";
        case 12:
          return "中止";
        default:
          break;
      }
    },

    showFinish: function (status) {
      if (status < 10 && status >= 0) {
        return true;
      }
      return false;
    },

    showDelete: function (status) {
      if (status < 10) {
        return true;
      }
      return false;
    },

    showModify: function (status) {
      if (status < 10 && status >= 0) {
        return true;
      }
      return false;
    },

    showArchive: function (status) {
      if (status === 10) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 100px 100px 80px 100px;

  &-list {
    height: 100%;
    padding: 0 10px;
    overflow-y: overlay;
    display: block;
    &::-webkit-scrollbar {
      width: 4px;
      background-color: rgba(95, 66, 95, 0.1);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(127, 81, 197, 0.5);
      border-radius: 2px;
    }

    &-card {
      display: inline-block;
      width: 100%;
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
        background-color: rgba(223, 211, 223, 0.2);
        backdrop-filter: blur(1px);

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
              background-color: rgba(241, 170, 191, 0.5);
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
              background-color: rgba(138, 221, 193, 0.5);
            }
          }

          .button-modify {
            height: 60%;
            background-color: rgba(228, 217, 16, 0.5);
            width: 80px;
            border-radius: 5px;
            transition: all ease 0.25s;
            margin-left: 10px;

            &:hover {
              box-shadow: inset 0px 0px 10px rgba(109, 96, 8, 0.9);
              background-color: rgba(232, 240, 128, 0.837);
            }
          }

          .button-archive {
            height: 60%;
            background-color: rgba(22, 188, 206, 0.5);
            width: 80px;
            border-radius: 5px;
            transition: all ease 0.25s;
            margin-left: 10px;

            &:hover {
              box-shadow: inset 0px 0px 10px rgba(25, 171, 229, 0.9);
              background-color: rgba(150, 217, 237, 0.837);
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
            background-color: rgba(209, 192, 209, 0.2);
            backdrop-filter: blur(2px);

            .item {
              margin-top: 20px;
            }
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
  opacity: 0;
  transform: scale(0);
}
.missionlist-enter-active {
  transition: all 0.5s ease;
}
.missionlist-leave-active {
  transition: all 0.5s ease;
}
.missionlist-leave-to {
  opacity: 0;
}

.status-icon {
  width: 24px;
  height: 24px;
}

/* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地移动过来的效果 */
.dust-list-enter-from {
  transform: translate(0, 30px);
}
.dust-list-enter-active {
  transition: all 0.5s ease;
}
.dust-list-leave-to {
  transform: translate(0, 30px);
}
.dust-list-move {
  transition: all 0.3s ease;
}
.dust-list-leave-active {
  position: absolute;
  transition: all 0.5s ease;
}
</style>                                                                                         