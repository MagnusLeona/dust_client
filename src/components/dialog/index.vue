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
import { dustDispatch } from "@/utils/dialog";

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
    let toastTimeOut = ref(0);

    let alertInfo = reactive({ data: {} });
    let confirmInfo = reactive({ data: {} });
    let toastInfo = reactive({ data: {} });

    onMounted(() => {
      console.log("onmounted alert");
      // 注册所有的监听器
      const alertListener = ({ detail }) => {
        alertVisible.value = true;
        console.log(detail, alertInfo);
        alertInfo.data = { ...detail };
      };
      const confirmListener = ({ detail }) => {
        confirmVisible.value = true;
        confirmInfo.data = { ...detail };
      };
      const toastListener = ({ detail }) => {
        toastVisible.value = true;
        toastInfo.data = { ...detail };
        toastTimeOut.value = setTimeout(() => {
          toastVisible.value = false;
        }, 3000);
      };
      window.addEventListener("alert", alertListener);
      window.addEventListener("confirm", confirmListener);
      window.addEventListener("toast", toastListener);
    });

    onUnmounted(() => {
      window.removeEventListener("alert", alertListener);
      window.removeEventListener("confirm", confirmListener);
      window.removeEventListener("toast", toastListener);
      window.clearTimeout(toastTimeOut.value);
    });

    const alertBtnClick = function (value) {
      // 点击确认按钮之后，关闭弹框，并且把这个值传递给回调方法
      alertVisible.value = false;
      console.log("alertBtnClick", value);
      dustDispatch({ name: "alert-call-back", params: { operation: value } });
    };

    const confirmBtnClick = function (value) {
      confirmVisible.value = false;
      dustDispatch({ name: "confirm-call-back", params: { operation: value } });
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
  },
};
</script>

<style></style>
