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
        },
        comments2: [
          {id: 1, username: 'ivan petrov', comment: "i like it"},
          {id: 2, username: 'ivan petrov', comment: "i dont like it"},
          {id: 3, username: 'ivan petrov', comment: "i am going to watch"},
          {id: 1, username: 'ivan petrov', comment: "i like it"},
          {id: 2, username: 'ivan petrov', comment: "i dont like it"},
          {id: 3, username: 'ivan petrov', comment: "i am going to watch"},
          {id: 1, username: 'ivan petrov', comment: "i like it"},
          {id: 2, username: 'ivan petrov', comment: "i dont like it"},
          {id: 3, username: 'ivan petrov', comment: "i am going to watch"},
        ]

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
  <div id="main-page-container-info">
    <film-info :FilmDescription="films.description"
               :FilmActros="films.actors"
               :FilmDirector="films.director"
               :FilmName="films.name"
    ></film-info>
  </div>

  <rating-menu id="menu-rating"></rating-menu>
  <test-comments-list :comments="comments2"></test-comments-list>
  <new-comment id="new-comment-block"></new-comment>
  <bottom-contacts></bottom-contacts>

</template>

<style>

#menu-rating {
  margin: 50px auto 50px auto ;
}

#main-page-container-info {
  margin-top: 30px;
}



</style>