<script>
export default {
  name: 'my-button-1',

  props: {
    textButton: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <button v-text="textButton" class="button1"></button>
</template>

<style>
.button1 {

  border: white solid 1px;
  border-radius: 30px;

  width: 260px;
  height: 60px;

  font-size: 20px;
  font-weight: 600;
  font-family: "Rubik", sans-serif;
  color: white;

  background-color: transparent;

  margin: 10px 10px 10px 10px;
}

.button1:hover {
  border: #FFB800 solid 1px;
  color: #FFB800;
}

.button1:active {
  color: black;
  background-color: #FFB800;
}
</style>