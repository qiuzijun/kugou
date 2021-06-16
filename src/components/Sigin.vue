<template>
  <div class="box">
    <div class="boxBeijing">
      <div class="signContent">
        <div>
          <img src="../assets/logo.png" alt="" width="153px" height="37px" />
        </div>
        <div class="signInput">
          <div class="Login">
            <router-link
              to="/Login"
              class="loginLink"
              @click="routerLogin"
              :class="{ router1 }"
              >登录</router-link
            >
            <router-link
              to="/register"
              class="loginRegister"
              @click="routerRegister"
              :class="{ router2 }"
              >注册</router-link
            >
          </div>
          <router-view class="loginView"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      router1: 'router1',
      router2: ''
    }
  },
  methods: {
    routerLogin() {
      this.router1 = ''
      this.router2 = ''
    },
    routerRegister() {
      this.router1 = ''
      this.router2 = 'router2'
    }
  }
}
</script>
<style>
.box {
  width: 100%;
  height: 100%;
}
.boxBeijing {
  overflow: hidden;
  background-image: url('../assets/sign_bg.db29b0fb.png');
  height: 936px;
}
.signContent {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 100px;
}
.signInput {
  width: 400px;
  height: 495px;
  margin-top: 50px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 5px 2px #ccc;
  box-shadow: 0px 0px 5px 2px #ccc;
}
.Login {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 16px;
}
.Login > a {
  color: black;
}
.loginLink {
  padding: 10px;
  margin-right: 100px;
}
.loginRegister {
  padding: 10px;
}
.router1 {
  font-weight: bold;
  border-bottom: 2px solid blue;
}
.router2 {
  font-weight: bold;
  border-bottom: 2px solid blue;
}
.loginView {
  margin-top: 100px;
}
</style>
