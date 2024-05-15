<script>

export default {
  name: 'top-header',

  methods: {
    Search() {
      console.log('Search func');
    },
    Login() {
      console.log('Login func');
    }
  }
}

</script>

<template>
  <div id="block">
    <div class="top-header-elems">
      <img src="../../../images/logo.png" alt="" id="image">

    </div>
    <div class="top-header-elems">
      <my-button-2 :textButton="'Поиск'" @click="Search"></my-button-2>
    </div>
    <div class="top-header-elems">
      <my-button-2 :textButton="'Войти'" @click="Login"></my-button-2>

    </div>
  </div>
</template>

<style>

#block {
  display: flex;
  justify-content: space-between;


  margin-left: auto;
  margin-right: auto;
  align-items: center;

  width: 70%;
  height: 80px;

  margin-bottom: 50px;
}

#image {
  width: 80px;
  height: 80px;
}

.top-header-elems {
  width: 80px;
}

</style>