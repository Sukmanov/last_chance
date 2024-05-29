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
        },
        Directors: {
          type: Array,
          required: true,
        }


    },

    data() {
      return {
        isAdmin: true,
        directors: ['petya', 'vasya'],
      }
    }

  }
</script>

<template>
  <div id="film__main-block">
    <div class="film">

      <div id="a1">
        <div><span id="film-name" v-text="filmName"></span></div>
        <div><p id="film-describe" v-text="filmDescription"></p></div>

        <div id="button-rating">
          <my-button-1 @click="$router.push('/FilmPage')" :textButton="'Смотреть'"></my-button-1>
          <div><span id="film-rating" v-text="filmRating"></span></div>
          <div><img id="id-star" src="https://i.yapx.ru/XeOZr.png" alt=""></div>
        </div>
      </div>

      <div id="a2">
        <div id="div-film-image"></div><img id="film-image" src="https://i.yapx.cc/XeOdE.png" alt="">

        <div id="directors">
          <span class="label"></span>
          <ul>
            <li v-for="(director, index) in directors" :key="index">{{ director }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div id="film__delete-button" v-if="isAdmin">
      <my-button-1 :textButton="'Удалить'"></my-button-1>
    </div>

  </div>

</template>

<style>

#film__main-block {
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  width: 60%;
  margin: 30px auto;
  padding: 30px 80px 90px;

}

#film__delete-button {
  margin-top: 30px;
}

#a1 {
  border: 1px solid yellow;

  flex-grow: 1;
  width: 50%;
}

#a2 {
  border: 1px solid yellow;
  flex-grow: 1;
  width: 50%;
}

.film {
  border: 1px red solid;
  height: auto;
  width: 100%;

  display: flex;
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
  height: 100%;
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

.label {
  font-weight: bold;
}

#directors {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
  margin: 10px 0;
}

</style>