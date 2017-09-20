<template lang="html">
<div class="login">
<el-form :model="loginForm" label-position="top" ref="loginForm">
            <el-form-item
              prop="username"
              :rules="[
                { required: true, message: '请输入邮箱', trigger: 'blur' },
                { type: 'email', message: '请输入正确的用户名', trigger: 'blur,change' }
              ]"
            >
              <el-input v-model="loginForm.username" :autofocus="true" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              :rules="[
                { required: true, message: '请输入密码', trigger: 'blur' }
              ]"
            >
              <el-input v-model="loginForm.password" placeholder="密码" type="password" @keyup.enter.native="submitForm('loginForm')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')" v-loading.fullscreen.lock="fullscreenLoading">提交</el-button>
            </el-form-item>
          </el-form>
</div>
</template>
<script>
import {mapState} from 'vuex'
import axios from 'axios'
import { loginUrl, userUrl } from './../config'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      fullscreenLoading: false
    }
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.fullscreenLoading = true
          const postData = {
            username: this.loginForm.username,
            password: this.loginForm.password
          }
          const authUser = {
            username: this.loginForm.username
          }
          axios.post(loginUrl, postData)
            .then(response => {
              if (response.status === 200) {
                authUser.access_token = response.data
                axios.post(userUrl, authUser)
                  .then(response => {
                    if (response.status === 200) {
                      authUser.name = response.data
                      window.localStorage.setItem('authUser', JSON.stringify(authUser))
                      this.$store.dispatch('setUserObject', authUser)
                      this.$router.push({name: 'home'})
                    }
                  })
                  .catch((e) => {
                    this.fullscreenLoading = false
                    this.$message.error('获取用户信息错误 !')
                  })
              }
            })
            .catch((e) => {
              this.fullscreenLoading = false
              this.$message.error('用户名或密码错误 !')
            })
        }
      })
    }
  }
}
</script>
<style lang="css" scoped>
.login {
  width: 20%;
  padding-top: 20%;
  padding-left: 40%;
}
</style>
