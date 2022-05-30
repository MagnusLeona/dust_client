<template>
  <transition name="login-page">
    <div class="login-main" v-if="visible">
      <LoginInput @commitLogin="commitLogin" />
    </div>
  </transition>
</template>

<script>
import LoginInput from "./components/login-input";

import { Login } from "../../requests";
import { dustDispatch } from "@/utils/dialog";

export default {
  props: {
    curr: {
      type: String,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  components: {
    LoginInput,
  },
  methods: {
    commitLogin: function (userid, password) {
      Login({
        id: userid,
        password: password,
      })
        .then((result) => {
          dustDispatch({ name: "login-call-back", params: { status: 1 } });
          this.visible = false;
        })
        ["catch"]((e) => {
          dustDispatch({ name: "login-call-back", params: { status: -1 } });
          this.$dust.alert({ content: "登录失败，请重试~" });
        });
    },

    showLogin: function () {
      this.visible = true;
    },
  },
  mounted() {
    window.addEventListener("login", this.showLogin);
  },
  beforeUnmount() {
    window.removeEventListener("login", this.showLogin);
  },
};
</script>

<style lang="scss" scoped>
.login-main {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 88;
}

.login-page-enter-from,
.login-page-leave-to {
  opacity: 0;
  transform: translate3d(0, 80%, 0);
}

.login-page-enter-active,
.login-page-leave-active {
  transition: all ease 0.3s;
}
</style>