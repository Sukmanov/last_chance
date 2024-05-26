<script>
  import axios from 'axios';
  import MyButton1 from "@/components/UI/MyButton1.vue";
  import {getRandomMovie} from "@/api/api";
  import MoviePopupWindow from "@/components/UI/MoviePopupWindow.vue";

  export default {
    components: {MoviePopupWindow, MyButton1},
    data() {
      return {
        randomMovie: null,
        showPopup: false,
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
      },
      showPopupWindow() {
        this.showPopup = true;
      },
      closePopupWindow() {
        this.showPopup = false;
      },
      getRandom() {
        getRandomMovie()
            .then(movie => {
              this.randomMovie = movie;
            });
      },
      onClickRandom() {
        this.getRandom();
        this.showPopupWindow();
      },
      updateMovie(movie) {
        this.randomMovie = movie;
      }
    }
  }
</script>

<template>
  <top-header></top-header>
  <my-button1 @click="onClickRandom" class="random-button" text-button="Сгенерировать случайный фильм"></my-button1>
  <transition name="random">
    <div v-if="showPopup" class="popup">
      <MoviePopupWindow :movie="randomMovie" @update-movie="updateMovie"></MoviePopupWindow>
    </div>
  </transition>
  <arr-films :films2="films"></arr-films>
  <div id="bottom"><bottom-contacts ></bottom-contacts></div>
</template>

<style>
#bottom {
  margin-top: 100px;
}

.random-button {
  margin: 15px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: #000;
  padding: 20px;
  border-radius: 5px;
}
</style>