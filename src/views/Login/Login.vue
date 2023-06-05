<template>
  <div class="login">
    <h2>Login</h2>

    <input type="text" v-model="loginData.username">
    <input type="password" v-model="loginData.password">

    <button @click="login">登录</button>

  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import useUser from "../../stores/useUser"


const userStore = useUser()
const route = useRouter()


const loginData = reactive({
  username: "",
  password: ""
})


async function login() {
  await userStore.login(loginData);

  //页面跳转
  route.push({
    path: "/home"
  })
}

</script>

<style></style>