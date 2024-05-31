<script>

import {getDirector} from "@/api/api";

export default {
    name: "film",
    props: {
      film: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        directorNames: [],
        rank: {}
      }
    },
    methods: {
      goToFilmPage(film) {
        this.$router.push({ path: `/FilmPage/${film.id}`, params: { id: film.id } });
      },
      async getDirectorName(directorId) {
        const director = await getDirector(directorId);
        console.log(director.name);
        return director.name;
      },
      async fetchDirectorNames() {
        this.directorNames = await Promise.all(
            this.film.movieDirectors.map(async (director) => {
              const result = await getDirector(director.directorId);
              return result.name;
            })
        );
      },
    },
    mounted() {
      this.fetchDirectorNames();
    },
  created() {
    this.rank = (Math.random() * (10 - 5) + 5).toFixed(1);
  }
}
</script>

<template>

  <div class="film">

    <div id="a1">
      <div><span id="film-name" v-text="film.name"></span></div>
      <div><p id="film-description" v-text="film.description"></p></div>

      <div id="button-rating">
        <my-button-1 @click="goToFilmPage(film)" :textButton="'Смотреть'"></my-button-1>
        <div><span id="film-rating">{{this.rank}}</span></div>
        <div><img id="id-star" src="https://i.yapx.ru/XeOZr.png" alt=""></div>
      </div>
    </div>

      <div id="a2">
        <div id="div-film-image">
          <img id="film-image" :src="`http://localhost:5123/api/file/${film.posterId}`" alt="film image">
        </div>
        <div id="directors">
          <span class="label">Режиссеры:</span>
          <ul>
            <li v-for="(name, index) in directorNames" :key="index">{{ name }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div id="film__delete-button" v-if="isAdmin">
      <my-button-1 :textButton="'Удалить'"></my-button-1>
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

  flex-grow: 1;
  width: 50%;
}

#a2 {

  flex-grow: 1;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  font-size: 8vh;
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
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
  margin-bottom: 10px;
  border-radius: 20px;
}

#directors {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
  text-align: right;
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

#div-film-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}
</style>