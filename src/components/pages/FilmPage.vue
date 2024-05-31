<script>

import {getActor, getDirector, getMovieById, getUsernameById} from "@/api/api";

  export default {
    data() {
      return{
        isAuth: localStorage.getItem('isAuth'),
        film: {},
        films: {
          name: 'Название фильма',
          description: 'Тут какое-то описание фильма',
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
        ],
        directors: ['vanya', 'petya'],
        actors: ['gosha', 'bodya'],
        comments: [],
        directorNames: [],
        actorNames: []
      }


    },
    async created() {
      const filmId = this.$route.params.id;
      await this.getFilm(filmId);
      await this.getDirectorNames();
      await this.getActorNames();
      await this.getFeedbacks();
    },

    methods: {
      async getFilm(filmId) {
        await getMovieById(filmId)
            .then(movie => this.film = movie);
      },
      async getDirectorNames() {
        if (!this.film.movieDirectors || !Array.isArray(this.film.movieDirectors)) {
          return;
        }
        this.directorNames = await Promise.all(
            this.film.movieDirectors.map(async (director) => {
              const result = await getDirector(director.directorId);
              return result.name;
            })
        );
      },
      async getActorNames() {
        if (!this.film.movieActors || !Array.isArray(this.film.movieActors)) {
          return;
        }
        this.actorNames = await Promise.all(
            this.film.movieActors.map(async (actor) => {
              const result = await getActor(actor.actorId);
              return result.name;
            })
        );
      },
      async getFeedbacks() {
        this.comments = this.film?.movieFeedbacks;

        for (let feedback of this.comments) {
          await getUsernameById(feedback.userId)
              .then(username => feedback.username = username);
        }
      }
    },
  }
</script>

<template>
  <top-header></top-header>
  <div id="main-page-container-info">
    <film-info :film=film :actor-names=actorNames :director-names=directorNames></film-info>
  </div>

  <rating-menu id="menu-rating"></rating-menu>
  <test-comments-list :comments="comments"></test-comments-list>
  <new-comment :movie-id=film?.id id="new-comment-block" v-if="isAuth === 'true'"></new-comment>
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