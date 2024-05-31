<script>

import MyButton2 from "@/components/UI/MyButton2.vue";
import {getMoviesByName} from "@/api/api";

export default {
  name: 'top-header',
  components: {MyButton2},

  methods: {
    async Search() {
      console.log(this.searchParam);
      if (this.$router.path !== '/MovieCatalog') {
        localStorage.setItem("searchParam", this.searchParam);
        this.$router.push({
          path: '/MovieCatalog',
          query: { search: this.searchParam }
        });
      } else {
        const componentCatalog = this.$root.$refs.MovieCatalog;
        componentCatalog.filteredFilms = await getMoviesByName();
      }

    },
    LogOut() {
      localStorage.clear();
      this.$router.push('/');
    }

  },

  data() {
    return{
      movies: [],
      searchParam: '',
      authFlag: localStorage.getItem('isAuth'),
    }
  }



}

</script>

<template>
  <div id="block1">
    <div class="top-header-elems">
      <button id="film-page-navi" @click="$router.push('/')">
        <img src="https://i.yapx.ru/XeOOO.png" alt="" id="image">
      </button>
    </div>

    <div class="top-header-elems">
      <input
          v-model="searchParam"
          @input="inputTitle"
          @keyup.enter="Search"
          :placeholder="'Поиск'"
          type="text"
          id="top-header__input"
          autocomplete=""
      >
    </div>

    <div class="top-header-elems">
      <button id="film-page-navi" @click="$router.push('/AchievementMain')">
        <img src="https://i.yapx.ru/XfZyR.png" alt="" id="image">
      </button>
    </div>

    <div class="top-header-elems">
      <my-button2 :textButton="'Выйти'" @click="LogOut" v-if="$route.path === '/PersonalProfile'"></my-button2>
      <my-button-2 :textButton="'Профиль'" @click="$router.push('/PersonalProfile')" v-else-if="authFlag === 'true'"></my-button-2>
      <my-button2 :textButton="'Войти'" @click="$router.push('/login')" v-else></my-button2>
    </div>
  </div>
</template>

<style>

#block1 {
  display: flex;
  justify-content: space-between;


  margin-left: auto;
  margin-right: auto;
  align-items: center;

  width: 70%;
  margin-top: 20px;
}

#image {
  width: 80px;
  height: 80px;
  cursor: pointer;
}
#top-header__input {
  width: 300px;
  height: 35px;
  font-size: 15px;
  font-weight: 300;

  color: grey;
  background-color: #1e1e1e;
  border-radius: 15px;
  border: none;
  padding: 0 5px 0 5px;
}

#film-page-navi {
  background-color: transparent;
  border: none;
}


</style>