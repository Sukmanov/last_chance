<script>

import {getMovieById, getUsernameById} from "@/api/api";

  export default {
    data() {
      return{
        isAuth: localStorage.getItem('isAuth'),
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
        ],
        comments: []
      }


    },
    async created() {
      const filmId = this.$route.params.id;
      await this.getFilm(filmId);
      await this.getFeedbacks();


    },
    methods: {
      async getFilm(filmId) {
        await getMovieById(filmId)
            .then(movie => this.film = movie);
      },
      async getFeedbacks() {
        this.comments = this.film?.movieFeedbacks;

        for (let feedback of this.comments) {
          await getUsernameById(feedback.userId)
              .then(username => feedback.username = username);
        }
      }
    }
  }

</script>

<template>
  <top-header></top-header>
  <div id="main-page-container-info">
    <film-info :film=film></film-info>
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