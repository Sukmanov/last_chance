<script>

import MyButton2 from "@/components/UI/MyButton2.vue";
import {getMoviesByName} from "@/api/api";

export default {
  name: 'top-header',
  components: {MyButton2},

  methods: {
    Search() {
      console.log(this.searchParam);
      if (this.$router.path !== '/MovieCatalog') {
        this.$router.push({ path: `/MovieCatalog`, params: { name: this.searchParams } });
      } else {

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
      <div class="search-container">
        <my-input-1 v-model="searchParam" id="search-input" :nameInput="'Поиск'"></my-input-1>
        <my-button-2 id="search-button" :textButton="'Поиск'" @click="Search"></my-button-2>
      </div>
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
}

#film-page-navi {
  background-color: transparent;
  border: none;
}

.search-container {
  display: flex;
  justify-content: space-between;
  width: 300px;
}

#search-input {
  margin-top: 7px;
  margin-right: 10px;
}

</style>