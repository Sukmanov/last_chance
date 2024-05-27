  <script>

  export default {
    name: "arr-films",

    props: {
      films2: {
        type: Array,
        required: true,
      }
    },

    data() {
      return {
        numPage: 1,
        limit: 5,
        totalPages: 0,
      }
    }
  }
</script>

<template>
  <div class="arr-films" v-for="film in films2">
    <film
      :film="film"
    >
    </film>
  </div>
</template>

<style>

</style>