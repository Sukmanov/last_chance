<script>
  export default {
    name: 'rating-menu',
    data() {
      return{
        rating: (Math.random() * (10 - 5) + 5).toFixed(1),
      }
    }
  }
</script>

<template>
  <div class="ratingMenu">
    <div id="left-rating">

      <div id="rate">
          <span id="number-rate">{{rating}}</span>
          <img src="https://i.yapx.ru/XeOZr.png" alt="" id="image">
      </div>

      <span id="text">По версии юзеров</span>
    </div>


    <div id="right-rating">
      <div id="stars-percent">7-10 ★ 34%</div>
      <div id="stars-percent">4-6 ★ 53%</div>
      <div id="stars-percent">1-3 ★ 13%</div>
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