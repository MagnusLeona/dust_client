<template>
  <transition
    name="misison-add-transition"
    leave-to-class="mission-add-transition-leave-to"
    leave-active-class="mission-add-transition-leave-active"
  >
    <div class="mission-add-body" v-show="showBody" ref="missionAdd">
      <div class="title">
        <div class="title-input">
          <input
            type="text"
            v-model="title"
            id="title"
            class="title-input-input"
            autocomplete="off"
          />
          <label for="title" class="title-input-label flex-center">标 题</label>
        </div>
      </div>

      <div class="deadline-date">
        <div class="deadline-date-input">
          <input
            type="button"
            id="deadlineTime"
            class="deadline-date-input-input"
            readonly
            :value="`${deadlineTime.getFullYear()}-${
              deadlineTime.getMonth() + 1
            }-${deadlineTime.getDate()}  ${deadlineTime.getHours()}:${deadlineTime.getMinutes()}`"
            @click="timeSelectorVisible = true"
          />
          <time-selector
            v-model:visible="timeSelectorVisible"
            v-model:selected-date="deadlineTime"
          ></time-selector>
          <label
            for="deadlineTime"
            class="deadline-date-input-label flex-center"
            >截止日期</label
          >
        </div>
      </div>

      <div class="content">
        <label for="content" class="content-label flex-center">内容</label>
        <textarea
          type="text"
          v-model="content"
          id="content"
          rows="5"
          class="content-input"
        />
      </div>

      <div class="commit flex-center">
        <div class="commit-button flex-center" @click="modify">修 改</div>
      </div>
    </div>
  </transition>
</template>

<script>
import CommonInput from "@/components/input/common-input";
import TimeSelector from "@/components/timer/time-selector";

import { timeFormatter } from "@/utils/utils";

export default {
  props: {
    showBody: {
      type: Boolean,
      required: true,
    },
    successfullyModified: {
      type: Boolean,
      required: false,
    },
    modifyingMission: {
      type: Object,
      required: true,
    },
  },
  setup(props, ctx) {
    const hideMissionAddBody = function () {
      ctx.emit("update:showBody", false);
    };

    return {
      hideMissionAddBody,
    };
  },
  components: {
    CommonInput,
    TimeSelector,
  },
  data() {
    return {
      title: "",
      content: "",
      timeSelectorVisible: false,
      deadlineTime: new Date(),
    };
  },
  methods: {
    modify: function () {
      if (!this.title || !this.content) return;
      this.$emit("modify", {
        name: this.title,
        content: this.content,
        deadLineTime: timeFormatter(this.deadlineTime),
      });
    },
  },
  watch: {
    successfullyModified: function () {
      if (this.successfullyAdded) {
        //新增成功，则清空数据
        this.title = "";
        this.content = "";
        this.$emit("update:successfullyAdded", false);
      }
    },

    showBody: function (newVal) {
      if (newVal) {
        this.title = this.modifyingMission.name;
        this.content = this.modifyingMission.content;
        console.log(this.modifyingMission);
        this.deadlineTime = new Date(this.modifyingMission.deadLineTime);
      } else {
        this.title = "";
        this.content = "";
        this.deadlineTime = new Date();
      }
    },
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.mission-add-body {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 800px;
  height: 400px;
  padding: 20px 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.3);
  background-color: rgba(200, 200, 210, 0.3);

  .title {
    margin-top: 20px;
    &-input {
      width: 270px;
      height: 40px;
      position: relative;
      &-input {
        width: 270px;
        height: 40px;
        border-radius: 3px;
        text-indent: 80px;
        border: 1px dashed rgba(144, 144, 144, 0.5);
      }

      & > input {
        color: #fff;
        width: 520px;
        text-indent: 80px;
        background-color: rgba(255, 255, 255, 0);
        &:focus {
          border-color: #c0179b;
          transition: all 0.2s ease;
          outline: 0;
          -webkit-box-shadow: inset 0 1px 1px rgba(216, 106, 216, 0.075),
            0 0 10px rgba(115, 1, 138, 0.6);
          box-shadow: inset 0 1px 1px rgba(204, 63, 153, 0.075),
            0 0 10px rgba(238, 127, 153, 0.6);
        }
      }

      &-label {
        width: 80px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
        z-index: 2;
        transition: all ease-in-out 0.3s;
        color: rgba(255, 255, 255, 0.7);
        background-image: linear-gradient(45deg, #520355 0%, #ca95da 100%);
        font-size: 13px;
      }
    }
  }

  .content {
    margin-top: 20px;
    position: relative;
    position: relative;
    width: 100%;
    border-radius: 3px;

    & > textarea {
      background-color: rgba(255, 255, 255, 0);
      width: 100%;
      border-radius: 3px;
      color: #fff;
      font-size: 16px;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      &:focus {
        border-color: #c0179b;
        transition: all 0.2s ease;
        outline: 0;
        text-indent: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(216, 106, 216, 0.075),
          0 0 10px rgba(115, 1, 138, 0.6);
        box-shadow: inset 0 1px 1px rgba(204, 63, 153, 0.075),
          0 0 10px rgba(238, 127, 153, 0.6);
      }
    }

    &-label {
      width: 80px;
      height: 40px;
      border-radius: 3px;
      z-index: 2;
      transition: all ease-in-out 0.3s;
      color: rgba(255, 255, 255, 0.7);
      background-image: linear-gradient(45deg, #520355 0%, #ca95da 100%);
      font-size: 13px;
    }
  }

  .deadline-date {
    margin-top: 20px;
    &-input {
      width: 270px;
      height: 40px;
      position: relative;
      &-input {
        width: 270px;
        height: 40px;
        text-indent: 0;
        text-align: left;
        text-indent: 80px;
        color: #fff;
        background-color: rgba(255, 255, 255, 0);
        border: 1px dashed rgba(144, 144, 144, 0.5);
      }

      &-label {
        width: 80px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
        z-index: 2;
        transition: all ease-in-out 0.3s;
        color: rgba(255, 255, 255, 0.7);
        background-image: linear-gradient(45deg, #520355 0%, #ca95da 100%);
        font-size: 13px;
      }
    }
  }

  .commit {
    margin-top: 20px;
    &-button {
      width: 180px;
      height: 36px;
      color: white;
      background-image: linear-gradient(45deg, #520355 0%, #9c0fc7 100%);

      border-radius: 3px;
      transition: all 0.3s ease;

      &:hover {
        -webkit-box-shadow: inset 0 1px 1px rgba(216, 106, 216, 0.075),
          0 0 10px rgba(115, 1, 138, 0.6);
        box-shadow: inset 0 1px 1px rgba(204, 63, 153, 0.075),
          0 0 10px rgba(238, 127, 153, 0.6);
      }
    }
  }
}

.misison-add-transition-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.misison-add-transition-enter-active {
  transition: all 0.36s ease;
}
.mission-add-transition-leave-active {
  transition: all 0.36s ease;
}
.mission-add-transition-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>