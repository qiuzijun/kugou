<template>
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
      ></el-input>
      <div class="Login">
        <el-button type="primary" round class="el-button" @click="number"
          >登录</el-button
        >
      </div>
      <router-link to="/register">注册</router-link>
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
      var ip1 = /^[A-Z][A-Za-z0-9]{8,12}$/
      if (ip1.test(this.input1)) {
        console.log('账号正确')
      } else {
        alert('账号错误,开头大写字母8-12位')
      }
      this.axios
        .get('/public/mock/login.json')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style>
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
  margin-top: -50px;
}
.input1 {
  margin-bottom: 100px;
}

.Login {
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
