<script>
import {putMovieFeedback} from "@/api/api";
import {generateGUID, generateNowISODateTime} from "@/api/helpers";

export default {
  name: "new-comment",

  props: {
    movieId: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      rating: 0,
      hoverRating: 0,
      comment: ''
    };
  },
  methods: {
    setRating(star) {
      this.rating = star;
    },
    async submitReview() {
      const requestBody = {
        id: generateGUID(),
        text: this.comment,
        rating: this.rating,
        movieId: this.movieId,
        userId: localStorage.getItem("userId"),
        createdAt: generateNowISODateTime()
      };
      await putMovieFeedback(requestBody).then();
      // window.location.reload();
    },

  }
};
</script>

<template>
  <div class="review">
    <textarea v-model="comment" placeholder="Ваш комментарий..."></textarea>
    <div class="stars">
      <span
          v-for="star in 10"
          :key="star"
          class="star"
          :class="{'selected': star <= rating, 'hovered': star <= hoverRating}"
          @mouseover="hoverRating = star"
          @mouseleave="hoverRating = 0"
          @click="setRating(star)"
      >★</span>
    </div>
    <my-button-1 @click="submitReview" :textButton="'Отправить'"></my-button-1>
  </div>
</template>

<style scoped>
.review {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #000;
  color: #fff;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
}

textarea {
  width: 90%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #333;
  color: #fff;
  font-size: 20px;

}

.stars {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.star {
  font-size: 50px;
  cursor: pointer;
  color: #ccc;
  transition: color 0.2s;
}

.star.selected,
.star.hovered {
  color: gold;
}

</style>
