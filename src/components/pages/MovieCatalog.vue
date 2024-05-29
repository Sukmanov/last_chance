<script>
  import axios from 'axios';
  import MyButton1 from "@/components/UI/MyButton1.vue";
  import {getMovies, getMoviesByName, getRandomMovie} from "@/api/api";
  import MoviePopupWindow from "@/components/UI/MoviePopupWindow.vue";
  import MovieFilter from "@/components/UI/MovieFilter.vue";

  export default {
    components: {MovieFilter, MoviePopupWindow, MyButton1},
    data() {
      return {
        randomMovie: null,
        showPopup: false,
        page: 1,
        limit: 4,
        films: [],
        filteredFilms: []
      }
    },
    methods: {
      showPopupWindow() {
        this.showPopup = true;
      },
      closePopupWindow() {
        this.showPopup = false;
      },
      getRandom() {
        getRandomMovie()
            .then(movie => {
              this.randomMovie = movie;
            });
      },
      onClickRandom() {
        this.getRandom();
        this.showPopupWindow();
      },
      updateMovie(movie) {
        this.randomMovie = movie;
      },
      filterMovies(filters) {
        this.filteredFilms = this.films.filter(movie => {
          return (!filters.genre.length || filters.genre.includes(movie.genre)) &&
              (!filters.year || movie.year === filters.year) &&
              (!filters.country || movie.country === filters.country) &&
              (!filters.rating || movie.rating >= filters.rating);
        });
      },
    },
    async created() {
      await getMovies()
          .then(movies => {
            this.films = movies;
            this.filteredFilms = this.films;
          })
    },
    props: {
      movies: []
    },
    computed: {
      getByName() {
        this.filteredFilms = this.$props.movies;
      }
    }
  };
</script>

<template>
  <top-header></top-header>
  <MovieFilter @filter-movies="filterMovies"></MovieFilter>
  <my-button1 @click="onClickRandom" class="random-button" text-button="Сгенерировать случайный фильм"></my-button1>
  <transition name="random">
    <div v-if="showPopup" class="popup">
      <MoviePopupWindow :movie="randomMovie" @update-movie="updateMovie"></MoviePopupWindow>
    </div>
  </transition>
  <test-arr-films :films2="filteredFilms"></test-arr-films>
  <div id="bottom"><bottom-contacts ></bottom-contacts></div>
</template>

<style>
#bottom {
  margin-top: 100px;
}

.random-button {
  margin: 15px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: #000;
  padding: 20px;
  border-radius: 5px;
}
</style>