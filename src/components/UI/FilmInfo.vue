<script>
export default {
  name: "film-info",

  props: {
    FilmName: {
      type: String,
      required: true,
    },
    FilmDirectors: {
      type: Array,
      required: true,
    },
    FilmActors: {
      type: Array,
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
  <div id="film-page-container">
    <div id="film-page-info">
      <span id="film-name">{{ FilmName }}</span>

      <div id="filmInfo__directors">
        <span class="filmInfo__label">Режисеры:</span>
        <ul>
          <li v-for="(director, index) in FilmDirectors" :key="index">{{ director }}</li>
        </ul>
      </div>

      <div id="actors">
        <span class="label">Актеры:</span>
        <ul>
          <li v-for="(actor, index) in FilmActors" :key="index">{{ actor }}</li>
        </ul>
      </div>

      <p id="description">{{ FilmDescription }}</p>
      <!--    <my-button-1 :textButton="'Смотреть'"></my-button-1>-->
    </div>

    <div id="film-image">
      <img id="filmInfo__image" src="https://i.yapx.cc/XeOdE.png" alt="">
    </div>
  </div>
</template>

<style>
#film-page-info {
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
}

#film-name {
  font-size: 70px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#filmInfo__directors, #actors {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
  margin: 10px 0;
}

.filmInfo__label {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

#description {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
  margin-top: 20px;
}

#film-page-container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

#film-image {
  width: 50%;
}

#filmInfo__image {
  width: 100%;
  height: 100%;
}
</style>
