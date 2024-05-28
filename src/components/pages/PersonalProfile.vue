<script>
  export default {
    data() {
      return {
        level: 7
      }
    }
  }
</script>

<template>
  <top-header></top-header>

  <div class="personal-profile">

    <div id="block-nickname">
      <span id="profile-nickname">nickname</span>
    </div>

    <div id="block-photo-and-bio">

      <div id="profile-photo">
        <img id="profile-img" src="https://i.yapx.ru/XeOYc.png" alt="">
      </div>
      <div id="profile-bio">
        <span id="level">Уровень:{{level}}</span>
        <p id="bio-description">dfha hadfh asdf as fsd fs ajs fbas df hsdf jhas ва фыва фыва фыв аы фавф ыва</p>
        <my-button-2 :textButton="'телеграмм'"></my-button-2>
        <my-button-2 :textButton="'вконтакте'"></my-button-2>
        <my-button-2 id="edit-profile" :textButton="'Редактировать профиль'"></my-button-2>
      </div>

    </div>

  </div>

  <div id="achievements-grid">
    <span id="achievements-last">Последние ачивки</span>
    <achievement-list id="achievement-grid"></achievement-list>
    <my-button-1 id="show-all-button" :textButton="'Смотреть все'"></my-button-1>
  </div>
  <bottom-contacts></bottom-contacts>

</template>

<style>

.personal-profile {
  padding: 30px 80px;

  width: 60%;
  height: auto;

  display: flex;

  margin: 30px auto;

  flex-direction: column;
  align-items: center;

}

#profile-nickname {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;

}

#block-nickname {
  text-align: center;
  width: 100%;
}

#block-photo-and-bio {
  margin-top: 20px;
  display: flex;
}

#profile-photo {
  border-radius: 20px;
  border: 1px solid yellow;
  width: 30%;
  padding: 10px 10px 10px 10px;
  box-shadow: 0 0 10px 5px rgba(255, 166, 0, 0.8);

}

#profile-bio {
  border-radius: 20px;
  border: 1px solid yellow;
  width: 70%;
  margin-left: 20px;
  box-shadow: 0 0 10px 5px rgba(255, 166, 0, 0.8);
  padding: 10px 10px 10px 10px;
  flex-direction: column;
  display: flex;
}

#level {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#bio-description {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#achievements-last {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
  margin: 60px 0 10px 0;
}

#achievements-grid {
  text-align: center;

}

#show-all-button {
  margin-top: 20px;
}

#profile-img {
  width: 100%;
  height: 100%;
}

#edit-profile {
  margin: 0 90px 0 auto;
}

</style>