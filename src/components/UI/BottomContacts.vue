<script>

export default {
  name: 'bottom-contacts',
}

</script>

<template>
  <div id="block">
    <div id="navi">
      <my-button-2 :textButton="'О нас'" class="block-button"></my-button-2>
      <my-button-2 :textButton="'Возможности'" class="block-button"></my-button-2>
      <my-button-2 :textButton="'Помощь'" class="block-button"></my-button-2>
    </div>

    <div id="contacts">
      <my-button-2 :textButton="'Контакты'" class="block-button" id="contacts-button"></my-button-2>
      <button id="telegram-button">
        <img src="../../../images/Vector.png" alt="" id="image-telegram">
      </button>
    </div>
  </div>
</template>

<style>

#navi {
  width: 70%;
}

.block-button {
  display: flex;
  width: 100%;
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
}

</style>