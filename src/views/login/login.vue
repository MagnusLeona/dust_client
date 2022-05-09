<template>
  <div class="login flex-center">
    <LoginInput @commitLogin="commitLogin" />
  </div>
</template>

<script>
import LoginInput from "./components/login-input";

import { Login } from "../../requests";

export default {
  props: {
    curr: {
      type: String,
    },
  },
  components: {
    LoginInput,
  },
  methods: {
    commitLogin: function (userid, password) {
      console.log(userid, password);
      Login({
        id: userid,
        password: password,
      })
        .then((result) => {
          this.$router.replace({
            path: this.curr ? this.curr : "main",
          });
        })
        ["catch"]((e) => {
          console.error(e);
        });
    },
  },
  created() {
    console.log(Login);
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url("~@/assets/images/background/back-022.jpg");
  background-size: 100%;
}
</style>