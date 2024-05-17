<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        page: 1,
        limit: 4,
        films: [
          {id: 1, name: 'Джfasdfaамбо', description: 'выофао ывао фы оаывиа фыв иаофыив ф ывоиа офы', rating: 7, img: '../../../images/poster.png'},
          {id: 1, name: 'Джамбо', description: 'выофао ывао фы оаывиа фыв иаофыив ф ывоиа офы', rating: 7, img: '../../../images/poster.png'},
          {id: 1, name: 'Джамбо', description: 'выофао ывао фы оаывиа фыв иаофыив ф ывоиа офы', rating: 7, img: '../../../images/poster.png'},
          {id: 1, name: 'Джамбо', description: 'выофао ывао фы оаывиа фыв иаофыив ф ывоиа офы', rating: 7, img: '../../../images/poster.png'},
        ]
      }
    },


    methods: {
      async fetchFilms() {
        try {
          const response = await axios
        } catch (e) {
          alert(e.message)
        }
      }
    }
  }
</script>

<template>
  <top-header></top-header>
  <arr-films :films2="films"></arr-films>
  <div id="bottom"><bottom-contacts ></bottom-contacts></div>
</template>

<style>
#bottom {
  margin-top: 100px;
}
</style>