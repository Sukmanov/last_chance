<script>
  export default {
    name: 'rating-menu',
  }
</script>

<template>
  <div class="ratingMenu">
    <div id="left-rating">

      <div id="rate">

          <span id="number-rate">9</span>
          <img src="../../../images/Star1.png" alt="" id="image">
      </div>

      <span id="text">По версии юзеров</span>
    </div>


    <div id="right-rating">
      <span id="stars-percent">7-10 34%</span>
      <span id="stars-percent">4-6 63%</span>
      <span id="stars-percent">1-3 12%</span>
    </div>
  </div>
</template>

<style>
.ratingMenu {
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  width: 50%;
  display: flex;
  align-items: center;
  padding: 20px 20px 20px 20px;
}

#number-rate {
  font-size: 70px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#text {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
  border: 1px solid yellow;
}

#left-rating {
  width: 50%;
  display: flex;
  align-items: center;
  height: 150px;
  flex-direction: column;
}

#right-rating {

  width: 50%;
  display: flex;
  height: 150px;
  flex-direction: column;
  justify-items: center;
  align-items: center;

}

#rate {
  display: flex;
  align-items: center;
  flex: 1;
}

#image {
  width: 60px;
  height: 60px;
}

#stars-percent {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
  flex: 1;
}

</style>