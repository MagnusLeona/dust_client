<template>
  <div class="publish-editor">
    <transition name="editor">
      <div v-show="mode === 2" class="publish-editor-guide">
        <div class="guide-text">
          <h1>欢迎使用Dust在线Markdown编辑器</h1>
          <h2 class="publish-editor-guide-title">以下为使用指南：</h2>
          <h3>
            1.此编辑器仅支持使用markdown标准语法。
            --不了解markdown语法？点此开始教程~
          </h3>
          <h3>
            2.编辑器支持markdown语法输入，以及markdown预览功能，可以灵活切换。
          </h3>
          <h3>
            3.编辑器支持暂存功能，请您在输入长篇内容的时候，时刻注意保存临时数据，避免因某些不可靠因素丢失数据哦~
          </h3>
          <h3>
            4.完整的文章需要标题和一段简短的介绍哦，可以在编辑器页面右下角菜单中找到输入标题的入口~
          </h3>
        </div>

        <div class="button-box">
          <svg
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            class="svg"
          >
            <rect class="outline" height="100%" width="100%" />
          </svg>
          <div class="button-box-text flex-center" @click="$emit('toEdit')">
            开始编辑
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.publish-editor {
  width: 100vw;
  height: 100%;
  background-color: #506d76;
  transition: all linear 0.5s;
  z-index: 0;
  display: flex;
  align-items: center;
  user-select: none;

  &-guide {
    width: 60vw;
    margin-left: 20vw;
    padding: 50px;
    z-index: 200;
    border-radius: 40px;

    .guide-text {
      > h1 {
        color: white;
      }

      > h2 {
        text-indent: 20px;
        color: white;
      }

      > h3 {
        text-indent: 50px;
        color: white;
      }
    }

    .button-box {
      position: relative;
      width: 300px;
      height: 80px;
      border: 2px solid dark;
      z-index: 200;
      margin-top: 50px;
      padding: 0;
      margin-left: auto;
      margin-top: 180px;

      &:hover {
        .svg {
          .outline {
            stroke-dasharray: 760 0;
            stroke-dashoffset: 230 + 115 + 255;
          }
        }
      }

      .svg {
        fill: none;
        .outline {
          stroke-width: 3px;
          stroke: white;
          transition: all ease 0.5s;
          stroke-dasharray: 230 530;
          stroke-dashoffset: 230 + 115;
        }

        &:hover {
          .outline {
            stroke-dasharray: 760 0;
            stroke-dashoffset: 0;
          }
        }
      }

      &-text {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        font-size: 30px;
      }
    }
  }
}

@keyframes circle {
}

.editor-enter-from,
.editor-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
.editor-enter-active,
.editor-leave-active {
  transition: all ease 0.5s;
}
</style>