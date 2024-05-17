<script>
  export default {

  }
</script>

<template>
  <top-header></top-header>
  <div id="main-page">

    <div id="main-page-container">

      <div id="site-info">
        <span id="service-name">MoWhee</span>
        <p id="service-description">Социальная платформа любителей кино, объединяющая киноманов со всего мира</p>
        <my-button-1 @click="$router.push('/MovieCatalog')" :textButton="'Выбрать фильм'"></my-button-1>
      </div>

      <div id="main-page-image">
        <img id="main-image" src="../../../images/Group 30.png" alt="">
      </div>

    </div>

  </div>

</template>

<style>

#main-page {
  width: 100%;
  display: flex;
  background-image: url("../../../images/film 1.png");
  background-size: contain;
}

#main-page-container {
  width: 70%;
  margin: 150px auto 300px auto;
  display: flex;
  align-items: center;
}

#site-info {
  width: 50%;
}

#main-page-image {
  width: 50%;
}

#service-name {
  font-size: 100px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#service-description {
  width: 60%;
  font-size: 20px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  color: white;
  margin-bottom: 30px;
}

</style>