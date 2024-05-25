<script>

</script>

<template>
  <top-header></top-header>
  <div class="container-achieves">
    <div id="daily-achievements">

      <div id="div-type">
        <span id="type-achieves">Еженедельные задания</span>
      </div>

      <achievement-list id="achievement-grid"></achievement-list>
      <my-button-1 @click="$router.push('/DailyAchievementCatalog')" id="watch-all" :textButton="'посмотреть все'"></my-button-1>
    </div>
    <div id="daily-achievements">

      <div id="div-type">
        <span id="type-achieves">Постоянные задания</span>
      </div>

      <achievement-list id="achievement-grid"></achievement-list>
      <my-button-1 @click="$router.push('/DailyAchievementCatalog')" id="watch-all" :textButton="'посмотреть все'"></my-button-1>
      <my-button-1 @click="$router.push('/ConstAchievementCatalog')" id="watch-all" :textButton="'посмотреть все'"></my-button-1>
    </div>
  </div>

  <bottom-contacts></bottom-contacts>
</template>

<style>


#watch-all {
  margin: 0 20% 0 auto;
}

#div-type{
  width: 55%;
  margin: 0 auto;
  text-align: left;
}

#type-achieves {
}

#type-achieves {
  font-size: 35px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#achievement-grid{
  margin-top: 50px;
}

#daily-achievements {
  display: flex;
  flex-direction: column;
}

.container-achieves {
  width: 100%;
  margin: 0 auto 100px;
}


</style>