<template>
  <div class="input flex-center">
    <div class="input-header" @click="changeMode">
      <transition name="list">
        <div
          class="input-header-box"
          v-if="mode === 0"
          @mouseover="showText = true"
          @mouseleave="showText = false"
        >
          <transition name="edit">
            <div class="mode" v-show="showText">编辑模式</div>
          </transition>
          <svg-icon icon="icon-edit-gray" class="icon"></svg-icon>
        </div>
        <div
          class="input-header-box"
          v-else
          @mouseover="showText = true"
          @mouseleave="showText = false"
        >
          <transition name="edit">
            <div class="mode" v-show="showText">预览模式</div>
          </transition>
          <svg-icon icon="icon-preview-gray" class="icon"></svg-icon>
        </div>
      </transition>
    </div>
    <div class="input-body flex-center">
      <transition name="input-preview" mode="out-in">
        <PublishMainInput
          key="maininput"
          v-model:tempDoc="tempDoc"
          v-if="mode === 0"
          @save="save"
          @updateInput="updateInput"
        />
        <PublishMainPreview
          key="mainpreview"
          v-model:tempDoc="tempDoc"
          @updateInput="updateInput"
          v-else
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import svgIcon from "../../../../components/svg/svg-icon.vue";

import PublishMainInput from "./publish-main-input.vue";
import PublishMainPreview from "./publish-main-preview.vue";

export default {
  components: { svgIcon },
  props: {
    inputDoc: {
      type: String,
      required: true,
    },
  },
  components: { PublishMainInput, PublishMainPreview },
  setup() {
    let tempDoc = ref("");
    let mode = ref(0);
    let showText = ref(false);
    let forceUpdate = ref(false);

    return {
      tempDoc,
      mode,
      showText,
      forceUpdate,
    };
  },
  methods: {
    changeMode: function () {
      this.forceUpdate = true;
      this.mode = this.mode === 0 ? 1 : 0;
    },

    updateInput: function (value) {
      this.tempDoc = value;
      this.forceUpdate = false;
    },

    save: function (value) {
      this.tempDoc = value;
      this.forceUpdate = true;
      this.$dust.toast({ title: "暂存成功！" });
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;

  &-header {
    position: absolute;
    top: 60px;
    left: 0;
    display: block;
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &-box {
      display: flex;
      align-items: center;

      .mode {
        padding: 10px 20px;
        border-radius: 4px;
        background-color: rgba(200, 200, 200, 1);
      }
    }
  }

  &-body {
    width: 100%;
    height: 100%;
    padding: 60px 0;
  }

  &-footer {
    width: 100%;
    color: white;
  }
}

.icon {
  width: 36px;
  height: 36px;
  margin-left: 20px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
  position: absolute;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.edit-enter-from,
.edit-leave-to {
  transform: translateX(-60px);
  opacity: 0;
}
.edit-enter-active,
.edit-leave-active {
  transition: all ease 0.3s;
}

.input-preview-leave-active,
.input-preview-enter-active {
  transition: all 0.3s ease;
}
.input-preview-leave-to,
.input-preview-enter-from {
  opacity: 0;
  transform: translate(0, 50px);
}
</style>