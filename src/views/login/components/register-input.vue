<template>
  <div class="input-container vertical-center">
    <div class="input-box">
      <input
        type="text"
        autocomplete="off"
        v-model="UserId"
        placeholder="用户名"
        class="login-input"
        id="user-input"
      />
      <label for="user-input" class="user-input-label flex-center"
        >用户名</label
      >
    </div>
    <div class="input-box">
      <input
        type="password"
        autocomplete="off"
        v-model="Password"
        placeholder="密码"
        class="login-input"
      />
      <label for="user-input" class="user-input-label flex-center">密码</label>
    </div>

    <div class="input-box">
      <input
        type="text"
        autocomplete="off"
        v-model="Email"
        placeholder="邮箱"
        class="login-input"
        id="email"
      />
      <label for="email" class="user-input-label flex-center">邮箱</label>
    </div>

    <div
      class="login-button flex-center"
      @click="
        $emit('commitRegister', {
          name: UserId,
          email: Email,
          password: Password,
        })
      "
    >
      注册
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserId: "",
      Passsword: "",
      Email: "",
    };
  },
};
</script>

<style scoped lang="scss">
.input-container {
  width: 580px;
  height: 360px;
  padding: 40px 100px 40px 100px;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -50%);
  backdrop-filter: blur(3px);
  box-shadow: 0 0 1px rgba(100, 100, 100, 0.7),
    0 0 10px rgba(100, 100, 100, 0.6), 0 0 20px rgba(100, 100, 100, 0.5),
    0 0 40px rgba(100, 100, 100, 0.4), 0 0 80px rgba(100, 100, 100, 0.3);
}

.input-box {
  position: relative;
  margin-top: 20px;
}

.login-input {
  width: 270px;
  height: 40px;
  border-radius: 3px;
  text-indent: 80px;
  border: 1px solid gray;
  background-color: rgba(255, 255, 255, 0.1);
}

.login-input::-webkit-input-placeholder {
  color: #fff;
  text-indent: 0px;
}

.login-input:focus {
  border-color: rgba(26, 85, 153, 0.5);
  transition: all 0.2s ease;
  outline: 0;
  text-indent: 0;
  box-shadow: inset 0 1px 1px rgba(97, 123, 138, 0.5),
    0 0 10px rgba(84, 118, 137, 0.6);
}

.user-input-label {
  width: 80px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
  z-index: 2;
  transition: all ease-in-out 0.3s;
  color: #fff;
  background-image: linear-gradient(
    45deg,
    rgba(26, 85, 153, 1) 0%,
    rgb(125, 149, 177) 100%
  );
  font-size: 13px;
}

.login-input:focus + label {
  transform: translateX(-80px);
}

.login-button {
  width: 270px;
  height: 48px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  background-image: linear-gradient(
    45deg,
    rgba(26, 85, 153, 1) 0%,
    rgba(102, 122, 145, 1) 100%
  );
  margin-top: 30px;
}
</style>
