  <script>

  export default {
    name: "arr-films",

    props: {
      films2: {
        type: Array,
        required: true,
      }
    },


  }
</script>

<template>
  <div class="arr-films" v-for="film in films2">
    <film
      :filmName="film.name"
      :filmDescription="film.description"
      :filmRating="film.rating"
      :film-img-path="film.img"
    >
    </film>
  </div>
</template>

<style>

</style>