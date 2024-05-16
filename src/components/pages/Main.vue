<script>
  export default {

  }
</script>

<template>
  <top-header></top-header>

    <div id="main-page-container">

      <div id="site-info">
        <span id="service-name">MoWhee</span>
        <p id="service-description">Социальная платформа любителей кино, объединяющая киноманов со всего мира</p>
        <my-button-1 @click="" :textButton="'Смотреть'"></my-button-1>
      </div>

      <div id="main-page-image">
        <img id="main-image" src="" alt="">
      </div>

    </div>


</template>

<style>

#main-page-container {
  width: 70%;
  margin: 0 auto 0 auto;
  border: red solid 1px;
  display: flex;
}

#site-info {
  border: red solid 1px;
  width: 50%;
}

#main-page-image {
  border: red solid 1px;
  width: 50%;
}

#service-name {
  font-size: 100px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#service-description {
  font-size: 20px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  color: white;
}

</style>