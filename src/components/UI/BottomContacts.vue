<script>

export default {
  name: 'bottom-contacts',
}

</script>

<template>
  <div class="line"></div>
  <div id="block">
    <div id="navi">
      <my-button-2 :textButton="'О нас'" class="block-button"></my-button-2>
      <my-button-2 :textButton="'Возможности'" class="block-button"></my-button-2>
      <my-button-2 :textButton="'Помощь'" class="block-button"></my-button-2>
    </div>

    <div id="contacts">
      <my-button-2 :textButton="'Контакты'" id="contacts-button"></my-button-2>
      <button id="telegram-button" >
        <img src="https://i.yapx.ru/XeOa4.png" alt="" id="image-telegram">
      </button>
    </div>
  </div>
</template>

<style>
.line {
  margin-top: 10%;
  height: 2px;
  width: 100%;
  background-color: #FFB800;
  box-shadow: 0 0 10px 2px #FFB800;
}

#navi {
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin-left: 15%;
}

.block-button {
  width: 150px;
  text-align: left;
}

#contacts {
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-right: 15%;
}

#image-telegram {
  margin: 0 0 0 0;
  height: 50px;
  width: 50px;
}


#contacts-button {
  float: right;
}

#telegram-button {
  margin-left: 40px;
  height: 70px;
  width: 70px;
  background-color: #101010;
  border-radius: 50px;
  border: none;
  float: right;
}

#block {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  height: 200px;
  width: 100%;
  margin-top: 5%;
}

</style>