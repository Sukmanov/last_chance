<script>

  import {getMovieById} from "@/api/api";

  export default {
    data() {
      return{
        film: null,
        films: {
          name: 'ДЖафыва',
          description: 'sdfhhusd dhsf usduf asudf dush fhs',
          rating: 6,
          imgPath: 'https://i.yapx.ru/XeOdE.png',
          director: 'adsf hasdf ',
          actors: 'asdf sdfuh ashf'
        }
      }


    },
    created() {
      const filmId = this.$route.params.id;
      this.getFilm(filmId);
    },
    methods: {
      async getFilm(filmId) {
        await getMovieById(filmId)
            .then(movie => this.film = movie);
      }
    }
  }
</script>

<template>
  <top-header></top-header>
    <film-info :FilmDescription="film?.description"
               :FilmActros="film?.actors"
               :FilmDirector="film?.director"
               :FilmName="film?.name"></film-info>/
  <rating-menu id="menu-rating"></rating-menu>
  <comments-list></comments-list>
  <bottom-contacts></bottom-contacts>

</template>

<style>

#menu-rating {
  margin: 50px auto 50px auto ;
}


</style>