<script>
  export default {
    name: "film",

    props: {
      filmName: {
        type: String,
        required: true,
      },
      filmDescription: {
        type: String,
        required: true,
      },
      filmRating: {
        type: Number,
        required: true,
      },
      imagePath: {
        type: String,
        required: true,
      },
      directors: {
        type: String,
        required: true,
      }
    }

  }
</script>

<template>
  <img src="" alt="" id="film-poster">

  <div class="film">
    <!--========================================-->

    <div id="info">
      <span v-text="filmName" id="film-name"></span>
      <p v-text="filmDescription" id="film-description"></p>
      <div id="button-and-rating">
        <div><my-button-1 :textButton="'Смотреть'"></my-button-1></div>
        <div><span v-text="filmRating" id="film-rating"></span></div>
        <div><img id="img-star" src="../../../images/Star1.png" alt=""></div>
      </div>
    </div>

    <!--========================================-->
    <div id="container">
      <div id="film-poster">
      </div>

      <div id="directors">
        <span id="director-film">Hdafsd
        </span>
      </div>
    </div>
    <!--========================================-->

  </div>
</template>

<style>

.film {
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);

  padding: 30px 80px 90px;

  width: 50%;
  height: auto;

  display: flex;
}

#film-name {
  color: white;

  font-size: 50px;
  font-weight: 600;
  font-family: "Rubik", sans-serif;

  margin-bottom: 90px;
}

#film-description {
  color: white;

  font-size: 20px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
}

#info {
  display: inline-block;
  width: 800px;
}

#film-rating {
  color: white;

  font-size: 60px;
  font-weight: 600;
  font-family: "Rubik", sans-serif;

}

#button-and-rating {
  display: flex;
  align-items: center;
}

#img-star {
  width: 50px;
  height: 50px;
}

#directors {
  color: white;
  text-align: right ;
  display: block;
}

#container {
  display: inline-block;
}




</style>