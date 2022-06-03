<template>
  <div class="login flex-center">
    <transition name="login" mode="out-in">
      <LoginInput v-if="mode === 0" @commitLogin="commitLogin" />
      <RegisterInput v-else @commitRegister="commitRegister" />
    </transition>
    <ModeChange v-model:mode="mode" />
  </div>
</template>

<script>
import LoginInput from "./components/login-input";
import RegisterInput from "./components/register-input.vue";
import ModeChange from "./components/mode-change.vue";

import { ref } from "vue";
import { Login, Register, CheckName } from "../../requests";

export default {
  props: {
    curr: {
      type: String,
    },
  },
  setup() {
    let mode = ref(0);
    let alreadyRegistered = ref(false);

    return {
      mode,
      alreadyRegistered,
    };
  },
  components: {
    ModeChange,
    LoginInput,
    RegisterInput,
  },
  methods: {
    commitLogin: function ({ name, password }) {
      Login({
        name: name,
        password: password,
      })
        .then((result) => {
          this.$router.replace({
            path: this.curr ? this.curr : "main",
          });
        })
        ["catch"]((e) => {
          this.$dust.alert({ content: "账号或密码错误，请重新输入~" });
        });
    },

    commitRegister: function ({ name, password, email }) {
      // 需要先校验名称是否符合要求
      CheckName({
        name: name,
      })
        .then((res) => {
          if (res) {
            return Register({
              name: name,
              password: password,
              email: email,
            });
          } else {
            // 显示名称不符合要求
            this.alreadyRegistered = true;
            this.$dust.alert({ content: "用户名已经被注册啦，请换一个~" });
            return Promise.reject(0);
          }
        })
        .then((re) => {
          console.log("Registerd return ", re);
          return Login({
            id: re.id,
            password: password,
          });
        })
        .then((res) => {
          this.$router.replace({
            path: this.curr ? this.curr : "main",
          });
        });
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url("~@/assets/images/background/back-022.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}

.login-enter-from,
.login-leave-to {
  opacity: 0;
  transform: translate3d(50px, -50%, 0);
}

.login-enter-active,
.login-leave-active {
  transition: all ease 0.3s;
}
</style>
