<script>
import MyButton1 from "@/components/UI/MyButton1.vue";
import {getRandomMovie} from "@/api/api";
import FilmPage from "@/components/pages/FilmPage.vue";

export default {
  components: {MyButton1},
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    otherMovie() {
      getRandomMovie()
          .then(movie => {
            this.$emit('update-movie', movie);
          });
    },
    goToFilmPage() {
      this.$router.push('/FilmPage');
    }
  }
};
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <div id="text">Movie: {{ movie?.name }}</div>
      <div id="buttons">
        <my-button1 @click="otherMovie" text-button="Другой фильм"></my-button1>
        <my-button1 @click="goToFilmPage" text-button="Перейти к фильму"></my-button1>
      </div>
    </div>
  </div>
</template>

<style>
#buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}

#text {
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  background: black;
  padding: 20px;
  max-width: 600px;
  width: 100%;
}
</style>
