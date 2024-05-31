<script>
  import MyButton1 from "@/components/UI/MyButton1.vue";
  import {getMovies, getMoviesByName} from "@/api/api";
  import MoviePopupWindow from "@/components/UI/MoviePopupWindow.vue";
  import MovieFilter from "@/components/UI/MovieFilter.vue";

  export default {
    components: {MovieFilter, MoviePopupWindow, MyButton1},
    data() {
      return {
        page: 1,
        limit: 4,
        films: [],
        filteredFilms: []
      }
    },
    methods: {
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
    async mounted() {
      if (localStorage.getItem("searchParam")) {
        this.filteredFilms = await getMoviesByName(localStorage.getItem("searchParam"))
      }

    }
  };
</script>

<template>
  <top-header></top-header>
  <MovieFilter @filter-movies="filterMovies"></MovieFilter>
  <test-arr-films :films2="filteredFilms"></test-arr-films>
  <div id="bottom"><bottom-contacts ></bottom-contacts></div>
</template>

<style>
#bottom {
  margin-top: 100px;
}
</style>