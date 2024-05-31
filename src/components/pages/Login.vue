<script>
  import {sendLoginRequest} from "@/api/api";
  import {ElMessage, ElNotification} from "element-plus";

  export default {

    methods: {
      async logIn() {
        const response = await sendLoginRequest(this.loginInput, this.passwordInput);

        if (response.ok) {
          const authData = await response.json();
          localStorage.setItem("userId", authData.id);
          localStorage.setItem("token", authData.accessToken);
          localStorage.setItem("isAuth", true);
          console.log(authData.login)
          if (authData.name === "admin") {
            localStorage.setItem("isAdmin", true);
          } else {
            localStorage.setItem("isAdmin", false);
          }

          this.$router.push("/");
        } else {
          ElMessage({
            message: 'Логин или пароль введены неверно.',
            type: 'error',
            showClose: true,
          })
        }
      }
    },

    data() {
      return {
        loginInput: '',
        passwordInput: '',
      }
    },
  }
</script>

<template>
  <div class="div-back">
    <my-button-2 id="button-back" :textButton="'Главная страница'" @click="$router.push('/')"></my-button-2>
  </div>
  <div class="login-container">
    <span id="text-login">Войдите в свой аккаунт</span>
    <input v-model="loginInput" placeholder="Логин" class="input-field">
    <input type="password" v-model="passwordInput" placeholder="Пароль" class="input-field">
    <my-button-2
        textButton="Забыли пароль?"
        id="forget-pass-button"
        @click="$router.push('/change-password')"></my-button-2>
    <my-button-1 @click="logIn" textButton="Вход" id="login-button"></my-button-1>
    <my-button-2
        textButton="Еще нет аккаунта? Регистрация"
        id="forget-pass-button"
        @click="$router.push('/registration')"
    ></my-button-2>

  </div>
</template>

<style>

.input-field {
  padding-left: 10px;
  margin: 15px auto 0 auto;
  width: 300px;
  height: 30px;
  color: black;

  font-size: 15px;
  font-weight: 300;

  background-color: #D9D9D9;
}

.input-field::placeholder {
  color: grey;
}

.input-field:focus {
  color: black;
}

.login-container {
  width: 80%;
  margin: 15% auto 15% auto;

  text-align: center;

  display: flex;
  flex-direction: column;
}

#text-login {
  color: white;
  font-size: 50px;
  font-weight: 600;
  font-family: "Rubik", sans-serif;
}

#login-button {
  margin: 15px auto 0 auto;
}

#password-button {
  margin: 15px auto 0 auto;

}

#forget-pass-button {
  margin: 15px auto 0 auto;

  width: 500px;
}

#button-back {
  width: 20%;
}

</style>