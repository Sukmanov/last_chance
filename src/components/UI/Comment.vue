<script>
  export default {
    name: 'comment',

    props: {
      Nickname: {
        type: String,
        required: true,
      },
      Comment: {
        type: String,
        required: true,
      }
    },

    data() {
      return {
        isAdmin: true,
      }
    }

  }
</script>

<template>
  <div class="comment">
    <span id="nickname">{{ Nickname }}</span>
    <p id="comment-text">{{Comment}}</p>
    <div id="film__delete-button" v-if="isAdmin">
      <my-button-1 :textButton="'Удалить'"></my-button-1>
    </div>
  </div>
</template>

<style>

#nickname {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#comment-text {
  font-size: 20px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  color: white;
}

.comment {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 10px auto;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  padding: 10px 10px 10px 10px;
}

</style>