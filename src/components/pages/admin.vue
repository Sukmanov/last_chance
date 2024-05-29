<script>

</script>

<template>
  <div class="admin__main">
    <div id="admin__blocks">
      <div><span id="text">Films</span></div>

      <div id="admin__input-fields">
        <my-input-1 id="admin__input" :nameInput="'Название фильма'"></my-input-1>
        <my-input-1 id="admin__description-film" :nameInput="'Описание фильма'"></my-input-1>
        <my-input-1 id="admin__input" :nameInput="'Актеры'"></my-input-1>
        <my-input-1 id="admin__input" :nameInput="'Режисеры'"></my-input-1>
      </div>

      <my-button-1 id="admin__add-film" :textButton="'Добавить фильм'"></my-button-1>


    </div>

    <div id="admin__blocks">
      <span id="text">Achievements</span>
      <div id="admin__input-fields">
        <my-input-1 id="admin__input" :nameInput="'Название ачивки'"></my-input-1>
        <my-input-1 id="admin__description-film" :nameInput="'Описание'"></my-input-1>
      </div>
      <my-button-1 id="admin__add-film" :textButton="'Добавить ачивку'"></my-button-1>

    </div>

    <div id="admin__blocks">
      <span id="text">Users</span>

    </div>
  </div>


</template>

<style>

#admin__blocks {
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  width: 40%;
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 10px 10px 10px 50px;
}

#text {
  font-size: 20px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
}

#admin__description-film {
  margin: 10px auto 0 auto;


  height: 300px;
}
#admin__input-fields {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto 0 auto
}

#admin__input {
  margin: 10px auto 0 auto;
}

#admin__add-film {
  margin-top: 10px;
}

</style>