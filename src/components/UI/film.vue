<script>

  export default {
    name: "film",

    props: {
        filmName: {
          type: String,
          required: true,
        },
        filmDescription: {
          type: String,
          required: true,
        },
        filmRating: {
          type: Number,
          required: true,
        },
        filmImgPath: {
          type: String,
          required: true,
        }

    }
  }
</script>

<template>

  <div class="film">

    <div id="a1">
      <div><span id="film-name" v-text="filmName"></span></div>
      <div><p id="film-describe" v-text="filmDescription"></p></div>

      <div id="button-rating">
        <!--     Добавить id поста в query   -->
        <my-button-1 @click="$router.push('/FilmPage')" :textButton="'Смотреть'"></my-button-1>
        <div><span id="film-rating" v-text="filmRating"></span></div>
        <div><img id="id-star" src="https://i.yapx.ru/XeOZr.png" alt=""></div>
      </div>
    </div>

    <div id="a2">
      <div><img id="film-image" src="https://i.yapx.ru/XeOdE.png" alt=""></div>
      <div><p id="directors">film.Directors</p></div>
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
  font-size: 55px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
}

#film-describe {
  color: white;
  font-size: 15px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
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
  width: 100%;
  height: 90%;
  margin-bottom: 10px;
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