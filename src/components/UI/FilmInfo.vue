<script>
export default {
  name: "film-info",
  data() {
    return {
      posterLink: ''
    }
  },

  props: {
    film: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div id="--film-info__film-page-container">
    <div id="--film-info__film-page-info">
      <span id="--film-info__film-name">{{film?.name}}</span>
      <span id="--film-info__director">{{film?.director}}</span>
      <span id="--film-info__actors">{{}}</span>
      <p id="--film-info__description">{{film?.description}}</p>
      <!--    <my-button-1 :textButton="'Смотреть'"></my-button-1>-->
    </div>

    <div id="--film-info__film-image-container">
      <img id="--film-info__film-image" :src="`http://localhost:5123/api/file/${film?.posterId}`" alt="">
    </div>
  </div>

</template>

<style>

#--film-info__film-page-info{
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
}

#--film-info__film-name{
  font-size: 8vh;
  font-weight: 100;
  font-family: "Rubik", sans-serif;
  color: white;
}

#--film-info__director {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#--film-info__actors {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#--film-info__description {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#--film-info__film-page-container{
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-grow: 1;
}

#--film-info__film-image {
  margin-left: 20vh;
  width: 60%;
  height: 60%;
  margin-bottom: 10px;
  border-radius: 20px;
}


</style>