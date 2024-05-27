<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        page: 1,
        limit: 4,
        films: [
          {id: 1, name: 'Тёмный рыцарь', description: 'Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы Готэма от преступности. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным напуганным горожанам под именем Джокер.', rating: 9.1, img: 'https://i.yapx.ru/XeOdE.png'},
          {id: 2, name: 'Побег из шоушенка', description: 'выофао ывао фы оаывиа фыв иаофыив ф ывоиа офы', rating: 9.3, img: 'https://i.yapx.ru/XeOdE.png'},
          {id: 3, name: 'Властелин колец', description: 'выофао ывао фы оаывиа фыв иаофыив ф ывоиа офы', rating: 8.7, img: 'https://i.yapx.ru/XeOdE.png'}
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
  <test-arr-films :films2="films"></test-arr-films>
  <div id="bottom"><bottom-contacts ></bottom-contacts></div>
</template>

<style>
#bottom {
  margin-top: 100px;
}
</style>