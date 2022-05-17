<template>
  <div class="publish-upload">
    <transition name="upload">
      <div v-show="mode === 1" class="publish-upload-body">
        <div class="guide-text">
          <h1>感谢上传您的作品</h1>
          <h2 class="publish-upload-guide-title">
            上传前，请先仔细阅读使用指南：
          </h2>
          <h3>
            1.Dust仅支持Markdown语法的文档，但是您可以尝试上传 .md / txt /
            .doc格式的文件，我们会尽最大努力解析为符合您要求的markdown文档，以呈现给所有的用户。
          </h3>
          <h3>
            2.上传的所有文档，请您务必输入文章的标题，文章的简介，以及文章涉及的一些标签。
          </h3>
          <h3>
            3.过长的文章上传可能需要一定的时间，请您上传成功之后再推出上传页面~
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
          <div class="button-box-text flex-center" @click="$emit('toUpload')">
            立即上传
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
.publish-upload {
  width: 100vw;
  height: 100%;
  background-color: #65544f;
  z-index: 0;
  display: flex;
  align-items: center;

  &-body {
    z-index: 200;
    margin-left: 20vw;
    margin-right: 10vw;

    .guide-text {
      > h1 {
        color: white;
      }

      > h2 {
        text-indent: 20px;
        color: white;
      }

      > h3 {
        color: white;
        margin-left: 50px;
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

.upload-enter-from,
.upload-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
.upload-enter-active,
.upload-leave-active {
  transition: all ease 0.5s;
}
</style>