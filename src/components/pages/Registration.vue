<script>

</script>

<template>
  <div class="login-container">
    <span id="text-login">Зарегистрируйтесь</span>
    <my-input-1 nameInput="Логин" id="login-button"></my-input-1>
    <my-input-1 nameInput="Пароль" id="password-button"></my-input-1>
    <my-input-1 nameInput="Повторите пароль" id="password-button"></my-input-1>
    <my-button-1 textButton="Регистрация" id="login-button"></my-button-1>
  </div>
</template>

<style>

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

</style>