<template>
  <div class="header">
    <div>
      <!-- <span>账号:</span> -->
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
      <!-- <div class="Login">
        <el-button type="primary" round class="el-button">登录</el-button>
      </div> -->
      <!-- <router-link to="/register">注册</router-link> -->
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
.input1 {
  display: block;
  width: 300px;
  margin-bottom: 50px;
}

.Login {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
/* .el-button {
  width: 250px;
} */
</style>
