<template>
  <div class="box">
    <div class="boxBeijing">
      <div class="signContent">
        <div>
          <img src="../assets/logo.png" alt="" width="153px" height="37px" />
        </div>
        <div class="signInput">
          <div class="Login">
            <div
              class="loginLink"
              @click="toLogin"
              :class="$route.path == '/Login' ? 'router1' : ''"
            >
              登录
            </div>
            <div
              class="loginRegister"
              @click="toRegister"
              :class="$route.path == '/Register' ? 'router2' : ''"
            >
              注册
            </div>
          </div>
          <div class="header">
            <div class="input">
              <el-input
                v-model="input1"
                placeholder="请输入账号"
                class="input1"
              ></el-input>
              <el-input
                v-model="input2"
                placeholder="请输入密码"
                class="input2"
                show-password
              ></el-input>
              <div class="Login">
                <div class="el-button" @click="Home">登录</div>
              </div>
              <router-link to="/register">注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: '',
      input2: ''
    }
  },
  methods: {
    number() {
      if (this.input1 != '' && this.input2 != '') {
        var ip1 = /^[A-Z][A-Za-z0-9]{8,12}$/
        if (ip1.test(this.input1)) {
          this.axios
            .get('./mock/login.json?username')
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          alert('账号错误,开头大写字母8-12位')
        }
      } else {
        alert('不能为空')
      }
    },
    Home() {
      this.$router.push({
        path: '/Home'
      })
    },
    toLogin() {
      this.$router.push({
        path: '/Login'
      })
    },
    toRegister() {
      this.$router.push({
        path: '/register'
      })
    }
  },
  mounted() {
    console.log(this.$route.path)
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
.signInput > .Login {
  position: relative;
  z-index: 10;
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
.header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.input {
  width: 250px;
  margin-top: 50px;
}
.input1 {
  margin-bottom: 100px;
}

.input > .Login {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  align-items: flex-start;
  /* margin-top: 50px; */
}
.el-button {
  width: 250px;
}
</style>
