<template>
  <div class="demo">
    {{ visible }}
    <div>
      <svg width="900" height="200" version="1.1">
        <line
          id="line"
          x1="10"
          x2="600"
          y1="110"
          y2="110"
          stroke="orange"
          fill="transparent"
          stroke-width="8"
          class="line"
        />
      </svg>
      <!-- <svg width="900" height="400" xmlns="http://www.w3.org/2000/svg">
        <symbol id="text">
          <text x="10%" y="60%" class="text">
            Todos
            <animate
              attributeName="dy"
              values="0 0 0 0 0;-60 60 0 0 0;0 -60 60 0 0;0 0 -60 60 0;0 0 0 -60 60;0 0 0 0 -60;0 0 0 0 0"
              dur="3s"
              repeatCount="1"
            />
          </text>
        </symbol>

        <g>
          <use xlink:href="#text" class="t-text">
            <set
              attributeName="dy"
              from="20%;0;0;0;0"
              to="0;0;0;0;0"
              dur="3s"
              begin="1s"
            ></set>
            <animate
              attributeName="dy"
              values="0;20%;0;0;0"
              dur="10s"
            ></animate>
          </use>
        </g>
      </svg> -->
    </div>
    <!-- <div class="poly"></div> -->
    <input type="button" value="abc" @click="click" />
    <!-- <Alert :visible="true" :info="{ data: {} }" /> -->

    <div class="text-with-border">
      <svg
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        class="svg"
      >
        <rect class="outline" height="100%" width="100%" />
      </svg>
      <div class="svg-text flex-center">确认</div>
    </div>

    <div class="italic-d">D</div>
  </div>
</template>

<script>
import { reactive, onMounted, ref, getCurrentInstance } from "vue";
import comp from "./compo.vue";
import TimeSelector from "@/components/timer/time-selector.vue";
import Alert from "@/components/dialog/components/alert.vue";
import Toast from "@/components/dialog/components/toast.vue";

export default {
  components: {
    comp,
    TimeSelector,
    Alert,
    Toast,
  },
  setup(props, ctx) {
    let missionList = reactive([]);
    let visible = ref(true);
    let timeSelectorVisible = ref(true);
    let deadlineDate = ref(Date);
    deadlineDate.value = new Date();

    onMounted(() => {});

    const { proxy } = getCurrentInstance();

    const click = () => {
      proxy.$dust.toast({ title: "abc" });
    };

    return {
      missionList,
      visible,
      click,
      timeSelectorVisible,
      deadlineDate,
    };
  },
};
</script>
<style lang="scss" scoped>
.demo {
  padding: 50px;
  border: 1px solid red;
  position: relative;
}

.con {
  position: absolute;
  top: 500px;
  left: 500px;
}

.line {
  stroke-dasharray: 20px, 10px;
  stroke-dashoffset: 0;
  animation: move 3s linear forwards;
}

@keyframes move {
  0% {
    stroke-dasharray: 0, 100%;
  }
  100% {
    stroke-dasharray: 100%, 0;
  }
}

.text {
  font-size: 200px;
  font-family: Segoe Script;
}

.t-text {
  fill: #360745;
  stroke: yellow;
  stroke-width: 5px;
  // stroke: #360745;
  animation: textmove 15s infinite linear forwards;
}

@keyframes textmove {
  0% {
    stroke-dasharray: 0, 100%;
  }
  20% {
    stroke-dasharray: 100%, 0;
  }
  40% {
    stroke-dasharray: 100%, 0;
  }
  60% {
    stroke-dasharray: 0, 100%;
  }
  80% {
    stroke-dasharray: 0, 100%;
  }
  90% {
    stroke-dasharray: 100%, 0;
  }
  100% {
    stroke-dasharray: 100%, 0;
  }
}

.use-text {
  fill: none;
  stroke: white;
  stroke-dashoffset: 35%;
  stroke-dasharray: 0 87.5%;
  stroke-width: 2px;
}

.use-text:nth-child(1) {
  stroke: #360745;
  animation: animation1 8s infinite ease-in-out forwards;
}

.use-text:nth-child(2) {
  stroke: #d61c59;
  animation: animation2 8s infinite ease-in-out forwards;
}

.use-text:nth-child(3) {
  stroke: #e7d84b;
  animation: animation3 8s infinite ease-in-out forwards;
}

.use-text:nth-child(4) {
  stroke: #efeac5;
  animation: animation4 8s infinite ease-in-out forwards;
}

.use-text:nth-child(5) {
  stroke: #1b8798;
  animation: animation5 8s infinite ease-in-out forwards;
}

@keyframes animation1 {
  50% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 7%;
  }
  70% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 7%;
  }
}
@keyframes animation2 {
  50% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 14%;
  }
  70% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 14%;
  }
}
@keyframes animation3 {
  50% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 21%;
  }
  70% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 21%;
  }
}
@keyframes animation4 {
  50% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 28%;
  }
  70% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 28%;
  }
}
@keyframes animation5 {
  50% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 35%;
  }
  70% {
    stroke-dasharray: 7% 28%;
    stroke-dashoffset: 35%;
  }
}

.poly {
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  border: 2px solid red;
  width: 200px;
  height: 100px;
  background-color: red;
}

.text-with-border {
  width: 250px;
  height: 50px;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  &:hover {
    .svg {
      .outline {
        stroke-dasharray: 600 0;
        stroke-dashoffset: 475;
      }
    }
  }

  .svg {
    position: absolute;
    top: 0;
    left: 0;

    .outline {
      stroke-width: 3px;
      fill: transparent;
      stroke: #1b8798;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      stroke-dasharray: 100 500;
      stroke-dashoffset: 225;
      transition: all ease 0.5s;
    }
  }

  .svg-text {
    width: 100%;
    height: 100%;
    font-size: 27px;
    color: #000;
    font-family: "Helvetica";
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}

.italic-d {
  font-size: 100px;
  font-family: italic;
}
</style>