<script>
  import {getUserById} from "@/api/api";
  import MyInput1 from "@/components/UI/MyInput1.vue";
  import MyButton1 from "@/components/UI/MyButton1.vue";
  import EditProfile from "@/components/UI/EditProfile.vue";
  import BottomContacts from "@/components/UI/BottomContacts.vue";
  import AchievementList from "@/components/UI/AchievementList.vue";
  import MyButton2 from "@/components/UI/MyButton2.vue";
  import TopHeader from "@/components/UI/TopHeader.vue";

  export default {
    components: {TopHeader, MyButton2, AchievementList, BottomContacts, EditProfile, MyButton1, MyInput1},
    data() {
      return {
        level: 7,
        user: {},
        isEditing: false,
        editedName: '',
        editedLogin: '',
        editedTelegramId: ''
      }
    },
    async created() {
      await getUserById(localStorage.getItem('userId'))
          .then(user => {
            this.user = user;
            console.log(user.name);
          });
      this.isEditing = false;
    },
    methods: {
      showEditPage(){
        this.isEditing = true;
      },
      goToTelegram(tgId) {
        fetch('http://t.me/' + tgId.substring(1), {
          method: 'GET',
          mode: 'cors',
        }).then(window.location.href = "http://t.me/" + tgId.substring(1));
      }
    }
  }
</script>

<template>
  <top-header></top-header>

  <div class="personal-profile">

    <div id="block-nickname">
      <span id="profile-nickname">{{user?.login}}</span>
    </div>

    <div id="block-photo-and-bio">

      <div id="profile-photo">
        <img id="profile-img" :src="`http://localhost:5123/api/file/${user?.avatarId}`" alt="">
      </div>
      <div id="profile-bio">
        <span id="level">Уровень:{{user?.level}}</span>
        <p id="bio-description">Имя: {{user?.name}}</p>
        <my-button-2 :textButton="'Телеграмм'" @click="goToTelegram(user?.telegram)"></my-button-2>
        <my-button-2 id="edit-profile" :textButton="'Редактировать профиль'" @click="showEditPage"></my-button-2>
      </div>

    </div>

    <edit-profile :user=user v-if="isEditing === true"></edit-profile>

  </div>

<!--  <div id="achievements-grid">-->
<!--    <span id="achievements-last">Последние ачивки</span>-->
<!--    <achievement-list :challenges="user?.userChallenges" id="achievement-grid"></achievement-list>-->
<!--    <my-button-1 id="show-all-button" :textButton="'Смотреть все'"></my-button-1>-->
<!--  </div>-->
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