<script>
import {getActor, getDirector} from "@/api/api";

export default {
  name: "film-info",
  data() {
    return {
      posterLink: '',
      visibleActors: [],
      maxVisibleItems: 3,
      // directorNames: [],
      // actorNames: []
    }
  },

  props: {
    film: {
      type: Object,
      required: true
    },
    directorNames: [],
    actorNames: []
  },
  methods: {
    async fetchDirectorNames() {
      if (!this.film?.movieDirectors || !this.film) {
        console.log(this.film)
        return;
      }
      this.directorNames = await Promise.all(
          this.film?.movieDirectors.map(async (director) => {
            const result = await getDirector(director.directorId);
            return result.name;
          })
      );
    },
    async fetchActorNames() {
      this.actorNames = await Promise.all(
          this.film?.movieActors.map(async (actor) => {
            const result = await getActor(actor.actorId);
            return result.name;
          })
      );
    },
    showMore() {
      this.visibleActors = this.actorNames.slice(0, this.visibleActors.length + this.maxVisibleItems);
    }
  },
  mounted() {
    this.visibleActors = this.actorNames.slice(0, this.maxVisibleItems);
  },
}
</script>

<template>
  <div id="film-page-container">
    <div id="film-page-info">
      <span id="film-name">{{ film?.name }}</span>

      <div id="filmInfo__directors">
        <span class="filmInfo__label">Режисеры:</span>
        <ul>
          <li v-for="(name, index) in directorNames" :key="index">{{ name }}</li>
        </ul>
      </div>

      <div id="actors">
        <span class="label">Актеры:</span>
        <ul>
          <li v-for="(name, index) in visibleActors" :key="index">{{ name }}</li>
        </ul>
        <button class="show-more-btn" v-if="actorNames.length > visibleActors.length" @click="showMore">Показать еще</button>
      </div>

      <p id="description">{{ film?.description }}</p>
    </div>

    <div id="film-image">
      <img id="filmInfo__image" :src="`http://localhost:5123/api/file/${film?.posterId}`" alt="">
    </div>
  </div>

</template>

<style>
#film-page-info {
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
}

#film-name {
  font-size: 8vh;
  font-weight: 100;
  font-family: "Rubik", sans-serif;
  color: white;
}

#filmInfo__directors, #actors {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
  margin: 10px 0;
}

.filmInfo__label {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

#description {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
  margin-top: 20px;
}

#film-page-container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-grow: 1;
}

#film-image {
  width: 50%;
}

#filmInfo__image {
  width: 60%;
  height: 60%;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
}

.show-more-btn {
  border: white solid 1px;
  border-radius: 30px;

  width: 100px;
  height: 30px;

  font-size: 10px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;

  background-color: transparent;

  margin: 0 0 0 20px;
  cursor: pointer;
}

.show-more-btn:hover {
  border: #FFB800 solid 1px;
  color: #FFB800;
}

.show-more-btn:active {
  color: black;
  background-color: #FFB800;
}
</style>