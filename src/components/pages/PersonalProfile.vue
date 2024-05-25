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
    <span id="profile-nickname">nickname</span>
    <div id="personal-details">
      <div id="profile-photo">

      </div>
      <div id="profile-info">
        <span id="level-text">Уровень: {{level}}</span>
        <p id="bio">ajef jafu uaeuf aed dsf asdf aefw da fas fwea fds fasd efads faef sdf as fwe fds </p>
      </div>
    </div>
  </div>

</template>

<style>

.personal-profile {
  text-align: center;
  margin-top: 40px;
}

#profile-nickname {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#personal-details {
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;


  border: 1px solid red;
  padding: 20px;
  position: relative;
}

#profile-photo {
  border: 1px solid yellow;
  width: 30%;
}

#profile-info {
  /*добавить желтое свечение*/
  border: 1px solid yellow;
  width: 60%;
  margin-left: 5px  ;
  position: absolute;
  right: 20px;
  text-align: left;
}

#level-text {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#bio {
  font-size: 20px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  color: white;
}


</style>