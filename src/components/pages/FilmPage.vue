<script>


  export default {
    data() {
      return{
        films: {
          name: 'ДЖафыва',
          description: 'sdfhhusd dhsf usduf asudf dush fhs',
          rating: 6,
          imgPath: '../../../images/Постер.png',
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
  <rating-menu></rating-menu>
  <comment-list></comment-list>
  <bottom-contacts></bottom-contacts>

</template>

<style>



</style>