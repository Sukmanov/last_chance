<script>

  export default {
    data() {
      return{
        films: {
          name: 'Название фильма',
          description: 'Тут какое-то описание фильма',
          rating: 6,
          imgPath: 'https://i.yapx.ru/XeOdE.png',

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

      }


    },

    props: {
      film: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<template>
  <top-header></top-header>
  <div id="main-page-container-info">
    <film-info :FilmDescription="films.description"
               :FilmActors="actors"
               :FilmDirectors="directors"
               :FilmName="films.name"
     ></film-info>/
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