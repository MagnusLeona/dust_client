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
    <Alert v-model:visible="visible"></Alert>

    <input type="button" value="abc" @click="click" />
  </div>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { QueryMissionsForUser } from "@/requests/index";
import comp from "./compo.vue";
import MissionList from "../mission/components/mission-list.vue";
import TimeSelector from "@/components/timer/time-selector.vue";
import Alert from "@/components/dialog/components/alert.vue";

export default {
  components: {
    comp,
    MissionList,
    TimeSelector,
    Alert,
  },
  setup() {
    let missionList = reactive([]);
    let visible = ref(true);
    let timeSelectorVisible = ref(true);
    let deadlineDate = ref(Date);
    deadlineDate.value = new Date();

    onMounted(() => {});

    const click = function () {
      console.log("abc", visible);
      let currVisible = visible.value;
      visible.value = !currVisible;
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
</style>