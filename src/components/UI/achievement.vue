<script>
  export default {
    name: 'achievement',

    props: {
      Name: {
        type: String,
        required: true,
      },
      Description: {
        type: String,
        required: true,
      }
    }
  }


</script>

<template>
  <div class="achievement">
    <span id="achievement-name">{{Name}}</span>
    <p id="achievement-text">{{Description}}</p>
  </div>
</template>

<style>

.achievement {
  display: flex;
  width: 180px;
  margin: 0 auto 30px;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  padding: 20px 20px 20px 20px;
  flex-direction: column;
}

#achievement-name {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#achievement-text {
  font-size: 20px;
  font-weight: 200;
  font-family: "Rubik", sans-serif;
  color: white;
}

</style>