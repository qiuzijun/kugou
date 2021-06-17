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
                placeholder="账号开头大写字母8-12位"
                class="input1"
              ></el-input>
              <el-input
                v-model="input2"
                placeholder="密码8-16个字符，至少1个大写字母、小写字母、数字"
                class="input2"
                show-password
              ></el-input>
              <el-input
                v-model="input3"
                placeholder="请输入再次密码"
                show-password
              ></el-input>
              <div class="Login">
                <div type="primary" round class="el-button" @click="number">
                  注册
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mock from '/public/mock/login.json'
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  },
  methods: {
    number() {
      var nbr = /^[A-Z][A-Za-z0-9]{8,12}$/
      var pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
      if (this.input1 == '' && this.input2 == '') {
        alert('不能为空')
      } else {
        if (nbr.test(this.input1)) {
          console.log('账号符合要求')
        } else {
          alert('账号不符合要求')
        }
        if (pwd.test(this.input2)) {
          console.log('密码符合')
        } else {
          alert('密码不符合')
        }
        if (
          this.input2 == this.input3 &&
          this.input1 != '' &&
          this.input2 != ''
        ) {
          var list1 = { username: this.input1, password: this.input2 }
          mock.list.push(list1)
          console.log(mock)
          alert('注册成功')
        }
      }
    },
    toLogin() {
      this.$router.push({
        path: '/Login'
      })
    },
    toRegister() {
      this.$router.push({
        path: '/Register'
      })
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
  margin-bottom: 50px;
}
.input2 {
  margin-bottom: 50px;
}

.input > .Login {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 50px;
}
.el-button {
  width: 250px;
}
</style>
