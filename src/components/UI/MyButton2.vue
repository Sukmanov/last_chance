<script>
  export default {
    name: 'my-button-2',

    props: {
      textButton: {
        type: String,
        required: true,
      }
    }
  }
</script>

<template>
  <button v-text="textButton" class="button2"></button>
</template>

<style>

.button2 {
  background-color: transparent;
  color: white;

  width: 200px;
  height: 50px;

  border: none;

  font-size: 20px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
}

.button2:hover {

  text-decoration: underline;
}

.button2:active {
  color: grey;
  font-weight: 300;
}

</style>