<script>

  export default {
    data() {
      return{
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
    <film-info :FilmDescription="films.description"
               :FilmActros="films.actors"
               :FilmDirector="films.director"
               :FilmName="films.name"></film-info>/
  <rating-menu id="menu-rating"></rating-menu>
  <comments-list></comments-list>
  <new-comment id="new-comment-block"></new-comment>
  <bottom-contacts></bottom-contacts>

</template>

<style>

#menu-rating {
  margin: 50px auto 50px auto ;
}


</style>