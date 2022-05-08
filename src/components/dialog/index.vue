<template>
  <Alert
    v-model:visible="alertVisible"
    :info="alertInfo"
    @btnClick="alertBtnClick"
  />
  <Confirm
    v-model:visible="confirmVisible"
    :info="confirmInfo"
    @btnClick="confirmBtnClick"
  />
  <Toast v-model:visible="toastVisible" :info="toastInfo" />
</template>

<script>
import { onMounted, ref, reactive, onUnmounted } from "vue";
import Alert from "./components/alert.vue";
import Confirm from "./components/confirm.vue";
import Toast from "./components/toast.vue";
import dustDispatch from "@/utils/dialog";

export default {
  components: {
    Alert,
    Confirm,
    Toast,
  },
  setup() {
    let alertVisible = ref(false);
    let confirmVisible = ref(false);
    let toastVisible = ref(false);

    let alertInfo = reactive({});
    let confirmInfo = reactive({});
    let toastInfo = reactive({});

    onMounted(() => {
      // 注册所有的监听器
      const alertListener = ({ detail }) => {
        alertVisible.value = true;
        Object.assign(alertInfo, detail);
      };
      const confirmListener = ({ detail }) => {
        confirmVisible.value = true;
        Object.assign(confirmInfo, detail);
      };
      const toastListener = ({ detail }) => {
        toastVisible.value = true;
        Object.assign(toastInfo, detail);
      };
      window.addEventListener("alert", alertListener);
      window.addEventListener("confirm", confirmListener);
      window.addEventListener("toast", toastListener);

      onUnmounted(() => {
        window.removeEventListener("alert", alertListener);
        window.removeEventListener("confirm", confirmListener);
        window.removeEventListener("toast", toastListener);
      });

      const alertBtnClick = function (value) {
        // 点击确认按钮之后，关闭弹框，并且把这个值传递给回调方法
        alertVisible.value = false;
        dustDispatch("alert-call-back", { operation: value });
      };

      const confirmBtnClick = function (value) {
        confirmVisible.value = false;
        dustDispatch("confirm-call-back", { operation: value });
      };

      return {
        alertVisible,
        confirmVisible,
        toastVisible,
        alertInfo,
        confirmInfo,
        toastInfo,
        alertBtnClick,
        confirmBtnClick,
      };
    });
  },
};
</script>

<style>
</style>