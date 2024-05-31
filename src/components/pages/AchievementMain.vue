<script>
import {getChallenges, getRandomMovie} from "@/api/api";
import AllAchievements from "@/components/UI/AllAchievements.vue";
import MoviePopupWindow from "@/components/UI/MoviePopupWindow.vue";
import MyButton1 from "@/components/UI/MyButton1.vue";

export default {
  components: {MyButton1, MoviePopupWindow, AllAchievements},
  data() {
    return {
      achievements: [],
      randomMovie: {},
      showPopup: false
    }
  },
  async created() {
    this.achievements = await getChallenges()
  },
  methods: {
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
    },
  }
}
</script>

<template>
  <top-header></top-header>
  <div class="container-achieves">

    <div id="daily-achievements">

      <div id="div-type">
        <span id="type-achieves">Ачивки</span>
        <my-button1 @click="onClickRandom" class="random-button" text-button="Сгенерировать случайный фильм"></my-button1>
        <transition name="random">
          <div v-if="showPopup" class="popup">
            <MoviePopupWindow :movie="randomMovie" @update-movie="updateMovie"></MoviePopupWindow>
          </div>
        </transition>
      </div>

      <all-achievements  id="achievement-grid" :challenges="achievements"></all-achievements>
    </div>

  </div>

  <bottom-contacts></bottom-contacts>
</template>

<style>


#watch-all {
  margin: 0 20% 0 auto;
}

#div-type{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  margin: 0 auto;
  text-align: left;
}

#type-achieves {
}

#type-achieves {
  font-size: 35px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#achievement-grid{
  margin-top: 50px;
}

#daily-achievements {
  display: flex;
  flex-direction: column;
}

.container-achieves {
  width: 100%;
  margin: 0 auto 100px;
}

.random-button {
  margin: 20px 0 0 0;
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
</style>