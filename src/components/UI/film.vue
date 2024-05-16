<script>
  export default {
    name: "film",

    data() {
      return {
        imagePath: require('../../../images/poster.png')
      }
    }
  }
</script>

<template>

  <div class="film">

    <div id="a1">
      <div><span id="film-name">Охотники</span></div>
      <div><p id="film-describe">adfsjf sdhfjha jkd ajksdhf jh asd hsdj f hjsadh fjh  dashfjsadhfj h ajksdhf jash f</p></div>

      <div id="button-rating">
        <div><my-button-1 :textButton="'Смотреть'"></my-button-1></div>
        <div><span id="film-rating">5</span></div>
        <div><img src="../../../images/Star1.png" alt=""></div>
      </div>
    </div>

    <div id="a2">
      <div><img id="film-image" :src="imagePath" alt=""></div>
      <div><p id="directors">DIrectors</p></div>
    </div>


  </div>
</template>

<style>

#a1 {
  border: 1px solid red;
  flex-grow: 1;
  width: 40%;
}

#a2 {
  border: 1px solid red;
  flex-grow: 1;
  width: 40%;

}

.film {
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);

  padding: 30px 80px 90px;

  width: 70%;
  height: auto;

  display: flex;

  margin: 0 auto;
}

#film-name {
  color: white;
  font-size: 55px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
}

#film-describe {
  color: white;
  font-size: 15px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
}

#button-rating {
  display: flex;
  align-items: center;
}

#film-rating {
  color: white;
  font-size: 55px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
}

#film-image {
  width: 100%;
  height: 90%;
  margin-bottom: 10px;
}

#directors {
  color: white;
  font-size: 30px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  float: right;
}

</style>