<script>

import MyButton2 from "@/components/UI/MyButton2.vue";

export default {
  name: 'top-header',
  components: {MyButton2},

  methods: {
    Search() {
      console.log('Search func');
    },


  },

  data() {
    return{
      authFlag: false,
    }
  }



}

</script>

<template>
  <div id="block1">
    <div class="top-header-elems">
      <button id="film-page-navi" @click="$router.push('/')">
        <img src="../../../images/logo.png" alt="" id="image">
      </button>

    </div>

    <div class="top-header-elems">
<!--      <my-button-2 :textButton="'Поиск'" @click="Search"></my-button-2>-->
      <my-input-1 :nameInput="'Поиск'"></my-input-1>
    </div>

    <div class="top-header-elems">
      <my-button-2 :textButton="'Профиль'" @click="$router.push('/PersonalProfile')" v-if="authFlag === true"></my-button-2>
      <my-button2 :textButton="'Войти'" @click="$router.push('/login')" v-else></my-button2>/
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

.top-header-elems {
}

#film-page-navi {
  background-color: transparent;
  border: none;
}

</style>