<script>
export default {
  name: "film-info",

  props: {
    FilmName: {
      type: String,
      required: true,
    },
    FilmDirector: {
      type: String,
      required: true,
    },
    FilmActros: {
      type: String,
      required: true,
    },
    FilmDescription: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <div id="film-page-info">
    <span id="film-name">{{FilmName}}</span>
    <span id="director">{{FilmDirector}}</span>
    <span id="actors">{{FilmActros}}</span>
    <p id="description">{{FilmDescription}}</p>
<!--    <my-button-1 :textButton="'Смотреть'"></my-button-1>-->
  </div>
</template>

<style>

#film-page-info{
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
}

#film-name{
  font-size: 8vh;
  font-weight: 100;
  font-family: "Rubik", sans-serif;
  color: white;
}

#director {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#actors {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#description {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}


</style>