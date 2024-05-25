<script setup>

import MyInput1 from "@/components/UI/MyInput1.vue";
import MyButton1 from "@/components/UI/MyButton1.vue";
</script>

<template>
  <div class="change-password-container">
    <span id="text-login">Восстановите пароль</span>
    <my-input-1 nameInput="Логин" id="login-button"></my-input-1>
    <my-input-1 nameInput="Пароль" id="password-button"></my-input-1>
    <my-input-1 nameInput="Пароль (повторно)" id="password-button"></my-input-1>
    <my-button1 text-button="Сменить пароль" id="login-button"></my-button1>
  </div>

</template>

<style scoped>

.change-password-container {
  width: 80%;
  margin: 15% auto 15% auto;

  text-align: center;

  display: flex;
  flex-direction: column;
}

#login-button {
  margin: 15px auto 0 auto;
}

#password-button {
  margin: 15px auto 0 auto;
}

</style>