<script>

  export default {
    name: "film",
    props: {
      film: {
        type: Object,
        required: true
      }
    },
    methods: {
      goToFilmPage(film) {
        this.$router.push({ path: `/FilmPage/${film.id}`, params: { id: film.id } });
      }
    }
  }
</script>

<template>

  <div class="film">

    <div id="a1">
      <div><span id="film-name" v-text="film.name"></span></div>
      <div><p id="film-description" v-text="film.description"></p></div>
      <div><p id="directors">film.Directors</p></div>

      <div id="button-rating">
        <!--     Добавить id поста в query   -->
        <my-button-1 @click="goToFilmPage(film)" :textButton="'Смотреть'"></my-button-1>
        <div><span id="film-rating" v-text="rate"></span></div>
        <div><img id="id-star" src="https://i.yapx.ru/XeOZr.png" alt=""></div>
      </div>
    </div>

    <div id="a2">
      <div id="film-image-container" class="darkened-edges">
        <img id="film-image" :src="`http://localhost:5123/api/file/${film.posterId}`" alt="">
      </div>
    </div>


  </div>
</template>

<style>

#a1 {

  flex-grow: 1;
  width: 40%;
}

#a2 {

  flex-grow: 1;
  width: 40%;

}

.film {
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);

  padding: 30px 80px 90px;

  width: 60%;
  height: auto;

  display: flex;

  margin: 30px auto;
}

#film-name {
  color: white;
  font-size: 10vh;
  font-weight: 100;
  font-family: "Rubik", sans-serif;
}

#film-description {
  margin-top: 10%;
  margin-bottom: 10%;
  color: white;
  font-size: 15px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  -webkit-line-clamp: 5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

#button-rating {
  display: flex;
  align-items: center;
}

#film-rating {
  color: white;
  font-size: 55px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
}

#film-image {
  margin-left: 20vh;
  width: 60%;
  height: 60%;
  margin-bottom: 10px;
  border-radius: 20px;
}

#directors {
  color: white;
  font-size: 30px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  float: right;
}

#id-star {
  width: 40px;
  height: 40px;
}

</style>